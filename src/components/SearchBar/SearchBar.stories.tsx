import type { Meta, StoryObj } from "@storybook/react-vite";
import SearchBar from "./SearchBar";

const meta = {
    title: "Components/SearchBar",
    component: SearchBar,
    tags: ["autodocs"],
    parameters: {layout: "centered"},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>

export const LightTheme: Story = { };
export const LightThemeWithError: Story = {
    args: {error: "No results"}
 };
export const DarkTheme: Story = {
  parameters: { theme: 'dark' },
};
export const DarkThemeWithError: Story = {
    parameters: { theme: 'dark' },
    args: {error: "No results"},
 };
