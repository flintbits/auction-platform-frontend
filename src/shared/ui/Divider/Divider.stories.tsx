import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div style={{ height: 80 }}>
      <Divider {...args} />
    </div>
  ),
};

export const BetweenContentHorizontal: Story = {
  render: () => (
    <div style={{ width: 200 }}>
      <div>Top content</div>
      <Divider />
      <div>Bottom content</div>
    </div>
  ),
};

export const BetweenContentVertical: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        height: 60,
        alignItems: "center",
        gap: 12,
      }}
    >
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
