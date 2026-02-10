export interface GitHubUser {
  avatar_url: string;
  name: string;
  bio?: string;
  company?: string;
  email?: string;
  followers: number;
  location?: string;
  public_gists: number;
  public_repos: number;
  user_view_type?: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  homepage: string;
  watchers: number;
  id: number;
}
