// dev/probe.mjs — scroll an element to a viewport fraction and dump computed transforms of selectors
// usage: node dev/probe.mjs <url> <trigger-selector> <fraction 0-1> <selector1,selector2,...>
import { execSync } from 'node:child_process'
import { createRequire } from 'node:module'
import path from 'node:path'
import os from 'node:os'
const require = createRequire(import.meta.url)
function loadChromium () { const roots = []; try { roots.push(execSync('npm root -g', { encoding: 'utf8' }).trim()) } catch {}; roots.push(path.join(os.homedir(), 'AppData', 'Roaming', 'npm', 'node_modules'))
  for (const r of roots) for (const pkg of ['playwright', '@playwright/test', 'playwright-core']) { try { return require(path.join(r, pkg)).chromium } catch {} } throw new Error('no playwright') }
const [url, trig, frac, sels] = process.argv.slice(2)
const browser = await loadChromium().launch(); const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
page.on('pageerror', e => console.log('PAGEERROR', String(e)))
await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(4200)
const out = await page.evaluate(async ([trig, frac, sels]) => {
  const s = document.getElementById('scroll'); const el = document.querySelector(trig)
  const target = el.getBoundingClientRect().top + s.scrollTop - s.clientHeight * +frac
  const from = s.scrollTop; for (let i = 1; i <= 30; i++) { s.scrollTop = from + (target - from) * i / 30; await new Promise(r => setTimeout(r, 24)) }
  ScrollTrigger.update(); await new Promise(r => setTimeout(r, 900))
  return sels.split(',').map(q => Array.from(document.querySelectorAll(q)).map(n => { const r = n.getBoundingClientRect(); const cs = getComputedStyle(n); return { q, top: Math.round(r.top), h: Math.round(r.height), w: Math.round(r.width), transform: cs.transform, opacity: cs.opacity, z: cs.zIndex, bg: cs.backgroundColor, display: cs.display } })).flat()
}, [trig, frac, sels])
console.log(JSON.stringify(out.map(o=>[o.q,o.top,o.h,o.transform]))); await page.screenshot({ path: 'dev/captures/probe.png' }); await browser.close()
