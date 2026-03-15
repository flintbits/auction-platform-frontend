import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Input/Dropdown",
  component: Dropdown,
  args: {
    // orientation: "horizontal",
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownDefault: Story = {
  args: {
    options: [
      { label: "Organizer", value: "ORGANIZER" },
      { label: "Team Admin", value: "TEAM_ADMIN" }
    ],
  },
  render: (args) => (
    <div >
      <Dropdown options={args.options} />
    </div>
  ),
};
