import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, ReactNode } from "react";

// Documentation, not a shipping component. It renders the SONNAT color tokens
// straight from the CSS custom properties, so swatches always reflect the live
// token values and flip automatically with the theme toolbar (light / dark).
//
// Rule of the system: components consume the SEMANTIC layer only
// (--surface-* / --content-* / --border-*). Primitives are shown at the bottom
// for reference only — never reach for them from a component.

const page: CSSProperties = {
  fontFamily: "var(--font-family)",
  color: "var(--content-neutral-stronger)",
  background: "var(--surface-neutral-weaker)",
  padding: "var(--space-xl)",
  minHeight: "100vh"
};

const h2: CSSProperties = {
  fontSize: "var(--type-xl-size)",
  lineHeight: "var(--type-xl-lh)",
  margin: "var(--space-2xl) 0 var(--space-md)"
};

const h3: CSSProperties = {
  fontSize: "var(--type-md-size)",
  lineHeight: "var(--type-md-lh)",
  fontWeight: "var(--font-weight-bold)",
  color: "var(--content-neutral-strong)",
  margin: "var(--space-lg) 0 var(--space-sm)",
  textTransform: "capitalize"
};

const lead: CSSProperties = {
  fontSize: "var(--type-sm-size)",
  lineHeight: "var(--type-sm-lh)",
  color: "var(--content-neutral-default)",
  maxWidth: "60ch"
};

const ramp: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-sm)"
};

const caption: CSSProperties = {
  fontSize: "var(--type-xs-size)",
  lineHeight: "var(--type-xs-lh)",
  color: "var(--content-neutral-default)",
  marginBlockStart: "var(--space-2xs)"
};

const cell: CSSProperties = { inlineSize: "104px" };

/** A solid fill swatch backed by `background: var(<token>)`. */
function SurfaceSwatch({ token }: { token: string }) {
  const suffix = token.replace(/^--surface-/, "");
  return (
    <div style={cell}>
      <div
        style={{
          blockSize: "56px",
          borderRadius: "var(--radius-sm)",
          background: `var(${token})`,
          border: "var(--border-sm) solid var(--border-neutral-weak)"
        }}
      />
      <div style={caption}>{suffix}</div>
    </div>
  );
}

/** Text-on-surface sample backed by `color: var(<token>)`. */
function ContentSwatch({ token }: { token: string }) {
  const suffix = token.replace(/^--content-/, "");
  const onInverted = token.includes("on-color");
  return (
    <div style={cell}>
      <div
        style={{
          blockSize: "56px",
          display: "grid",
          placeItems: "center",
          borderRadius: "var(--radius-sm)",
          border: "var(--border-sm) solid var(--border-neutral-weak)",
          background: onInverted
            ? "var(--surface-inverted-stronger)"
            : "var(--surface-neutral-weaker)"
        }}
      >
        <span
          style={{
            color: `var(${token})`,
            fontSize: "var(--type-lg-size)",
            fontWeight: "var(--font-weight-bold)"
          }}
        >
          آ Aa
        </span>
      </div>
      <div style={caption}>{suffix}</div>
    </div>
  );
}

/** Box outlined with `border-color: var(<token>)`. */
function BorderSwatch({ token }: { token: string }) {
  const suffix = token.replace(/^--border-/, "");
  return (
    <div style={cell}>
      <div
        style={{
          blockSize: "56px",
          borderRadius: "var(--radius-sm)",
          background: "var(--surface-neutral-weaker)",
          border: `var(--border-md) solid var(${token})`
        }}
      />
      <div style={caption}>{suffix}</div>
    </div>
  );
}

/** Raw primitive swatch — reference only. Shows hex via the var itself. */
function PrimitiveSwatch({ token }: { token: string }) {
  const suffix = token.replace(/^--p-/, "");
  return (
    <div style={{ inlineSize: "72px" }}>
      <div
        style={{
          blockSize: "44px",
          borderRadius: "var(--radius-xs)",
          background: `var(${token})`,
          border: "var(--border-sm) solid var(--border-neutral-weak)"
        }}
      />
      <div style={caption}>{suffix}</div>
    </div>
  );
}

function Family({
  name,
  prefix,
  steps,
  Swatch
}: {
  name: string;
  prefix: string;
  steps: string[];
  Swatch: (p: { token: string }) => ReactNode;
}) {
  return (
    <>
      <h3 style={h3}>{name}</h3>
      <div style={ramp}>
        {steps.map((s) => (
          <Swatch key={s} token={`${prefix}-${name}-${s}`} />
        ))}
      </div>
    </>
  );
}

// ── Semantic step sets (mirror packages/tokens/src/tokens.css) ──────────────
const NEUTRAL_INVERTED = ["weaker", "weak", "default", "strong", "stronger", "on-color"];
const ACCENT = ["weaker", "weak", "default", "strong", "stronger"];
const BRAND_SURFACE = ["weakest", "weaker", "weak", "default", "strong", "stronger", "strongest"];
const STATUS = ["informative", "positive", "warning", "negative"] as const;

function Surfaces() {
  return (
    <section>
      <h2 style={h2}>Surface</h2>
      <p style={lead}>
        Backgrounds and fills. <code>background: var(--surface-…)</code>.
      </p>
      <Family name="neutral" prefix="--surface" steps={NEUTRAL_INVERTED} Swatch={SurfaceSwatch} />
      <Family name="inverted" prefix="--surface" steps={NEUTRAL_INVERTED} Swatch={SurfaceSwatch} />
      <Family name="brand" prefix="--surface" steps={BRAND_SURFACE} Swatch={SurfaceSwatch} />
      {STATUS.map((s) => (
        <Family key={s} name={s} prefix="--surface" steps={ACCENT} Swatch={SurfaceSwatch} />
      ))}
      <h3 style={h3}>dimmer (scrims)</h3>
      <div style={ramp}>
        {[
          "--surface-dimmer-neutral-weak",
          "--surface-dimmer-neutral-default",
          "--surface-dimmer-neutral-strong",
          "--surface-dimmer-brand-weak",
          "--surface-dimmer-brand-default",
          "--surface-dimmer-brand-strong"
        ].map((t) => (
          <SurfaceSwatch key={t} token={t} />
        ))}
      </div>
    </section>
  );
}

function Content() {
  return (
    <section>
      <h2 style={h2}>Content</h2>
      <p style={lead}>
        Text and icon color. <code>color: var(--content-…)</code> — what{" "}
        <code>currentColor</code> (and the <code>Icon</code> tones) resolve to.
      </p>
      <Family name="neutral" prefix="--content" steps={NEUTRAL_INVERTED} Swatch={ContentSwatch} />
      <Family name="inverted" prefix="--content" steps={NEUTRAL_INVERTED} Swatch={ContentSwatch} />
      <Family name="brand" prefix="--content" steps={ACCENT} Swatch={ContentSwatch} />
      {STATUS.map((s) => (
        <Family key={s} name={s} prefix="--content" steps={ACCENT} Swatch={ContentSwatch} />
      ))}
    </section>
  );
}

function Borders() {
  return (
    <section>
      <h2 style={h2}>Border</h2>
      <p style={lead}>
        Strokes and dividers. <code>border-color: var(--border-…)</code>.
      </p>
      <Family name="neutral" prefix="--border" steps={ACCENT} Swatch={BorderSwatch} />
      <Family name="brand" prefix="--border" steps={ACCENT} Swatch={BorderSwatch} />
      {STATUS.map((s) => (
        <Family key={s} name={s} prefix="--border" steps={ACCENT} Swatch={BorderSwatch} />
      ))}
    </section>
  );
}

// ── Primitives (reference only — do NOT use in components) ──────────────────
const PRIMITIVES: { name: string; steps: string[] }[] = [
  { name: "crimson", steps: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"] },
  { name: "tornado", steps: ["00", "25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"] },
  { name: "blue", steps: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "850", "900"] },
  { name: "green", steps: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "850", "900"] },
  { name: "orange", steps: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "850", "900"] },
  { name: "red", steps: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "850", "900"] }
];

function Primitives() {
  return (
    <section>
      <h2 style={h2}>Primitives — reference only</h2>
      <p style={{ ...lead, color: "var(--content-warning-default)" }}>
        ⚠️ These back the semantic tokens above. Never reference{" "}
        <code>--p-*</code> from a component — always use the semantic layer.
      </p>
      {PRIMITIVES.map((p) => (
        <div key={p.name}>
          <h3 style={h3}>{p.name}</h3>
          <div style={ramp}>
            {p.steps.map((s) => (
              <PrimitiveSwatch key={s} token={`--p-${p.name}-${s}`} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Colors() {
  return (
    <div style={page} dir="rtl">
      <h1 style={{ fontSize: "var(--type-2xl-size)", lineHeight: "var(--type-2xl-lh)", margin: 0 }}>
        Colors
      </h1>
      <p style={lead}>
        The SONNAT color system. Swatches read live from the CSS custom
        properties — flip <strong>theme</strong> in the toolbar to see dark mode
        resolve automatically.
      </p>
      <Surfaces />
      <Content />
      <Borders />
      <Primitives />
    </div>
  );
}

const meta: Meta<typeof Colors> = {
  title: "Foundation/Colors",
  component: Colors,
  parameters: { layout: "fullscreen" }
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const Palette: Story = {};
