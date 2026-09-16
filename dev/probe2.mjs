// reduced-motion boot + lightbox drag-to-dismiss + inert states
import { execSync } from 'node:child_process'; import { createRequire } from 'node:module'; import path from 'node:path'; import os from 'node:os'
const require = createRequire(import.meta.url)
function loadChromium () { const roots = []; try { roots.push(execSync('npm root -g', { encoding: 'utf8' }).trim()) } catch {}; roots.push(path.join(os.homedir(), 'AppData', 'Roaming', 'npm', 'node_modules'))
  for (const r of roots) for (const pkg of ['playwright', '@playwright/test', 'playwright-core']) { try { return require(path.join(r, pkg)).chromium } catch {} } throw new Error('no playwright') }
const url = process.argv[2]; const browser = await loadChromium().launch()
const errs = []
// 1 reduced motion
{ const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' }); const page = await ctx.newPage(); page.on('pageerror', e => errs.push('reduce: ' + e))
  await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(800)
  const r = await page.evaluate(() => ({ pre: !!document.getElementById('pre'), wm: getComputedStyle(document.getElementById('wm')).visibility, tools: [...document.querySelectorAll('.cross .tool')].map(t => t.getAttribute('transform')), rect: document.querySelector('.cross .cr').getAttribute('width') }))
  console.log('reduce:', JSON.stringify(r)); await ctx.close() }
// 2 lightbox: open, drag down 140px, expect closed; inert states
{ const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true }); const page = await ctx.newPage(); page.on('pageerror', e => errs.push('lb: ' + e))
  await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(3500)
  const before = await page.evaluate(() => ({ sheetInert: document.getElementById('sheet').inert, lbInert: document.getElementById('lb').inert, moreInert: document.getElementById('more1').inert }))
  await page.evaluate(() => { const s = document.getElementById('scroll'); const el = document.querySelectorAll('.pr')[1]; s.scrollTop = el.getBoundingClientRect().top + s.scrollTop - 100 })
  await page.waitForTimeout(600); await page.evaluate(() => document.querySelectorAll('.pr')[1].click()); await page.waitForTimeout(900)
  const open = await page.evaluate(() => ({ on: document.getElementById('lb').classList.contains('on'), focus: document.activeElement.className, inert: document.getElementById('lb').inert, overflow: document.getElementById('scroll').style.overflow }))
  const fig = await page.$('#lb figure'); const b = await fig.boundingBox(); const x = b.x + b.width / 2, y0 = b.y + b.height / 2
  await page.mouse.move(x, y0); await page.mouse.down(); for (let i = 1; i <= 8; i++) { await page.mouse.move(x, y0 + i * 18); await page.waitForTimeout(16) } await page.mouse.up(); await page.waitForTimeout(900)
  const after = await page.evaluate(() => ({ on: document.getElementById('lb').classList.contains('on'), inert: document.getElementById('lb').inert, overflow: document.getElementById('scroll').style.overflow, focus: document.activeElement.className }))
  await page.evaluate(() => document.querySelector('.rw button').click()); await page.waitForTimeout(700)
  const row = await page.evaluate(() => ({ open: document.querySelector('.rw').classList.contains('open'), moreInert: document.getElementById('more1').inert, controls: document.querySelector('.rw button').getAttribute('aria-controls') }))
  console.log('before:', JSON.stringify(before)); console.log('open:', JSON.stringify(open)); console.log('after drag:', JSON.stringify(after)); console.log('row:', JSON.stringify(row)); await ctx.close() }
console.log('errors:', errs.length ? errs : 'none'); await browser.close()
