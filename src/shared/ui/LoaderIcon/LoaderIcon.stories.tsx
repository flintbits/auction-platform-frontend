import type { Meta, StoryObj } from "@storybook/react";
import LoaderIcon from "./LoaderIcon";

const meta: Meta<typeof LoaderIcon> = {
  title: "Typography/LoaderIcon",
  component: LoaderIcon,
  args: {
    variant: "primary",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoaderIcon>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const InContainer: Story = {
  render: () => (
    <div style={{ width: 40, height: 40 }}>
      <LoaderIcon />
    </div>
  ),
};
