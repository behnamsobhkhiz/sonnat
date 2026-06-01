import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties } from "react";

// Documentation, not a shipping component. It renders the SONNAT type scale
// straight from the typography tokens in packages/tokens/src/tokens.css.
// IRANSans is the typeface (rule 6); never override font-family in a component.

const page: CSSProperties = {
  fontFamily: "var(--font-family)",
  color: "var(--content-neutral-stronger)",
  background: "var(--surface-neutral-weaker)",
  padding: "var(--space-xl)",
  minHeight: "100vh"
};

const lead: CSSProperties = {
  fontSize: "var(--type-sm-size)",
  lineHeight: "var(--type-sm-lh)",
  color: "var(--content-neutral-default)",
  maxWidth: "60ch"
};

const h2: CSSProperties = {
  fontSize: "var(--type-xl-size)",
  lineHeight: "var(--type-xl-lh)",
  margin: "var(--space-2xl) 0 var(--space-md)"
};

const meta_: CSSProperties = {
  fontSize: "var(--type-xs-size)",
  lineHeight: "var(--type-xs-lh)",
  color: "var(--content-neutral-default)",
  fontFamily: "ui-monospace, monospace"
};

type Step = {
  step: string;
  role: string;
  sizeVar: string;
  lhVar: string;
  px: string;
};

// Mirrors the --type-* tokens. NOTE: the lg line-height token is currently
// spelled `--type-lh-lg` in tokens.css (the others are `--type-<step>-lh`);
// we read it with a fallback so the sample renders correctly either way.
const SCALE: Step[] = [
  { step: "2xl", role: "Display", sizeVar: "--type-2xl-size", lhVar: "--type-2xl-lh", px: "24 / 40" },
  { step: "xl", role: "Heading", sizeVar: "--type-xl-size", lhVar: "--type-xl-lh", px: "20 / 32" },
  { step: "lg", role: "Title", sizeVar: "--type-lg-size", lhVar: "--type-lg-lh, var(--type-lh-lg)", px: "18 / 30" },
  { step: "md", role: "Body", sizeVar: "--type-md-size", lhVar: "--type-md-lh", px: "16 / 26" },
  { step: "sm", role: "Subtitle", sizeVar: "--type-sm-size", lhVar: "--type-sm-lh", px: "14 / 24" },
  { step: "xs", role: "Caption", sizeVar: "--type-xs-size", lhVar: "--type-xs-lh", px: "12 / 20" }
];

const SAMPLE_FA = "دیوار، نیازمندی‌های رایگان";
const SAMPLE_EN = "The quick brown fox 0123";

function Row({ s }: { s: Step }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(160px, 220px) 1fr",
        gap: "var(--space-lg)",
        alignItems: "baseline",
        padding: "var(--space-md) 0",
        borderBlockEnd: "var(--border-sm) solid var(--border-neutral-weaker)"
      }}
    >
      <div>
        <div
          style={{
            fontSize: "var(--type-md-size)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--content-neutral-stronger)"
          }}
        >
          {s.role}
        </div>
        <div style={meta_}>
          {s.step} · {s.px}px
        </div>
        <div style={meta_}>var({s.sizeVar.replace(/,.*/, "")})</div>
      </div>
      <div
        style={{
          fontSize: `var(${s.sizeVar})`,
          lineHeight: `var(${s.lhVar})`,
          color: "var(--content-neutral-stronger)"
        }}
      >
        {SAMPLE_FA} <span dir="ltr">{SAMPLE_EN}</span>
      </div>
    </div>
  );
}

function Weights() {
  return (
    <section>
      <h2 style={h2}>Weights</h2>
      <p style={lead}>
        Two weights ship: regular and bold. Drive weight with the tokens — never
        a raw numeric value.
      </p>
      <div style={{ display: "flex", gap: "var(--space-2xl)", flexWrap: "wrap" }}>
        {[
          { label: "Regular", token: "--font-weight-regular", num: "400" },
          { label: "Bold", token: "--font-weight-bold", num: "700" }
        ].map((w) => (
          <div key={w.token}>
            <div
              style={{
                fontSize: "var(--type-xl-size)",
                lineHeight: "var(--type-xl-lh)",
                fontWeight: `var(${w.token})`
              }}
            >
              {SAMPLE_FA}
            </div>
            <div style={meta_}>
              {w.label} · var({w.token}) · {w.num}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FontFamily() {
  return (
    <section>
      <h2 style={h2}>Typeface</h2>
      <p style={lead}>
        <code>var(--font-family)</code> ={" "}
        <code>&quot;IRANSans&quot;, &quot;Vazirmatn&quot;, &quot;Tahoma&quot;, system-ui</code>.
        IRANSans is the SONNAT typeface; the rest are fallbacks for missing glyphs.
      </p>
    </section>
  );
}

function Typography() {
  return (
    <div style={page} dir="rtl">
      <h1 style={{ fontSize: "var(--type-2xl-size)", lineHeight: "var(--type-2xl-lh)", margin: 0 }}>
        Typography
      </h1>
      <p style={lead}>
        The SONNAT type scale — six steps, each with a matched line-height.
        Samples render live from the <code>--type-*</code> tokens.
      </p>
      <section>
        <h2 style={h2}>Type scale</h2>
        {SCALE.map((s) => (
          <Row key={s.step} s={s} />
        ))}
      </section>
      <Weights />
      <FontFamily />
    </div>
  );
}

const meta: Meta<typeof Typography> = {
  title: "Foundation/Typography",
  component: Typography,
  parameters: { layout: "fullscreen" }
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Scale: Story = {};
