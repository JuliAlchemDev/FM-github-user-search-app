import type { Meta, StoryObj } from "@storybook/react-vite";
import { within, userEvent, expect } from 'storybook/test';
import ThemeToggle from "./ThemeToggle";

const meta = {
  title: "Components/Header/ThemeToggle",
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

export const ClickToggle: Story = {
  args: { defaultDark: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await expect(canvas.getByLabelText('moon icon')).toBeInTheDocument()
    await expect(button).toHaveTextContent('Dark');
    
    await userEvent.click(button);
    
    await expect(button).toHaveTextContent('Light');
    await expect(canvas.getByLabelText('sun icon')).toBeInTheDocument()
    await expect(canvas.queryByLabelText('moon icon')).not.toBeInTheDocument()
  }
};