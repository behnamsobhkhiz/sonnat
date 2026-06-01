# Contributing to SONNAT Web

This document is the working agreement for both humans and Claude Code.

---

## Engagement model (how Claude Code works through the backlog)

The human gives the backlog **directly in the prompt** — what to build and in
what order — not via a file. `ROADMAP.md` is the running inventory of all
components and their status; it is the tracker, not the order-giver. Claude
Code's job is to turn the prompted backlog into shipped components — but never
blindly. The loop is:

1. **Take the backlog from the prompt.** Cross-reference it against `ROADMAP.md`
   to see what already exists, what's in progress, and what's left.
2. **Receive the spec.** For each component the human provides a self-contained
   **HTML/CSS spec** (a static mockup of the intended result). Save it and treat
   it as the source of truth for that component (see "Component specs" below).
3. **Clarify first.** Before writing code, list every ambiguity as concrete
   questions — variants, states, sizes, default values, edge cases, RTL
   specifics, which token applies, what "done" looks like. **Stop for answers.**
   Don't guess; a wrong guess costs more than a question.
4. **Propose phasing if the work is large.** If the prompted batch is big or has
   dependencies, propose a short phase plan (what ships first, what depends on
   what) and **stop for approval** before building.
5. **Build** one component at a time (see "Per-component loop").
6. **Log + version** every build (see CHANGELOG.md and VERSIONING.md).
7. **Update `ROADMAP.md`** status and **stop for review** after each component.

Default to asking and stopping. Momentum is not the goal; correctness is.

---

## Branching

- `main` is protected and always releasable. Never commit to it directly.
- One branch per unit of work:
  - `feat/component-<name>` — new component
  - `fix/<scope>-<short-desc>` — bug fix
  - `chore/<short-desc>` — tooling, docs, config
- Open a PR; CI must be green and CODEOWNERS must approve before merge.
- Squash-merge to keep `main` history clean.

## Commits

Conventional Commits:

```
feat(input): add Input component with outline/filled variants
fix(button): correct focus ring offset in RTL
chore(ci): cache pnpm store
docs(tokens): clarify line-height token naming
```

---

## Component specs (how the human hands off a component)

For each component, the human provides a **self-contained HTML/CSS spec** — a
static mockup showing the exact intended visual result (markup + styles). This
is the source of truth for structure, layout, states, and visual detail.

**When you receive a spec, the FIRST thing you do is save it as a file:**

- Store it at `packages/react/src/components/<Name>/<Name>.spec.html`.
- It lives next to the component's other files and is committed with them.
- If the human later sends an updated spec for an existing component, **overwrite
  that file** with the new version and note the change in the PR / CHANGELOG.
  The spec file always reflects the latest intended design.

**How to use a spec (do NOT copy it verbatim):**

1. Read it as the *target output*, not as code to ship. Re-implement it as a
   proper SONNAT React component (the four files below).
2. Map every raw value in the spec to the nearest SONNAT token — colors →
   `--surface/content/border-*`, spacing → `--space-*`, radius → `--radius-*`,
   type → `--type-*`, shadow/motion likewise. If the spec uses a raw value with
   **no** matching token, STOP and ask — don't hardcode it.
3. Convert any `left`/`right` to RTL logical properties.
4. If the spec shows only one theme, derive the other via tokens — never
   hardcode dark-mode values.
5. List any ambiguity (missing states, hover/pressed, edge cases) as questions
   **before** building.

So the per-component flow is: human pastes the HTML/CSS spec → you save it as
`<Name>.spec.html` → you ask clarifying questions → human answers → you build it
the SONNAT way (per-component loop below).

---

## Per-component loop (do this for EVERY component)

1. `git switch -c feat/component-<name>`
2. **Save the provided HTML/CSS spec** as
   `src/components/<Name>/<Name>.spec.html` (create or overwrite).
3. Create the four files, following the `Button` reference exactly:
   - `<Name>.tsx` — typed props, `forwardRef`, sensible defaults
   - `<Name>.module.css` — **only** `var(--token)` values, no raw hex/px
   - `<Name>.stories.tsx` — every variant + state, Persian labels
   - `COMPONENT.md` — props table, when-to-use, usage, tokens used, "don't do this"
4. Run and fix until green:
   ```
   pnpm lint && pnpm typecheck && pnpm build && pnpm build-storybook
   ```
5. Verify in Storybook against the spec: **light + dark + RTL**. Note it in the PR.
6. **Update `CHANGELOG.md`** — add an entry under `[Unreleased]` (see CHANGELOG.md).
7. **Add a changeset** — `pnpm changeset` (see VERSIONING.md for bump rules).
8. Update the component's **Status** in `ROADMAP.md` (→ 🧪) and the
   "Available components" table in `CLAUDE.md`.
9. Commit, push, open PR, **stop for human review**.

## Definition of done

A component is done when:

- [ ] The HTML/CSS spec is saved as `<Name>.spec.html` and matches what shipped
- [ ] Four files exist and follow the Button pattern
- [ ] No raw values — semantic tokens only
- [ ] RTL-safe (logical properties; no hardcoded left/right)
- [ ] Works in light **and** dark (via `[data-theme]`, not media queries)
- [ ] All variants + states have stories
- [ ] `lint`, `typecheck`, `build`, `build-storybook` pass
- [ ] `CHANGELOG.md` updated + changeset added
- [ ] `ROADMAP.md` and `CLAUDE.md` tables updated
- [ ] PR opened and reviewed

---

## Adding a token (rare)

Tokens come from Figma and live in `packages/tokens`. Do **not** add or change a
token value to make a component work. If a value is genuinely missing, stop and
raise it with the human — it's a design-system gap, not a code decision.
