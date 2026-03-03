import type { Meta, StoryObj } from "@storybook/react";
import { Search } from 'lucide-react';
import { TextField } from "./TextField";


const meta: Meta<typeof TextField> = {
  title: "Input/TextField",
  component: TextField,
  argTypes: {}
}

export default meta;
type Story = StoryObj<typeof meta>;

export const InputBasic: Story = {
  args: {
    // as: "h1",
    // children: "Heading h1 — Bold",
    // weight: "bold",
  },
};

export const InputLeftIcon: Story = {
  args: {
    LeftIcon: Search
  },
};


export const InputRightIcon: Story = {
  args: {
    label: "Search icon test",
    RightIcon: Search,
    placeholder: "This is a placeholder",
    error: true,
    helperText: "This is a error Test"
  },
};
