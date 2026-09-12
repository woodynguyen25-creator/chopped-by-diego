#!/usr/bin/env node
/**
 * dev/capture.mjs — phone-frame captures of the live page at named scroll states.
 * The site scrolls INSIDE #scroll (artifact-host harness), so we drive that element in small steps
 * (so every scrubbed ScrollTrigger lands where a thumb would put it), then screenshot.
 * States are element selectors (+ optional px offset) so they survive layout changes.
 * Usage: node dev/capture.mjs http://127.0.0.1:8850/index.html?nowidget=1 dev/captures/v3
 */
import { execSync } from 'node:child_process'
import { createRequire } from 'node:module'
import path from 'node:path'
import os from 'node:os'
import fs from 'node:fs'
const require = createRequire(import.meta.url)
function loadChromium () {
  const roots = []
  try { roots.push(execSync('npm root -g', { encoding: 'utf8' }).trim()) } catch {}
  roots.push(path.join(os.homedir(), 'AppData', 'Roaming', 'npm', 'node_modules'))
  for (const r of roots) for (const pkg of ['playwright', '@playwright/test', 'playwright-core']) { try { return require(path.join(r, pkg)).chromium } catch {} }
  throw new Error('playwright not found')
}
const [url, out] = process.argv.slice(2)
fs.mkdirSync(path.dirname(out), { recursive: true })
const chromium = loadChromium()
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
const errors = []
page.on('pageerror', e => errors.push(String(e)))
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(4200)                       // preloader + hero settle
// [name, selector, offset from the element's top (px)]
const states = [['fold', null, 0], ['bio', '#bio', -40], ['shutter', '#shutter', -120], ['fan', '#fan', -140], ['tools', '#tools', -40], ['island', '#island', -160],
  ['work', '#work', -40], ['print2', '.pr:nth-child(2)', -220], ['print4', '.pr:nth-child(4)', -220], ['chair', '#chair', -40], ['rate', '#rate', -40], ['rate2', '#rate', 180], ['book', '#book', -60]]
const scrollTo = async (y) => {
  await page.evaluate(async (y) => { const s = document.getElementById('scroll'); const from = s.scrollTop; const steps = 30
    for (let i = 1; i <= steps; i++) { s.scrollTop = from + (y - from) * i / steps; await new Promise(r => setTimeout(r, 24)) }
    if (window.ScrollTrigger) { ScrollTrigger.update() } }, y)
  await page.waitForTimeout(900)
}
const max = await page.evaluate(() => { const s = document.getElementById('scroll'); return s.scrollHeight - s.clientHeight })
console.log('scroll max', max)
for (const [k, sel, off] of states) {
  const y = sel ? await page.evaluate(([sel, off]) => { const s = document.getElementById('scroll'); const el = document.querySelector(sel); return el ? el.getBoundingClientRect().top + s.scrollTop + off : 0 }, [sel, off]) : 0
  await scrollTo(Math.max(0, Math.min(y, max)))
  if (k === 'rate2') { await page.evaluate(() => document.querySelectorAll('.rw button')[1].click()); await page.waitForTimeout(800) }
  await page.screenshot({ path: `${out}-${k}.png` })
}
await page.evaluate(() => document.querySelector('.pr').click()); await page.waitForTimeout(900)
await page.screenshot({ path: `${out}-lightbox.png` })
console.log('errors:', errors.length ? errors : 'none')
await browser.close()
