# loanpay-guides DESIGN.md — codifies network contract before code

Source: `.omo/upgrade-20261115/DESIGN.md` (X04, sole writer) + `CONTRACT.md` + `AUDIT-SYNTHESIS.md`.
Scope: `guides.loanpaylogic.com` only. This file is the design authority for guides; product edits wait for harness approval.

## Tokens

- Surface: dark navy `#07111F` page bg, panel `#0B1627`, deep `#050A12` footer base. Ivory scoped pieces only: hero figure frame `#F7F4EE` bg is NOT a page inversion — page stays dark.
- Ink/text: ivory `#F7F4EE` primary; muted `#94A3B8`-class secondary (body-muted verified ≥4.5:1 on `#07111F` only at ≥14px/400 — retest any smaller use); caption `#A8B3C4`.
- Accent (links/focus/active ONLY, ≤10% pixels): neutral sand `#D9C9A8` for links/eyebrow rules/active underline; focus ring sand `#D9C9A8`. NOT full-button fills. CTA button is ivory bg + navy ink (text-safe), sand reserved for hairlines/states.
- Line: `rgba(247,244,238,.14)` hairlines; card border `rgba(247,244,238,.12)`.
- Error: ruby `#F08C7E` text-safe on dark (error text on `#07111F`, never small red `#B42318` on dark — that token is light-surface only; dark error uses lightened ruby for 4.5:1).
- Disabled: `opacity .55 + cursor not-allowed`, never color-only.
- Contrast pairs verified (intent, retest in harness): ivory on navy ≥12:1; muted `#94A3B8` on navy — large/body only, retest; sand `#D9C9A8` on navy ≥7:1 for links/focus; navy `#07111F` on ivory ≥14:1 (scoped inserts); ruby-light `#F08C7E` on navy ≥4.5:1 for error text.

## Type (zero new deps)

- Display: `Georgia, "Times New Roman", "Source Serif 4", serif`; tracking `-0.01em` display only; 600–700; never faux-bold body.
- Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`; 1.6–1.75; tool labels 1.4.
- Numerals: `font-variant-numeric: tabular-nums`; result scale 28/22/16 primary/secondary/meta; never gradient-filled amounts. Labels 12–13px uppercase `0.08em` eyebrows only.
- Mono: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` 12px/1.6 for code/technical labels only.

## Spacing / radius / depth / motion

- Scale 4/8/12/16/24/32/48/64/96; section 64 desktop / 40 mobile; ToolIsland padding 24/16.
- Radius 4 inputs, 8–12 cards, 16–20 hero media only. No pill cards.
- Depth: single `0 10px 28px -18px rgba(0,0,0,.25)`. No multi-glow; no full-page `backdrop-blur` on scrolling content (existing `.glass-panel/.glass-card` blur 26–34px + aurora gradients are NOT carried into product — harness uses restrained flat navy + hairline).
- Motion: `color/background/border-color 150ms, transform 200ms`; transform/opacity only; `prefers-reduced-motion: reduce` disables all; focus `2px solid #D9C9A8 + 2px offset`, never removed.

## Primitives map (local classes → 8 network primitives + states)

1. `SiteHeader` → `.g-header` + `.g-nav` + `button.g-menu-btn[aria-expanded]` + `.g-nav-panel` (in-flow, pushes content). States: default/hover underline offset 3px/focus-visible ring/expanded.
2. `SiteFooter` → `.g-footer` + `.g-interlink` row + consent/ad-choice links + disclaimer. No sticky.
3. `HomeHero` → `.g-hero` (eyebrow + serif display + lede + 1 primary CTA ivory button + 1 secondary sand link). No inputs inside. Longest-title stress wraps ≤3 lines at 375px, no overflow. Hero figure finite (desktop ≤420, tablet ≤300, mobile ≤220, `object-fit cover`).
4. `ToolIsland` → `.g-tool` (labeled inputs + Calculate + `.g-ledger` ResultLedger). States: default/hover darken 8%/focus-visible/error (`aria-describedby`, value preserved)/disabled (`opacity .55`)/calculating (`aria-busy` + inline skeleton in result only)/reduced-motion instant swap. Results tabular + unit + assumption + methodology link.
5. `LedgerTable` → `.g-table-wrap` (horizontal scroll mobile, sticky first col) + `.g-table`. Header ivory-on-dark ≥3:1; row hover wash only.
6. `Figure` → `.g-figure` (photo + caption + credit). Explicit sizing when verified (`width/height + aspect-ratio + sizes + AVIF/WebP local` under `public/photos/` + `RECORD.md`). Decorative `alt=""`, informative meaningful alt. UNVERIFIED NOW → harness shows measured empty frame + record line, no image bytes, no fake photo.
7. `GuideCard` → `.g-card` (serif title 2-line clamp + 1-line desc + badge + SVG arrow). Hover `translateY(-2px)` + shadow deepen only (reduced-motion: none). No emoji.
8. `Disclosure/Consent` → `.g-consent` (methodology + ad-choice + consent-state line, visible dialog semantics). Never in hero; never auto-dismissed; in-flow.

## Hero

- Chosen photo: NONE YET (unverified). Topic-true candidate direction only: library shelf detail (no staged fake, no staff/client/endorsement implication). Record row required before insertion: page URL, creator, license, date verified, alt, widths → `public/photos/RECORD.md` + AVIF/WebP 3 widths under `public/photos/`.
- Harness hero: text block + measured empty `.g-figure` frame stating "photography pending verification — no placeholder image", finite heights per §Responsive.
- Max-heights: 420 desktop / 300 tablet / 220 mobile. No text-over-unchecked-photo without scrim-tested 4.5:1 (no scrim needed until verified photo lands).

## Responsive (375/768/1280) + stress strings

- Container `max-w-5xl` tool/guide; hero media `max-w-6xl`; gutters 24/16.
- 1280: hero split text 55 / figure 45; tool routes compact headings, inputs/results first; LedgerTable full width; guide grid 3-col.
- 768: hero stacks (text over media); guide grid 2-col; condensed inline nav if ≤6 links else hamburger; ToolIsland full width.
- 375: single col; GuideCard 1-col; LedgerTable scroll + sticky first col; hamburger + in-flow panel; no fixed bottom bar; no doc overflow.
- Longest-title stress: "How Extra Principal Payments, Recast Options, and Rate–Term Timing Change a 30-Year Mortgage Payoff Schedule" (hero display + card title clamp check at 375px).
- Longest-numeric stress: `$1,998,765.43` primary + `$12,345.67/mo` secondary + `2,847 payments · 30.00 yrs` meta inside ResultLedger at 375px, no overflow, tabular numerals.
- Ads: existing `AdSlot` positions preserved; never between ToolIsland inputs and results (harness marks slots as inert labels, no ad code).

## Harness

- Path: `.omo/upgrade-20261115/showcases/guides/index.html` (self-contained HTML/CSS/JS, zero deps, no build).
- Covers all 8 primitives in all states (default/hover/focus/error/disabled/calculating/reduced-motion) + in-flow nav demo + working demo input/result (separate demo formula, product formulas untouched) + LedgerTable + guide cards + Figure empty frame + consent specimen.
- Screenshots (3 widths + longest-title stress): PENDING — browser coordinator approval required. This file claims no visual acceptance, no Lighthouse numbers, no SEO/revenue promises.
- Status: NOT YET BROWSER APPROVED.

## Boundaries (binding)

- Formulas untouched; canonical/`metadataBase` inheritance is NOT a bug — no churn; legal pages stay indexable, no blanket noindex/sitemap-date refresh/mtime stamping; no priority/changefreq selling.
- No fake reviewers/dates/staff portraits/verified stamps; no generated images as photography; no hotlinking as final; no photo wallpaper; no sticky-bottom tool sheet; no consent weakening (preserve genuine choice, visible dialog semantics).
- No new runtime/font deps. No `.omo/plans` writes. No commits/push/deploy/AdSense review/account changes/purchases. Preserve `next-env.d.ts` + all uncommitted work. User-retained previews untouched.
- This writer owns ONLY `loanpay-guides/DESIGN.md` + `.omo/upgrade-20261115/showcases/guides/index.html`. No production/tests/formula/next-env/git/deploy writes.
