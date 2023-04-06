import type { Meta, StoryObj } from "@storybook/react";

import MenuListItem from "./MenuListItem";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/MenuListItem",
  component: MenuListItem,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const ListItem: Story = {
  args: {
    data: {
      slug: "example-2",
      url: "https://www.we-conect.com",
      title: "Example 2",
    },
    onNavigate: (props) => console.log(props)
  },
};
