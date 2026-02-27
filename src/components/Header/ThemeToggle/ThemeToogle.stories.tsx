import type { Meta, StoryObj } from "@storybook/react-vite";
import ThemeToggle from "./ThemeToogle";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: { defaultDark: false },
};

export const DarkTheme: Story = {
  parameters: { theme: 'dark' },
  args: { defaultDark: true },
};