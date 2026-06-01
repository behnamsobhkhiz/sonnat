# Icon

The SONNAT icon atom. Renders one of ~800 glyphs as a clean, token-aware inline
SVG. Color is inherited via `currentColor` (drive it with the `tone` prop or any
`--content-*` text color); size rides the type scale.

> **Provenance:** the glyphs were a one-time extraction from the legacy SONNAT
> icon font into individual SVGs (named from the font's name→unicode map), then
> turned into React components via SVGR. There is **no icon font** in the design
> system — only the shapes. The extraction tooling and the legacy font pack were
> removed after the migration; the committed `icons/*.svg` are now the source of
> truth and `glyphs/*` are generated from them. Because the source was a font +
> a name→unicode map (not an HTML/CSS mockup), this component has no
> `Icon.spec.html`.

---

## When to use

- Any UI glyph: actions, status, navigation, decorative marks.
- Pair an icon with text using `--space-xs`; the icon defaults to `1em`, so it
  lines up with the adjacent text size automatically.

**Don't** use an icon where a label is clearer, and don't ship a decorative icon
without thinking about whether it needs a `label` (see Accessibility).

---

## Two ways to use it

```tsx
import { Icon, TelephoneIcon } from "@behnamsobhkhiz/sonnat-react";

// 1) By name — ergonomic. Pulls the icon set into the bundle.
<Icon name="telephone" size="md" label="تماس" />

// 2) By glyph — tree-shakeable. Only TelephoneIcon ends up in the bundle.
<Icon glyph={TelephoneIcon} size="md" label="تماس" />

// The per-icon component also works on its own (size/color via CSS):
<TelephoneIcon width={20} height={20} />
```

Use **by name** for prototypes and app code where bundle size isn't critical.
Use **by glyph** (or the per-icon component directly) in size-sensitive libraries
— importing one glyph never pulls the other 800.

---

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `name` | `IconName` | — | Icon to render by name. Mutually exclusive with `glyph`. |
| `glyph` | `IconGlyph` | — | A per-icon component (e.g. `TelephoneIcon`). Mutually exclusive with `name`. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | `"md"` | Steps on the type scale: 12 / 14 / 16 / 18 / 20 / 24. |
| `tone` | `IconTone` | `"inherit"` | Semantic color (see below). `inherit` = surrounding text color. |
| `label` | `string` | — | Accessible name → `role="img"`, `aria-label`. Omit for decorative icons. |
| …rest | `SVGProps<SVGSVGElement>` | — | Spread onto the `<svg>` (e.g. `className`, `onClick`, `style`). |

`IconTone`: `inherit` · `neutral` · `neutral-strong` · `neutral-weak` · `brand`
· `positive` · `warning` · `negative` · `informative` · `on-color`.

Exports: `Icon`, `IconProps`, `IconSize`, `IconTone`, `IconGlyph`, `IconName`,
`ICON_NAMES` (array of every name), `iconRegistry`, and one component per glyph
(`<PascalCase>Icon`).

---

## Accessibility

- **Decorative** (default, no `label`): rendered `aria-hidden="true"` +
  `focusable="false"` — screen readers skip it.
- **Meaningful**: pass `label` (Persian where the UI is Persian). The icon then
  exposes `role="img"` and an accessible name.

---

## Sizing & color

- Size is `1em` scaled by a **type-scale** token, so icons align to text and stay
  on the scale. Need a one-off size? Set `font-size` on an ancestor — never a
  raw px width on the icon.
- Color comes from `currentColor`. Set `tone` for a semantic color, or just let
  it inherit the text color of its container (the common case).

---

## Tokens used

| Concern | Token |
|---|---|
| Size steps | `--type-xs/sm/md/lg/xl/2xl-size` |
| Color (tones) | `--content-neutral-default` / `-stronger` / `-weak`, `--content-brand-default`, `--content-positive-default`, `--content-warning-default`, `--content-negative-default`, `--content-informative-default`, `--content-neutral-on-color` |

No primitives, no raw hex, no `left`/`right`. Dark mode is automatic via the
content tokens.

---

## Don't do this

| ❌ | ✅ |
|---|---|
| `<Icon name="telephone" style={{ width: 14 }} />` | `<Icon name="telephone" size="sm" />` |
| `<Icon name="x" color="#C32E2E" />` | `<Icon name="x" tone="brand" />` |
| Re-introducing the icon **font** / `.kt-icon` classes | Use the SVG components only |
| `import { iconRegistry }` just to render one icon | `import { TelephoneIcon }` and pass via `glyph` |
| Decorative icon with a redundant `label` | Omit `label` so it's `aria-hidden` |

---

## Editing icons

- `glyphs/*.tsx`, the barrel, `icon-names.ts`, and `icon-registry.ts` were
  generated from `icons/*.svg`. Don't hand-edit them.
- To **fix or add** an icon: edit/add the SVG in `icons/` (viewBox `0 0 24 24`,
  single `<path>`, `fill="currentColor"`, no width/height), then regenerate the
  components. The original one-time extraction tooling (font → SVG, SVG → SVGR)
  was removed after the migration; re-add an SVGR step if you need to bulk-rebuild.
