# SONNAT Web — Claude Code Guide

The web implementation of **SONNAT** (سنّت), Divar's design system: a React
component library that mirrors the SONNAT Figma source.

**Your job:** build UIs and prototypes using SONNAT tokens and components —
never raw HTML/CSS values, never another UI library.

---

## Read this first, every session

1. `packages/tokens/TOKENS.md` — which token to use for what.
2. `CONTRIBUTING.md` — how work flows (engagement model, per-component loop).
3. `ROADMAP.md` — the full component inventory and each item's status.
4. `VERSIONING.md` + `CHANGELOG.md` — how to log and version each change.
5. The `COMPONENT.md` of any component you're about to use or build.

The backlog (what to build now, in what order) is given **in the prompt**, not
in a file. `ROADMAP.md` only tracks status. If a component doesn't exist yet,
build it (see "Adding a component") before using it in a prototype.

---

## The seven rules

1. **Tokens, not raw values.** `var(--surface-brand-strong)`, never `#C32E2E`.
   Same for spacing, radius, type, shadow, motion. If a value isn't a token, it
   doesn't go in the code — ask or flag it.

2. **Semantic layer only.** Use `--surface-*` / `--content-*` / `--border-*`.
   Never reach into primitives (`--p-crimson-500`) from a component.

3. **Dark mode is automatic.** Tokens resolve via `[data-theme="dark"]` on an
   ancestor. Never write `prefers-color-scheme` queries or manual dark overrides.

4. **RTL-first.** Use logical properties — `margin-inline-start`,
   `padding-inline-end`, `inset-inline`. Never hardcode `left`/`right` for layout.

5. **Stay on the scale.** Spacing, radius, type, z-index, breakpoints all have
   fixed steps. Don't invent values between them — adapt the design instead.

6. **IRANSans is the typeface.** Loaded via `@behnamsobhkhiz/sonnat-tokens`
   (`fonts.css`, `@import`ed by `tokens.css`). Never override `font-family`.

7. **One primary action.** Per section/row, only one `primary` button; the rest
   are `secondary` or `ghost`.

---

## Project structure

```
sonnat/                                  ← pnpm + Changesets monorepo
├── CLAUDE.md                            ← you are here
├── CONTRIBUTING.md  ROADMAP.md  VERSIONING.md  CHANGELOG.md
├── .storybook/                          ← Storybook 8 (reads stories from packages/react)
└── packages/
    ├── tokens/                          ← @behnamsobhkhiz/sonnat-tokens
    │   ├── src/
    │   │   ├── tokens.css               ← all custom properties (light + dark + primitives)
    │   │   └── fonts.css                ← IRANSans / Vazirmatn fallback
    │   └── TOKENS.md                    ← token reference (read before styling)
    └── react/                           ← @behnamsobhkhiz/sonnat-react
        └── src/
            ├── index.ts                 ← public API (exports each component)
            └── components/
                └── <Name>/
                    ├── <Name>.spec.html ← human-provided HTML/CSS spec (source of truth)
                    ├── <Name>.tsx
                    ├── <Name>.module.css
                    ├── <Name>.stories.tsx
                    └── COMPONENT.md      ← props, usage, tokens (read before using)
```

---

## Setup (once)

Import tokens once at the app root so every component sees them:

```tsx
import "@behnamsobhkhiz/sonnat-tokens/tokens.css";
```

Set the theme on the root element:

```html
<html lang="fa" dir="rtl" data-theme="light">  <!-- or "dark" -->
```

Toggling theme = swapping the `data-theme` attribute. Nothing else changes.

---

## Adding a component

Follow the existing pattern exactly — consistency is what lets Claude Code
generate correct prototypes later.

1. Read `packages/tokens/TOKENS.md` and one existing `COMPONENT.md` for reference.
2. `packages/react/src/components/<Name>/<Name>.tsx` — typed props, `forwardRef`, sensible defaults.
3. `packages/react/src/components/<Name>/<Name>.module.css` — only `var(--token)` values.
4. `packages/react/src/components/<Name>/<Name>.stories.tsx` — cover every variant + state.
5. `packages/react/src/components/<Name>/COMPONENT.md` — props table, when-to-use, usage
   examples, tokens used, and "don't do this".
6. Export it from `packages/react/src/index.ts`, then add a row to the table below.

---

## Building a prototype

- Import components from `@behnamsobhkhiz/sonnat-react`. Compose with `--space-*`
  for gaps and the breakpoint tiers for responsiveness.
- Don't restyle components inline; if you need a variant that doesn't exist, add
  it to the component the proper way.
- Keep the prototype in its own folder; don't edit library components to make a
  one-off prototype work.

---

## Available components

| Component | Path | Status |
|---|---|---|
| Button | `packages/react/src/components/Button` | ✅ ready |
| Icon | `packages/react/src/components/Icon` | 🧪 awaiting review |

*(Keep this table current as components land.)*
