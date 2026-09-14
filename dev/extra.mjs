// loader frame + open menu + sheet, at 390x844
import { execSync } from 'node:child_process'; import { createRequire } from 'node:module'; import path from 'node:path'; import os from 'node:os'
const require = createRequire(import.meta.url)
function loadChromium () { const roots = []; try { roots.push(execSync('npm root -g', { encoding: 'utf8' }).trim()) } catch {}; roots.push(path.join(os.homedir(), 'AppData', 'Roaming', 'npm', 'node_modules'))
  for (const r of roots) for (const pkg of ['playwright', '@playwright/test', 'playwright-core']) { try { return require(path.join(r, pkg)).chromium } catch {} } throw new Error('no playwright') }
const [url, out] = process.argv.slice(2)
const browser = await loadChromium().launch(); const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
const errs = []; page.on('pageerror', e => errs.push(String(e)))
await page.goto(url); await page.waitForTimeout(260); await page.screenshot({ path: `${out}-pre.png` })
await page.waitForTimeout(600); await page.screenshot({ path: `${out}-handoff.png` })
await page.waitForTimeout(3000)
await page.click('#menubtn'); await page.waitForTimeout(900); await page.screenshot({ path: `${out}-menu.png` })
await page.keyboard.press('Escape'); await page.waitForTimeout(700)
const st = await page.evaluate(() => ({ open: document.getElementById('mastwrap').classList.contains('open'), wm: getComputedStyle(document.getElementById('wm')).visibility, pre: !!document.getElementById('pre') }))
console.log(JSON.stringify(st), 'errors:', errs.length ? errs : 'none'); await browser.close()
