import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Text/Typography",
  component: Typography,
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
    weight: {
      control: { type: "radio" },
      options: ["light", "normal", "medium", "bold"],
    },
    size: {
      control: { type: "radio" },
      options: ["text-base", "text-md", "text-sm", "text-xs"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

//Header Examples
export const H1Bold: Story = {
  args: {
    as: "h1",
    children: "Heading h1 — Bold",
    weight: "bold",
  },
};

export const H1Medium: Story = {
  args: {
    as: "h1",
    children: "Heading h1 — Medium",
    weight: "medium",
  },
};

export const H1Normal: Story = {
  args: {
    as: "h1",
    children: "Heading h1 — Normal",
    weight: "normal",
  },
};

export const H1Light: Story = {
  args: {
    as: "h1",
    children: "Heading h1 — Light",
    weight: "light",
  },
};

//Paragraph Examples
export const ParagraphDefault: Story = {
  args: {
    as: "p",
    children: "This is a default paragraph.",
  },
};

export const ParagraphSmall: Story = {
  args: {
    as: "p",
    children: "Small paragraph text.",
    size: "text-sm",
  },
};

export const ParagraphExtraSmall: Story = {
  args: {
    as: "p",
    children: "Extra small paragraph text.",
    size: "text-xs",
  },
};

//Playground
export const Playground: Story = {
  args: {
    as: "h2",
    children: "Editable Typography",
    weight: "normal",
    size: "text-base",
  },
};

export const TypographyScale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography as="h1" weight="bold">Heading 1 Bold</Typography>
      <Typography as="h2" weight="medium">Heading 2 Medium</Typography>
      <Typography as="h3" weight="normal">Heading 3 Normal</Typography>
      <Typography as="h4" weight="light">Heading 4 Light</Typography>
      <Typography as="p" size="text-base">Paragraph Base</Typography>
      <Typography as="p" size="text-sm">Paragraph Small</Typography>
      <Typography as="p" size="text-xs">Paragraph Extra Small</Typography>
    </div>
  ),
};
