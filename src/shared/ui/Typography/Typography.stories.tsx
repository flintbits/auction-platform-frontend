import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Text/Heading',
  component: Typography,
  argTypes: {

  }
}

export default meta

type Story = StoryObj<typeof meta>;

export const HeadingH1_Bold: Story = {
  args: {
    as: "h1",
    children: "Bold Heading h1",
    weight: "bold"
  }
}

export const HeadingH1_Medium: Story = {
  args: {
    as: "h1",
    children: "Medium Heading h1",
    weight: "medium"
  }
}

export const HeadingH1_Normal: Story = {
  args: {
    as: "h1",
    children: "Normal Heading h1",
    weight: "normal"
  }
}

export const HeadingH1_Light: Story = {
  args: {
    as: "h1",
    children: "Light Heading h1",
    weight: "light"
  }
}

