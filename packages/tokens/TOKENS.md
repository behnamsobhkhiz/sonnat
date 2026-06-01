# SONNAT Tokens — Reference for Claude

Pick a token by **intent**, not by hex. Full values live in `tokens.css`.
The semantic layer is `--{category}-{group}-{strength}`:

- **category** — `surface` (fills) · `content` (text/icons) · `border` (strokes)
- **group** — `neutral` · `inverted` · `brand` · `informative` · `positive` · `warning` · `negative`
- **strength** — `weakest → weaker → weak → default → strong → stronger → strongest`

`on-color` variants are for content sitting on a colored fill.

---

## Most-used (start here)

| Intent | Token |
|---|---|
| Page background | `--surface-neutral-weaker` |
| Card / sheet / input background | `--surface-neutral-weak` |
| Chip / skeleton background | `--surface-neutral-default` |
| Primary text & headings | `--content-neutral-stronger` |
| Secondary text & default icons | `--content-neutral-default` |
| Placeholder / hint | `--content-neutral-weak` |
| Disabled text | `--content-neutral-weaker` |
| Divider / default border | `--border-neutral-weaker` |
| Input border | `--border-neutral-weak` |
| Focus ring | `--border-brand-strong` |
| Primary button fill | `--surface-brand-strong` |
| Primary button — hover | `--surface-brand-stronger` |
| Primary button — pressed | `--surface-brand-strongest` |
| Text on brand/colored fill | `--content-neutral-on-color` |
| Secondary (brand) text | `--content-brand-default` |
| Modal overlay | `--surface-dimmer-neutral-default` |

### Status colors

| State | Fill | Text / icon |
|---|---|---|
| Success | `--surface-positive-weak` | `--content-positive-default` |
| Warning | `--surface-warning-weak` | `--content-warning-default` |
| Error | `--surface-negative-weak` | `--content-negative-default` |
| Info | `--surface-informative-weak` | `--content-informative-default` |

---

## Spacing — base 4px, t-shirt scale

| Token | Value | Use |
|---|---|---|
| `--space-2xs` | 2px | Hairline gap |
| `--space-xs` | 4px | Icon + label |
| `--space-sm` | 8px | Chip padding |
| `--space-md` | 12px | Small section padding |
| `--space-lg` | 16px | **Default screen / card padding** |
| `--space-xl` | 24px | Section gap |
| `--space-2xl` | 32px | Large section |
| `--space-3xl` | 64px | Page-level |
| `--space-4xl` | 128px | Hero / empty state |

---

## Radius — per component

| Component | Token | Value |
|---|---|---|
| Button · chip · input · snackbar | `--radius-sm` | 8px |
| Card · post card · InfoBox | `--radius-md` | 12px |
| Tag · badge | `--radius-xs` | 4px |
| Bottom sheet (top corners) | `--radius-lg` | 16px |
| Large card / illustration tile | `--radius-xl` | 24px |
| Navigation item · pill | `--radius-round` | 128px |
| Avatar | `50%` | — |

Interactive elements use **squircle** corners where available; fall back to `border-radius`.

---

## Typography — IRANSans, RTL

| Role | Size token | Line-height token | px |
|---|---|---|---|
| Display | `--type-2xl-size` | `--type-2xl-lh` | 24 / 40 |
| Heading | `--type-xl-size` | `--type-xl-lh` | 20 / 32 |
| Title | `--type-lg-size` | `--type-lh-lg` | 18 / 30 |
| Body | `--type-md-size` | `--type-md-lh` | 16 / 26 |
| Subtitle | `--type-sm-size` | `--type-sm-lh` | 14 / 24 |
| Caption | `--type-xs-size` | `--type-xs-lh` | 12 / 20 |

Family `var(--font-family)` · weights `--font-weight-regular` (400) / `--font-weight-bold` (700).
Minimum UI size: 12px (caption).

> Note the line-height token for Title is `--type-lh-lg` (not `--type-lg-lh`) — it follows the Figma naming exactly.

---

## Border width

`--border-sm` 1px (default/divider) · `--border-md` 2px (emphasis) · `--border-lg` 3px (focus ring) · `--border-xl` 4px (rare).

---

## Breakpoints

Edges exposed as `--bp-{tier}-min` / `--bp-{tier}-max`. CSS custom properties can't be used inside `@media`, so use the **px values** directly in media queries and keep them aligned to these tiers:

| Tier | Range |
|---|---|
| mobile-sm | 320–359 |
| mobile-lg | 360–520 |
| tablet | 521–1024 |
| laptop-sm | 1025–1280 |
| laptop-lg | 1281–1440 |
| desktop | 1441–1920 |

Don't invent intermediate breakpoints (e.g. 900px). Snap to a tier edge.

---

## Z-index

`--z-below` -1 · `--z-base` 0 · `--z-above` 1 · `--z-navigation` 1100 · `--z-dialogue` 1400.
Nothing between tiers — a new layer is a system gap, flag it.

---

## Motion

| Token | Value | Use |
|---|---|---|
| `--motion-fast` | 150ms | Button press, theme toggle |
| `--motion-default` | 200ms | Sheet open, defaults |
| `--motion-slow` | 300ms | Large-element (rare) |
| `--ease-default` | cubic-bezier(0.2,0,0,1) | Most |
| `--ease-in` | ease-in | Exit (dismiss) |
| `--ease-out` | ease-out | Enter (show) |

SONNAT is animation-light: cross-fades and short slides only, no springs/bounces.

---

## Shadows

SONNAT is shadow-light — most cards use a 1px border + background contrast instead.
`--shadow-xs/sm` inline & app bar · `--shadow-md` optional card · `--shadow-lg` dropdown/popover · `--shadow-sheet` bottom sheet.

---

## Anti-patterns

| ❌ Don't | ✅ Do |
|---|---|
| `color: #C32E2E` | `color: var(--surface-brand-strong)` |
| `padding: 14px` | nearest token (`--space-md` or `--space-lg`) — don't split the difference |
| `border-radius: 10px` | `var(--radius-sm)` |
| `margin-left: 8px` | `margin-inline-start: var(--space-sm)` (RTL-safe) |
| `var(--p-crimson-500)` in a component | semantic token only |
| `@media (max-width: 900px)` | snap to a tier edge (`1024px`) |
| `@media (prefers-color-scheme: dark)` | tokens resolve via `[data-theme="dark"]` |
| `--surface-brand-strongish` | pick the nearest real strength; flag the gap |
| `purple` / `magenta` / `sapphire` for UI | those are data-viz palettes only |
