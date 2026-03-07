import type {Meta, StoryObj} from "@storybook/react-vite";
import ProfileStats from "./ProfileStats";


const meta = {
    title: "Components/ProfileCard/ProfileStats",
    component: ProfileStats,
    tags: ["autodocs"],
    parameters: {layout: "padded"},
} satisfies Meta<typeof ProfileStats>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { public_repos: 8, followers: 9938, following: 9 }
 };
 export const NullValues: Story = {
    args: { public_repos: null, followers: null, following: null }
 };
export const DarkTheme: Story = {
    parameters: {theme: 'dark'},
    args: { public_repos: 8, followers: 9938, following: 9 }
};