# Versioning

SONNAT Web uses **semantic versioning** per package, driven by **Changesets**.
Each package versions independently:

- `@divar/sonnat-tokens`
- `@divar/sonnat-react`

---

## Two steps, two artifacts — don't confuse them

The "log what changed" and "bump the version" steps are **separate on purpose**:

1. **Changelog entry** (human-readable, immediate) → `CHANGELOG.md`.
   You write this the moment a component is built. It's the running narrative of
   the project.

2. **Changeset** (machine-readable, drives versioning) → a file in `.changeset/`.
   `pnpm changeset` creates it. It records *which packages* changed and *how
   much* (patch / minor / major). It does **not** bump the version immediately.

3. **Version bump + per-package CHANGELOG** (automatic, at release).
   When changesets are merged to `main`, the release workflow opens a
   **"Version Packages"** PR that bumps `package.json` versions and generates the
   per-package `CHANGELOG.md`. Merging that PR publishes.

So: you build → write the human changelog entry → add a changeset → the version
updates itself at release. You never hand-edit a version number.

> Why deferred and not bump-per-component? Bumping on every component creates
> version noise and merge conflicts. Changesets batch the intent and release
> cleanly. If you ever truly need an immediate bump, do it via a changeset +
> manual release — but that's the exception.

---

## Bump rules

Pick the smallest bump that's honest about impact.

### `@divar/sonnat-react`

| Bump | When |
|---|---|
| **patch** | Bug fix, no API change. Visual fix that isn't a redesign. Internal refactor. |
| **minor** | New component. New **optional** prop or variant. New story. Anything backward-compatible. |
| **major** | Breaking prop change (rename/remove/required). Removed component. Default behavior change that alters appearance or API. |

### `@divar/sonnat-tokens`

| Bump | When |
|---|---|
| **patch** | Doc/comment fix. Non-visible internal change. |
| **minor** | New token added. New theme value. Backward-compatible. |
| **major** | Token **renamed or removed**. A value change large enough to break layouts/contrast across consumers. |

If a token changes, anything in `react` that depends on it usually needs at
least a **patch** too — changeset can bump both.

---

## How to add a changeset

```bash
pnpm changeset
# 1. select the package(s) that changed
# 2. pick patch / minor / major per package
# 3. write a one-line summary (this becomes the CHANGELOG line)
```

Commit the generated `.changeset/*.md` file as part of your PR. **Every
package-affecting PR must include a changeset** — CI should flag it if missing.

---

## Pre-1.0 note

While the library is `0.x`, treat **minor** as the ceiling for normal work and
reserve **major** for genuinely breaking changes you've discussed with the team.
Moving to `1.0.0` is a deliberate decision, not an accident.
