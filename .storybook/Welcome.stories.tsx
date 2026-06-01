import type { Meta, StoryObj } from "@storybook/react";

// Placeholder landing page so Storybook has content before the first component.
// This is documentation, not a SONNAT component — it does not ship in the library.
function Welcome() {
  return (
    <div
      style={{
        fontFamily: "var(--font-family)",
        color: "var(--content-neutral-stronger)",
        background: "var(--surface-neutral-weaker)",
        padding: "var(--space-xl)",
        maxWidth: "640px"
      }}
    >
      <h1 style={{ fontSize: "var(--type-2xl-size)", lineHeight: "var(--type-2xl-lh)" }}>
        SONNAT Web — سنّت
      </h1>
      <p style={{ fontSize: "var(--type-md-size)", lineHeight: "var(--type-md-lh)" }}>
        The React implementation of Divar&apos;s SONNAT design system. Use the toolbar
        above to flip <strong>theme</strong> (light / dark) and <strong>direction</strong>{" "}
        (RTL / LTR). Components arrive one at a time — Button first.
      </p>
      <p
        style={{
          fontSize: "var(--type-sm-size)",
          lineHeight: "var(--type-sm-lh)",
          color: "var(--content-neutral-default)"
        }}
      >
        No components are built yet (Phase 0 scaffold).
      </p>
    </div>
  );
}

const meta: Meta<typeof Welcome> = {
  title: "SONNAT/Welcome",
  component: Welcome,
  parameters: { layout: "fullscreen" }
};

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Introduction: Story = {};
