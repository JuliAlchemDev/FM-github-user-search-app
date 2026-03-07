import type {Meta, StoryObj} from "@storybook/react-vite";
import ProfileLinks from "./ProfileLinks";

const meta = {
    title: "Components/ProfileCard/ProfileLinks",
    component: ProfileLinks,
    tags: ["autodocs"],
    parameters: {layout: "padded"},
} satisfies Meta<typeof ProfileLinks>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { location: "San Francisco, CA" , blog: "https://github.blog", twitter_username: null, company: "@github" }
 };
 export const NullValues: Story = {
    args: { location: null, blog: null, twitter_username: null, company: null }
 };
export const DarkTheme: Story = {
    parameters: {theme: 'dark'},
    args: { location: "San Francisco, CA" , blog: "https://github.blog", twitter_username: null, company: "@github" }
};