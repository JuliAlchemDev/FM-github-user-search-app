import type { Meta, StoryObj } from "@storybook/react-vite";
import Header from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  parameters: { theme: 'light' },
  args: { defaultDark: false },
};

export const DarkTheme: Story = {
  parameters: { theme: 'dark' },
  args: { defaultDark: true },
};