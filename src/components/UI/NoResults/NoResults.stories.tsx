import type { Meta, StoryObj } from "@storybook/react-vite";
import NoResults from "./NoResults";

const meta = {
  title: "Components/UI/NoResults",
  component: NoResults,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof NoResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DarkTheme: Story = {
  parameters: { theme: "dark" },
};
