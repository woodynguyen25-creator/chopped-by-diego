#!/usr/bin/env node
/**
 * dev/capture.mjs — phone-frame captures of the live page at named scroll states.
 * The site scrolls INSIDE #scroll (artifact-host harness), so we drive that element in small steps
 * (so every scrubbed ScrollTrigger lands where a thumb would put it), then screenshot.
 * Usage: node dev/capture.mjs http://127.0.0.1:8850/index.html?nowidget=1 dev/captures/v2
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
const states = { fold: 0, bio: 700, show: 1150, tools: 1750, work: 2350, work2: 2900, chair: 3500, rate: 4200, rate2: 4600, book: 5400 }
const scrollTo = async (y) => {
  await page.evaluate(async (y) => { const s = document.getElementById('scroll'); const from = s.scrollTop; const steps = 24
    for (let i = 1; i <= steps; i++) { s.scrollTop = from + (y - from) * i / steps; await new Promise(r => setTimeout(r, 28)) }
    if (window.ScrollTrigger) { ScrollTrigger.update() } }, y)
  await page.waitForTimeout(700)
}
const max = await page.evaluate(() => { const s = document.getElementById('scroll'); return s.scrollHeight - s.clientHeight })
console.log('scroll max', max)
for (const [k, y] of Object.entries(states)) {
  await scrollTo(Math.min(y, max))
  if (k === 'rate2') { await page.evaluate(() => document.querySelectorAll('.rw button')[1].click()); await page.waitForTimeout(800) }
  await page.screenshot({ path: `${out}-${k}.png` })
}
// the lightbox
await page.evaluate(() => document.querySelector('.tile').click()); await page.waitForTimeout(900)
await page.screenshot({ path: `${out}-lightbox.png` })
console.log('errors:', errors.length ? errors : 'none')
await browser.close()
