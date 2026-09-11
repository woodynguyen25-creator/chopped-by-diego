#!/usr/bin/env node
/**
 * inline-artifact.mjs — produce artifact.html from index.html for the claude.ai Artifact host.
 *  - strips <!doctype>/<html>/<head>/<body> wrappers (the host supplies its own skeleton)
 *  - inlines every assets/*.jpg reference as a data: URI (the host CSP blocks external images)
 * Usage: node scripts/inline-artifact.mjs   → writes artifact.html (gitignored)
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
let html = readFileSync(path.join(root, 'index.html'), 'utf8')

// keep <title> + everything inside <head> that isn't meta charset/viewport, then the body's inner HTML
const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1] ?? ''
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html
const headKeep = head.replace(/<meta[^>]*charset[^>]*>/i, '').replace(/<meta[^>]*viewport[^>]*>/i, '')

let out = headKeep.trim() + '\n' + body.trim() + '\n'

let n = 0, bytes = 0
out = out.replace(/(["'(])assets\/([\w\-.]+\.(?:jpe?g|png|webp|svg))(["')])/g, (m, a, file, b) => {
  const p = path.join(root, 'assets', file)
  if (!existsSync(p)) return m
  const buf = readFileSync(p)
  const mime = file.endsWith('.png') ? 'image/png' : file.endsWith('.webp') ? 'image/webp' : file.endsWith('.svg') ? 'image/svg+xml' : 'image/jpeg'
  n++; bytes += buf.length
  return `${a}data:${mime};base64,${buf.toString('base64')}${b}`
})

writeFileSync(path.join(root, 'artifact.html'), out)
console.log(`artifact.html written — ${n} images inlined (${(bytes/1024).toFixed(0)} KB raw), total ${(out.length/1024/1024).toFixed(2)} MB`)
