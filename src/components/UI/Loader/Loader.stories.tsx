import type { Meta, StoryObj } from "@storybook/react-vite";
import Loader from "./Loader";

const meta = {
  title: "Components/UI/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const DarkTheme: Story = {
  parameters: { theme: "dark" },
};
