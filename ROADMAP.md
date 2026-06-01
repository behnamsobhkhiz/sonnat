# SONNAT Web — Roadmap

The full inventory of SONNAT components and atoms, mirrored from the Figma source
(`SONNAT Design System`, components page). This is the **tracker**: it records
what exists and the status of each item. It does **not** dictate build order —
the backlog for any given work session is given directly in the prompt.

> **Claude Code:** after building/reviewing a component, update only its
> **Status** cell here. Don't add, rename, or reorder items without the human.
> When in doubt about an item's intended behavior, ask (see CONTRIBUTING.md).

---

## Status legend

| Symbol | Meaning |
|---|---|
| 📋 | Todo — in Figma, not built on web |
| 🔨 | In progress |
| 🧪 | Built, awaiting human review |
| ✅ | Done (merged) |
| 🚧 | **Figma design not final** — confirm with design before building |
| ❄️ | Parked / out of scope for now |

---

## Atoms

Foundational primitives. Other components compose from these, so they are the
natural thing to build first. (Source: "Atoms AL" set in Figma — purple nodes.)

| Atom | Status | Notes |
|---|---|---|
| Icon | 📋 | Icon system / wrapper. Needed by almost everything. |
| Icon Placeholder | 📋 | Skeleton/placeholder slot for an icon |
| Image Uploader | 📋 | |
| .Error | 📋 | Inline error text atom |
| .Warning | 📋 | Inline warning text atom |
| .Hint | 📋 | Inline hint text atom |
| .Helper | 📋 | Helper text atom (below fields) |
| .Subtitle | 📋 | Subtitle text atom |
| .Seek Bar | 📋 | Media seek/scrubber |
| .White Overlay | 📋 | Overlay scrim (light) |
| .Black Overlay | 📋 | Overlay scrim (dark) |
| .FAB | 📋 | Floating action button |
| .Gallery | 📋 | Gallery atom |

---

## Components

### Inputs & form controls

| Component | Status | Notes |
|---|---|---|
| Button Bar | 🚧 | Figma WIP — confirm before building |
| Stacked Button Row | 📋 | |
| Segmented Button | 📋 | |
| Check Box Row | 📋 | |
| Radio Button Row | 📋 | |
| Switch Row | 📋 | |
| Text Field Row | 📋 | |
| Twin Text Field Row | 📋 | Two fields in one row |
| OTP Field Row | 📋 | |
| Search Box | 📋 | |
| Selector Row | 📋 | |
| Option Selector Row | 📋 | |
| Slider Row | 📋 | |
| Rent Slider Row | 📋 | Domain-specific slider |
| Boolean Rate Row | 📋 | |
| Compose Bar | 📋 | Message compose input |

### Navigation & structure

| Component | Status | Notes |
|---|---|---|
| Top App Bar | 📋 | App bar height 56px (see tokens) |
| Navigation Bar | 📋 | Bottom nav, item radius `--radius-round` |
| Tab Row | 📋 | |
| Breadcrumb Row | 📋 | |
| Divider + Section Divider | 📋 | Maps to `--border-neutral-weaker` |
| Spacer | 📋 | Layout spacer using `--space-*` |
| Container | 🚧 | Figma WIP — confirm before building |

### Content rows & cards

| Component | Status | Notes |
|---|---|---|
| Product Row | 📋 | Core listing row |
| Post Card + Note Row | 📋 | |
| Map Post Card | 📋 | |
| Action Card | 📋 | |
| Title Row | 📋 | |
| Info Row | 📋 | |
| Group Info Row | 📋 | |
| Info Box | 🚧 | Figma WIP; radius `--radius-md` |
| Description Text | 📋 | |
| Legend Title Row | 📋 | |
| Category Row | 📋 | |
| Cost Row | 📋 | |
| Price Change Row | 📋 | |
| Price Estimation Row | 📋 | |
| Score Row | 📋 | |
| Evaluation Row | 📋 | |
| Event Row | 📋 | |
| Feature Row | 🚧 | Figma WIP — confirm before building |
| Group Feature Row | 📋 | |
| Expandable Row | 📋 | |
| Stateful Row | 📋 | |
| Suggestion Row | 📋 | |
| Last Directory Row | 📋 | |
| Search History Row | 📋 | |
| Search Result Row | 📋 | |
| Search Suggestion Row | 📋 | |
| Filtered List Row | 📋 | |
| Package Selection Row | 📋 | |

### Chips, tags, badges, avatars

| Component | Status | Notes |
|---|---|---|
| Chip Row | 📋 | radius `--radius-sm` |
| Tag List Row | 📋 | tag radius `--radius-xs` |
| Section Badge Row | 📋 | badge radius `--radius-xs` |
| Avatar Row | 📋 | avatar `border-radius: 50%` |
| Banner Row | 📋 | |

### Media & visualization

| Component | Status | Notes |
|---|---|---|
| Image Carousel | 📋 | Low engagement on forms — see usage notes |
| Image Slider Row | 📋 | |
| Photo Row | 📋 | |
| Map Row | 📋 | |
| Chart Row | 📋 | data-viz palettes apply here |
| Gauge Chart Row | 📋 | |
| Horizontal Bar Chart Row | 📋 | |

### Overlays & feedback

| Component | Status | Notes |
|---|---|---|
| Bottom Sheet(s) | 📋 | top radius `--radius-lg`; `--shadow-sheet` |
| Rich Tooltip | 📋 | uses inverted surface tokens |
| Snack Bar | 📋 | radius `--radius-sm` |
| Blocking View | 📋 | full-screen blocking/loading state |
| Progress Indicator | 📋 | |

### Reference (already built)

| Component | Status | Notes |
|---|---|---|
| Button | ✅ | Reference implementation for the pattern |

---

## Flagged / needs decision

- **Figma WIP (🚧):** Button Bar, Container, Feature Row, Info Box, and "Chat
  Design Assets". Don't build these until design confirms the spec is final.
- **Chat Design Assets:** appears to be a separate asset bundle, not a single
  component. Treat as out of scope until clarified.
- **Naming:** the system is mobile-first ("… Row"). For web, decide per item
  whether "Row" stays in the component name or becomes a layout concern. Confirm
  with the human before settling a convention.
