import type { Meta, StoryObj } from "@storybook/react";

import MenuList from "./MenuList";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/MenuList",
  component: MenuList,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const List: Story = {
  args: {
    items: [
      {
        slug: "example-1",
        url: "https://www.we-conect.com",
        title: "Example 1",
      },
      {
        slug: "example-2",
        url: "https://www.we-conect.com",
        title: "Example 2",
        children: [
          {
            slug: "example-4",
            url: "https://www.we-conect.com",
            title: "Example 4",
          },
        ],
      },
      {
        slug: "example-3",
        url: "https://www.we-conect.com",
        title: "Example 3",
      },
    ],
  },
};
