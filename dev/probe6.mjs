import { execSync } from 'node:child_process'; import { createRequire } from 'node:module'; import path from 'node:path'; import os from 'node:os'
const require = createRequire(import.meta.url)
function loadChromium () { const roots = []; try { roots.push(execSync('npm root -g', { encoding: 'utf8' }).trim()) } catch {}; roots.push(path.join(os.homedir(), 'AppData', 'Roaming', 'npm', 'node_modules'))
  for (const r of roots) for (const pkg of ['playwright', '@playwright/test', 'playwright-core']) { try { return require(path.join(r, pkg)).chromium } catch {} } throw new Error('no playwright') }
const url = process.argv[2]; const browser = await loadChromium().launch(); const errs = []
{ const page = await browser.newPage({ viewport: { width: 390, height: 844 } }); page.on('pageerror', e => errs.push(String(e)))
  await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(3500)
  const r = await page.evaluate(() => new Promise(res => { const s = document.getElementById('scroll'); const el = document.querySelector('.pr.full'); const y = el.getBoundingClientRect().top + s.scrollTop - 300; s.scrollTop = y; const fr = document.querySelector('.pr.full .fr'); const seen = []
    let i = 0; const t = setInterval(() => { i++; s.scrollTop = y + i * 40; seen.push(getComputedStyle(fr).transform); if (i >= 12) { clearInterval(t); setTimeout(() => res({ during: seen.slice(4, 8), after: getComputedStyle(fr).transform }), 600) } }, 16) }))
  console.log('skew', JSON.stringify(r)); await page.close() }
{ const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' }); const page = await ctx.newPage(); page.on('pageerror', e => errs.push('reduce: ' + e))
  await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(800)
  console.log('reduce', JSON.stringify(await page.evaluate(() => ({ pre: !!document.getElementById('pre'), cap: getComputedStyle(document.getElementById('cap1')).clipPath, sh: getComputedStyle(document.querySelector('#shutter .sh')).display, edge: getComputedStyle(document.querySelector('#shutter .edge')).display, h2: getComputedStyle(document.querySelector('#toolsh')).opacity })))); await ctx.close() }
console.log('errors:', errs.length ? errs : 'none'); await browser.close()
