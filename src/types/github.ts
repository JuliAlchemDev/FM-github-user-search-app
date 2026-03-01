export type GitHubUser = {
  avatar_url: string;
  name: string | null;
  login: string;
  bio: string | null;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
};