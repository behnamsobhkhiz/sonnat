# Changelog

All notable changes to SONNAT Web are recorded here. Format follows
[Keep a Changelog](https://keepachangelog.com/); versions follow
[Semantic Versioning](https://semver.org/) (see VERSIONING.md).

<!--
  CLAUDE CODE — how to use this file:
  • After building/changing anything, add a bullet under [Unreleased], in the
    right group: Added / Changed / Fixed / Removed.
  • One line per change, past tense, human-readable. Name the component/package.
    e.g. "- Added `Input` component (outline/filled variants). (@divar/sonnat-react)"
  • This entry is the narrative log. You ALSO add a changeset (see VERSIONING.md)
    in the same PR — the changeset is what bumps the version.
  • Do NOT hand-edit version numbers or move entries out of [Unreleased]; the
    release workflow graduates them under a version heading automatically.
-->

## [Unreleased]

### Added
- Project scaffold: token layer (`@divar/sonnat-tokens`) and React library
  (`@divar/sonnat-react`).
- `Button` component (primary / secondary / ghost / danger; sm / md / lg;
  loading, full-width, icon slots). (@divar/sonnat-react)
- `Icon` atom: ~800 glyphs migrated from the legacy SONNAT icon font to
  tree-shakeable SVG components (no icon font ships). Token-aware `<Icon>`
  wrapper with `name` registry + per-icon components, size on the type scale,
  color via `--content-*`; Storybook stories (searchable gallery) + docs.
  (@behnamsobhkhiz/sonnat-react)

### Changed
- _(nothing yet)_

### Fixed
- _(nothing yet)_

### Removed
- _(nothing yet)_

---

<!-- Released versions appear below this line, newest first. -->
