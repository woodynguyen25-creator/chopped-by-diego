// mid-scroll states of the cut and the caps + the event skew + reduce
import { execSync } from 'node:child_process'; import { createRequire } from 'node:module'; import path from 'node:path'; import os from 'node:os'
const require = createRequire(import.meta.url)
function loadChromium () { const roots = []; try { roots.push(execSync('npm root -g', { encoding: 'utf8' }).trim()) } catch {}; roots.push(path.join(os.homedir(), 'AppData', 'Roaming', 'npm', 'node_modules'))
  for (const r of roots) for (const pkg of ['playwright', '@playwright/test', 'playwright-core']) { try { return require(path.join(r, pkg)).chromium } catch {} } throw new Error('no playwright') }
const [url, out] = process.argv.slice(2); const browser = await loadChromium().launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 }); const errs = []; page.on('pageerror', e => errs.push(String(e)))
await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(3500)
const go = async (sel, off) => { await page.evaluate(([sel, off]) => { const s = document.getElementById('scroll'); const el = document.querySelector(sel); const y = el.getBoundingClientRect().top + s.scrollTop + off; const from = s.scrollTop; const steps = 24; let i = 0; return new Promise(r => { const t = setInterval(() => { i++; s.scrollTop = from + (y - from) * i / steps; if (i >= steps) { clearInterval(t); r() } }, 20) }) }, [sel, off]); await page.waitForTimeout(700) }
await go('#shutter', -560); await page.screenshot({ path: `${out}-cut-mid.png` })
const cut = await page.evaluate(() => { const t = document.querySelector('#shutter .sh.t'), e = document.querySelector('#shutter .edge'); return { t: getComputedStyle(t).transform, edge: getComputedStyle(e).transform, op: getComputedStyle(e).opacity } })
await go('#cap1', -700); await page.screenshot({ path: `${out}-cap1-mid.png` })
const cap = await page.evaluate(() => ({ clip: document.getElementById('cap1').style.clipPath, edge: document.querySelector('#cap1 .edge').style.transform }))
await go('.pr.full', -200); const sk = await page.evaluate(() => getComputedStyle(document.querySelector('.pr.full .fr')).transform)
await page.waitForTimeout(400); const sk2 = await page.evaluate(() => getComputedStyle(document.querySelector('.pr.full .fr')).transform)
console.log(JSON.stringify({ cut, cap, skewDuring: sk, skewAfter: sk2 })); console.log('errors:', errs.length ? errs : 'none'); await browser.close()
