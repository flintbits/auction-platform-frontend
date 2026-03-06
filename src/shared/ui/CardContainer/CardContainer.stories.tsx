import type { Meta, StoryObj } from "@storybook/react";
import CardContainer from "./CardContainer";

const meta: Meta<typeof CardContainer> = {
  title: "Card/Container",
  component: CardContainer,
  // argTypes: {
  //   as: {
  //     control: { type: "select" },
  //     options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
  //   },
  //   weight: {
  //     control: { type: "radio" },
  //     options: ["light", "normal", "medium", "bold"],
  //   },
  //   size: {
  //     control: { type: "radio" },
  //     options: ["text-base", "text-md", "text-sm", "text-xs"],
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

//Header Examples
export const cardContainerBasic: Story = {
  args: {
    children: <div>
      <h1>Helloo</h1>
      <h1>Helloo</h1>
      <h1>Helloo</h1>
    </div>
  },
};
