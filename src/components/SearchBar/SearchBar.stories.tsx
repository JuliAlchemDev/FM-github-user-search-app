import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, userEvent, waitFor, expect } from "storybook/test";
import SearchBar from "./SearchBar";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {};
export const LightThemeWithError: Story = {
  args: { error: "No results" },
   play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        
        await expect(canvas.getByText('No results')).toBeInTheDocument();
    }
};
export const DarkTheme: Story = {
  parameters: { theme: "dark" },
};
export const DarkThemeWithError: Story = {
  parameters: { theme: "dark" },
  args: { error: "No results" },
   play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        
        await expect(canvas.getByText('No results')).toBeInTheDocument();
    }
};

export const WithSearch: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByRole("textbox"), "octocat");

    await userEvent.click(canvas.getByRole("button", { name: /search/i }));
  },
};
