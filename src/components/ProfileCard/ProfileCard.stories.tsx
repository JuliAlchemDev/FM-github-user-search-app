import type { Meta, StoryObj } from "@storybook/react-vite";
import ProfileCard from "./ProfileCard";
import { mockUser } from "../../mocks/github.mock";

const meta = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: mockUser,
  },
};
export const DarkTheme: Story = {
  parameters: { theme: "dark" },
  args: {
    user: mockUser,
  },
};
