# Chopped by Diego — design direction

Locked 2026-09-10. Nothing gets built until §4 has a letter in it.

---

## 0. The client interview (answered on Diego's behalf from evidence — mark corrections)

**1. Scroll journey.** Proof first, then craft, then price, then book. He has 4.9 across 54 reviews
and 65,374 reel views; the one thing he does *not* have to earn is credibility on the cut itself.

**2. The belief.** *"This kid is going to be one of the best barbers in Houston, and I want to be
able to say I went to him before he was."* Not "cheap fades near me." Every section either builds
that or gets cut.

> **Woody, 2026-09-11 (grill Q1 — LOCKED):** first screen sells **mastery**, not trajectory.
> *"A haircutting prodigy. Someone whose passion lies beyond just finishing a haircut — someone who
> really feels like they want to make you look better, become better."* The claim is
> **transformation**, not craft-for-its-own-sake. Youth is a discovery further down, never the lead.
> Site doubles as a studio showcase (council · motion · 21st.dev) — **conversion first, spectacle in
> service of it**; myrendezvous.ca proves both can hold.

> **Woody, 2026-09-11 (grill Q2 — OVERRIDE):** ❌ **No before→after scrub.** *"Looks AI slop and
> overused."* ✅ Wants: **animation throughout**, scroll-driven, interactive — barber objects
> (clippers/scissors) moving with scroll, **3D graphics**, "things that scream barber." Hero = the
> prodigy; **next section = "mastery of hair."** More detail, more motion, less gimmick. Reference
> pools: **Awwwards + Dribbble** (his standing rule, see memory
> `feedback_reference_hunting_dribbble_awwwards`). Studio note: corpus law #4 = ONE signature 3D
> object, not a 3D site — proposed object = his gold BLACK ICE clipper via the proven AJR pipeline
> (Higgsfield image→3D → GLB → R3F).

**3. Assets.** 22 full-res images in hand (`ASSETS.md`). One outstanding: 2160×2880 gold clipper.
Missing: video, a real portrait, ambient motion. **Real always beats generated — nothing on this
site is AI-generated imagery.**

**4. Signature move.** See §3.

**5. Pacing.** Loud → quiet → loud → dead calm.
`preloader: hushed · hero: loud · the work: quiet, dense · designs: loud · rate card: dead calm ·
book: silent`

---

## 1. Register — LOCKED

**`editorial-luxury`, executed as American sports editorial — not luxury goods.**
Stated explicitly so "luxury" never drags this toward gold foil and script fonts. The reference
frame is a magazine profile of a young professional, not a boutique.

**Brief, in Woody's words (2026-09-10):** *"American and professional... some Hispanic inspiration
but don't lean on it... pure quality haircuts from someone who absolutely loves their job and wants
this as their future."*

### The two references — different domains, both non-web

**A — Structure: the American sports-magazine athlete profile.**
(SI / ESPN The Magazine feature spreads.) Oversized name lockup. Black-and-white portraiture. A
stat block treated as typography. The come-up narrative — a young person whose craft is covered
seriously. This is exactly Diego's story and it is the opposite of a barbershop template.

**B — Object language: precision tool catalogue.**
(Machinist and knife-maker literature.) Object-on-seamless photography, spec tables, matter-of-fact
type, no adjectives. Maps directly onto the gold clipper and onto a price list that carries
durations. Says *professional instrument*, never *hair salon*.

**Category bar (not a reference to remix): [myrendezvous.ca](https://myrendezvous.ca)** — Toronto
barbershop, Awwwards HM 7/2024, 7.5. Webflow + GSAP ScrollTrigger + Lenis + Swiper. Editorial
magazine feel, real booking engine, named testimonials. Proof that art direction wins this category,
not framework.

### Hispanic inspiration — present, not load-bearing
No visual clichés. It enters two ways only: a **bilingual storefront** (prices, hours, location,
book — the strings a customer needs, in both languages) and nothing else. His clientele is
bilingual; the design is not "themed."

> **Woody, 2026-09-11 (grill Q4 — LOCKED): DARK site.** "Let's do a darker site, your rec."
> **The dark recipe (Claude's rec, adopted):** ink ground `#0B0B0C` with warmth — never `#000`
> (P1 tell) · **bone is the ink on the page** — type set in bone, not white · gold = the single
> accent, ≤2 uses per screen · **inverted islands**: the price list and quote cards (already
> bone graphics) become paper slabs on ink — the contained/full-bleed alternation, inverted ·
> pro shots (02, 05, 07) sit natively; **phone snaps get one consistent dark grade** (contrast up,
> partial desaturation) so the staircase stops shouting — grade, not reshoot · one light
> direction across photos and gradient falloffs · grain + vignette · reveals by **mask and
> hairline draw-on**, never fade-from-black (invisible on ink).
> Constraint accepted: no Higgsfield, no reshoot before the 11:30 demo — assets are the 22 in hand.

> **Woody, 2026-09-11 (grill Q5 — LOCKED): frame one = him WORKING, Study A's "DIEGO SANDOVAL"
> lockup.** Photo: **02** (shop, ring light, client in chair) — Claude's pick between his two
> (02 / 07); 07 becomes the second dark island further down. Carry Astra's fix into the build:
> the stat rail and eyebrow in A were "microscopic credibility furniture" — enlarge them to
> readable size; the name stays enormous. Finished cut = beat two, first thing that moves on scroll.

## 2. Tokens

**Palette — read off his own photographs, nothing invented:**

| Token | Value | Source |
|---|---|---|
| `--ink` | near-black | his shirt, the nitrile gloves, the cape ground |
| `--paper` | bone / warm off-white | his own quote card AND price-list grounds |
| `--brass` | gold | the BLACK ICE clippers — **the single accent, used sparingly** |
| `--slat` | white | the staircase balusters |

**Dropped: money-green.** It is the cheapest-reading element in the pool and it fights everything.
The cape stays in personality content on Instagram; it does not drive the site palette.

> **Woody, 2026-09-11 (grill Q6 — LOCKED): sub-line = "Being a barber isn't just cutting hair."**
> (his quote, "To me" dropped). Tagline *"If it ain't choppedbydiego then it ain't right"* closes
> the page above the booking panel; *"I get paid to make people look good"* opens the gallery.
> **All copy in his voice — no agency lines.** And: *"make sure we're using unique text and font."*

> **Woody, 2026-09-11 (Q7 feedback): "use unique buttons and font, draw it from 21st dev — this looks
> like previous sites we've created."** Confirmed by the divergence sheet (`divergence-sheet.png`):
> specimen v1 clusters with AJR + Sleek on silhouette/mass. **Root cause = weight.** Every prior build
> is 900-weight condensed caps + italic serif + tracked eyebrow + filled slab CTA.
>
> **PROPOSED v2 register — "darkroom editorial"** (`.directions/type-specimen-v2.html`), sourced from
> three refero DESIGN.md systems (Oryzo · Hyperstudio · Origin Financial) + 21st mechanics:
> - **Type family class flips:** Bricolage Grotesque **variable** (opsz/wdth/wght) at weight **300–500**,
>   negative tracking, oversized — the name whispers. Newsreader 300 italic for his line. **Azeret Mono**
>   for every label, duration, price, caption (Origin's "third voice").
> - **Color structure flips:** warm walnut canvas `#100B08` (flatters skin in his photos; cool ink goes
>   green), cream `#EFE6D8` as the ink, hairline `#3A2E24`, **signal `#D28E3A` as punctuation only —
>   never on a button** (Oryzo rule).
> - **Mass flips:** single column, generous void, photo as a lone object in a hairline frame with a
>   mono caption (Oryzo "void mode"); rate rows carved by hairlines (Hyperstudio).
> - **Buttons:** outlined cream pill + **corner brackets that draw on** (21st "Motion Button" /
>   "Dot Border Button" mechanics, rebuilt on our clock) + ghost pill secondary. No filled slab.
> - **Motion signature:** variable-font weight/width breathing on the name (21st "Variable Font Hover
>   Hero" mechanic) + hairlines drawing on + mask reveals. Distributed, subtle, per Q3.
> Divergence vs house style on 4 of 5 axes (type class · color structure · mass · motion).
> **✅ Woody, 2026-09-11: "much better" — v2 darkroom register LOCKED (Q7).** The block below is
> superseded. Standing orders added the same turn: (1) the divergence sheet runs before ANY render is
> shown; (2) **every site component is sourced from 21st.dev first** (search → pick mechanism →
> rebuild on our clock/tokens), never hand-rolled from habit.

**Type (Q7, first proposal — SUPERSEDED if v2 is adopted; replaces the study pairing, which Astra flagged as the shared costume
and which MotionSites' own data shows Instrument-Serif-italic at a 24% hit rate = the copied
move):**
- **Display / name lockup / section titles: Big Shoulders Display** — Chicago signage, American,
  condensed, heavy weights; unmistakably not Anton/Bebas/Oswald.
- **The one italic line (his quote): Fraunces** italic — optical sizes + SOFT/WONK axes make it
  read hand-set; precedent = Best Barber Alive, the closest existing build to this spec.
- **Body / rate card / UI: Archivo** — grotesque with American-newspaper roots; pairs with Big
  Shoulders; holds at 16 px on a phone.
- All Google Fonts, one `<link>`, `font-display: swap`, subset to Latin. Max two families on any
  one screen. Radius hierarchy: committed sharp — editorial, no rounded cards.

**Dials:** `DESIGN_VARIANCE 7` · `MOTION_INTENSITY 5` · `VISUAL_DENSITY 6`

## 3. The signature moment — the line-work preloader

On first load, an SVG traces **one of Diego's actual freehand designs**, stroke by stroke, as if
being carved into a fade. Gated on `fonts.ready` + hero decode. One clock.

Why this and not something else:
- It is **the client's actual craft** — freehand line work is his differentiator and the thing he
  currently gives away for $0 (see teardown §2).
- It matches a **confirmed taste verdict**: juliencalot's draw-on loader, logged as *"absolutely
  love the loading screen, how it animates the words writing."* Flagged in the corpus as a signature
  pattern to replicate.
- **No barber site has one.** The category ships stock hero video and a booking button.

Second-order signature: **the rate card.** Every barber site buries pricing behind a "Services"
link. His is set as an editorial rate card with durations — tool-catalogue language, dead calm,
directly above the Booksy panel.

## 4. Direction chosen: **v2 darkroom register, Study-A hero skeleton** (Q4–Q7, 2026-09-11)

### Scroll order — Q8 LOCKED (Woody, 2026-09-11: "the order looks good how you presented it")

| # | Beat | Content | Pace | Mechanism / precedent |
|---|---|---|---|---|
| 0 | Preloader | his freehand line draws itself; gates on fonts + hero decode | hushed | DrawSVG, juliencalot pattern |
| 1 | The name | DIEGO SANDOVAL · photo 02 in hairline frame · "Being a barber isn't just cutting hair." · mast 4.9 · 54 | loud | Study A skeleton; 21st Variable Font Hover Hero (18647) axis motion; Text Reveal Mask (19257) |
| 2 | The work | eyebrow "I get paid to make people look good" → horizontal editorial track: 10 · 06 · 04 · 08 · 03 (event = credibility beat) | quiet, dense | 21st Horizontal Feature Reveal (26062); Best Barber Alive lookbook |
| 3 | The chair | photo 07 as second dark island · three named Booksy quotes ("The LeBron of cutting hair" · "Best cuts in the Nawfwest" · "made me look younger") | loud | 21st Editorial Testimonial (9637); Rendezvous named testimonials |
| 4 | The rate card | hairline rows · durations · mono numerals · hours · Spanish line small | dead calm | Study B rows; Hyperstudio hairlines |
| 5 | Book | "If it ain't choppedbydiego then it ain't right" → Booksy inline widget (id 1668896), nothing else | silent | corpus: ONE conversion verb wired to the engine |

Work before price — the belief is mastery; meeting "$35" before the ornamental nape makes him a $35 barber.

### Beat 2, the gallery — Q9 (Woody: "try your version… but I like the knockout idea… make it unique… alive, moving")

**"The darkroom."** Each print *develops* as it enters — the literal version of the register.
Study: `.directions/gallery-study.html` · capture `gallery-study-3states.png` · divergence
`divergence-gallery.png` → **not in the house cluster** (flat field + one plate vs lone figure / giant
word / dense grid).

- **Assets:** 4:5 crops of 10 · 06 · 04 · 08 · 03, one grade (brightness .86 · contrast 1.18 ·
  saturation .72 · 8% blend to walnut) → slats go bone-grey. Each has an undeveloped **plate**
  (brightness .18, contrast .6) as the start state. `gallery/`.
- **Void without a knockout:** radial walnut vignette swallows the frame corners; a faint 46-px
  vertical hairline rhythm abstracts the staircase. No hair masking.
- **Mechanics (21st):** **CSS Image Stacking 18979** — each print `position: sticky`, offset +12px
  per print, prints pile like a stack of developed prints; free scroll, **no pin**. **Reveal Image
  Mask 10905** — `clip-path: inset(14% 8%)` → `inset(0)` scrubbed on enter (their Framer spring →
  our GSAP ScrollTrigger `scrub: 0.6`). The **develop** = plate→print opacity on the same scrub;
  caption rises last. Rail numeral rolls per print; hairline progress bar (Blind Barber 10-Year).
- ONE clock: Lenis → `ScrollTrigger.update`, GSAP ticker drives `lenis.raf`. `expo.out` only.
  Reduced motion: prints shown developed, no scrub.
- **Known fixes before build:** the right-hand rail overlaps the frame at 390 px — move it into the
  22-px margin or drop it on phone; caption durations clip ("60 MIN") — widen the caption grid;
  print 08's top-right slat is still bright — crop tighter.

Three structurally distinct skeletons, all inside the locked register. Rendered side by side at
`.directions/` — pick by looking, not by reading.

| | Name | Skeleton | The bet |
|---|---|---|---|
| **A** | **The Profile** | Full-bleed B/W action hero, oversized name lockup, stat block (`4.9 · 54 reviews · NW Houston`) as type. Scroll reads as a magazine feature. | Sells the *person*. Strongest on "wants this as his future." |
| **B** | **The Rate Card** | Type-first. **No hero image above the fold at all** — the rate card is the first screen, editorial, on bone. The clipper enters as the first scroll payoff. | Bravest, most differentiated, highest risk. Answers the customer's real question in frame one. |
| **C** | **The Bench** | Object-first. Gold clipper full-bleed at 2160×2880, tools laid out, spec-table language throughout. The work gallery is the argument. | Sells the *craft*. Least dependent on assets we don't have yet. |

> **Woody, 2026-09-11 (grill Q3 — OVERRIDE, supersedes the table below):** ❌ *"I don't want one
> singular object like the beautiful 3D barber chair."* ✅ **Smooth, subtle animations all
> throughout the site.** Reference: YouTube `xqCdvm-YoIM` (creator's animation style + his
> reference sites, incl. "Savee" — add to the Awwwards/Dribbble pool; his "Sloth Monster" and
> other skills to be pulled, compared to ours, merged). The clipper mechanics below survive only
> as *section-level* motion ideas, never as a hero object.

### 4c. Distributed motion — the system after the Q3 override (2026-09-11)

- **Reference pool for motion = 60fps.design** (2,060 shots; filters scroll · reveal · fade ·
  parallax), browsed in Chrome. Jack Roberts' own "animations" are Higgsfield image→video loops +
  baseline scroll reveals — see `jack-roberts/BREAKDOWN-2026-09-11.md`.
- **No hero object.** Motion lives in: line-mask text reveals (corpus law 8) · object-stays/
  content-passes for photos · scroll-scrubbed section counter · one site-wide ease (`expo.out`) ·
  grain + vignette · a contextual cursor label ("BOOK") · **2–3 ambient video loops** on real photos
  (Higgsfield start→end frame; texture, never the mechanism) · the freehand-line SVG preloader.
- ONE clock (Lenis + GSAP). Nothing pinned. `prefers-reduced-motion` ships stills.
- **Ship-gate critique step = a `/design-loop` run on the hero fold only**, after §4 has a letter.

## 4b. Motion system — decided 2026-09-11 (Claude calls, Woody overrides) — ⚠ superseded by 4c; clipper mechanics survive only as section ideas

**Evidence base:** `REFERENCE-SWEEP-2026-09-11.md`. No Awwwards barber winner 2011–2026 uses a 3D
object — the clipper is an open lane, not a validated one. Category winners (CRISP HM 8/2026,
Rendezvous HM 7/2024, Blind Barber SOTD) are all photo + type + GSAP.

| Decision | Call | Precedent |
|---|---|---|
| Object count | **ONE** — the gold BLACK ICE clipper. Scissors/combs = 2D SVG line drawings that draw on scroll. | corpus law 4 |
| Render path | **Canvas frame-scrub** of a rendered turntable (180–240 WebP frames), Lenis + GSAP, no Three.js at runtime. Live R3F GLB = fallback only if hover-interaction proves essential. | More Nutrition SOTD 11/2025 (they abandoned `<img>` swap for Canvas); Dopo HM 7/2025 |
| Source of frames | Blender turntable from an image→3D GLB of the 2160×2880 photo — **or** photograph the real clipper on a turntable (zero 3D, same mechanism). | Vionaro V8 (C4D render → scrub) |
| Scroll law | Sticky container + free scroll scrub. **Never pinned/hijacked.** | corpus law 1 |
| Mechanic 1 — hero, "The bench" | Clipper flat on a lit surface; scroll turns it top-down → three-quarter, gold catches light; headline letters unmask on the same progress. | More Nutrition |
| Mechanic 2 — rate card, "Blade-guard ladder" | Same clipper, fixed; each scroll step swaps the guard (#1, #2, #3…) and the matching price row lights. Services as guard lengths. | Oakley Encoder colour-swap · The Atelier flat-lay |
| Mechanic 3 — "Mastery of hair", "Line-work pass" | Clipper travels a path across the viewport; behind it a freehand-design photo reveals via clip-path in the blade's wake. **The blade draws the portfolio.** Replaces the before/after scrub Woody vetoed. | Vionaro rail-follow · Atelier reveal masks |
| Alive vocabulary (use) | object-stays/content-passes · line-mask text reveals · cursor with contextual label ("BOOK") · scroll-scrubbed section counter · grain + vignette · ONE ease site-wide (`expo.out`) | sweep §4 |
| Tired vocabulary (banned) | before/after slider · parallax blobs · glassmorphism · generic fade-up · barber-pole spinner · auto-rotating testimonials · stat count-ups · magnetic buttons | sweep §4 |

Non-Awwwards builds closest to this spec: **Best Barber Alive** (Stockholm one-chair, lookbook
register, vanilla JS, Fraunces) · **The Atelier** (pinned tools flat-lay re-zooming per service row).

### Q10–Q14 rulings (Woody, 2026-09-11 evening)
- **Q10 preloader — LOCKED:** the ornamental nape design (10) traced as one continuous line, **simple** —
  one stroke, one colour (cream), gates on fonts + hero decode, then the line becomes print 01's
  caption rule. No progress %, no logo reveal.
- **Q11 the chair:** research + ideate from 21st components (see below). Not hand-rolled.
- **Q12 rate card:** must be **unique — not like our other sites**; unique buttons + animations
  from 21st. The Study-B hairline rows are the floor, not the answer.
- **Q14 Spanish — LOCKED:** a **toggle** EN / ES, top-left or top-right in the mast (mono). Strings
  for prices, hours, location, book, captions; his quotes stay in the language he wrote them.

### Beats 3 + 4 + the toggle — studied 2026-09-11 (`.directions/chair-rate-study.html`, capture `chair-rate-3states.png`, divergence `divergence-chair-rate.png` → not in the house cluster)

- **Q11 the chair:** photo 07 full-bleed island → three Booksy quotes in Newsreader italic, **the one
  in the eye band (35–65% of viewport) sharp, the others blurred + dimmed** — 21st **Animated
  Testimonials 26548** mechanic, hover replaced by scroll band. Names + "confirmed client" in mono.
  The one long review (German's) set in Bricolage 300 and **lit word by word as you scroll** — 21st
  **Reading Text Reveal 9386** mechanic on a ScrollTrigger scrub.
- **Q12 the rate card = the blade-guard ladder:** rows keyed by a mono **guard numeral** (#0 · #1 ·
  #2 · #3 · 8< · →), service + duration, mono price. Rows **light in sequence** as the ladder enters;
  guard numeral and price **roll up** (NumberFlow-style digit roll, rebuilt with GSAP); a signal
  hairline draws under the guard. No card, no table, no SaaS tier layout — none of 21st's pricing
  components fit (all SaaS cards; rejected). Prices shown = **his current** Booksy prices; the raised
  set is his call, not a surprise.
- **Q14 EN/ES toggle:** in the sticky mast, right side — 21st **Segmented Control 23552** mechanic:
  sliding thumb with a **masked inverse-colour label** that travels the opposite way. Swaps every
  `[data-en]/[data-es]` node; his quotes stay in the language he wrote them. `?lang=es` deep-link.
- **Fix before build:** the "→" and "8<" guard glyphs need a face that carries them (or use H / K);
  rows above the fold must be lit on load (currently light on enter only).

## 5. Non-negotiables carried from the corpus

- Free scroll always — Lenis scrub, **never pin or hijack**.
- ONE CLOCK. All reveals from one time source.
- ONE conversion verb, repeated, wired to the real Booksy engine (business ID `1668896`,
  `mode=inline`). No CTA soup.
- Real photographs only. No stock, no gradient blobs, no AI imagery.
- Honest pricing, visible, **with durations**.
- Alternating full-bleed blocks — never a uniform card grid.
- `prefers-reduced-motion` shipped. Mobile gets a cheaper twin in-source.
- Banned outright: barber pole, crossed clippers, mustache mark, subway tile, vintage-shop pastiche.

## 6. Definition of done (ship gate — fails closed)

- [x] Register declared
- [x] Two references, different domains, non-web
- [x] Three dials set
- [ ] `directions.png` exists — three studies genuinely explored
- [ ] A letter recorded in §4
- [ ] Detector P0 = 0 on the freshest build
- [ ] `contact-sheet.png` divergence check vs. AJR Blends and the last five builds
- [ ] External critique run
