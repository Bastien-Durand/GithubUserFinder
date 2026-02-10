import { useState } from "react";
import "./App.css";
import { GithubUserSearch } from "./components/GithubUserSearchForm";
import { GithubUserProfile } from "./components/GithubUserProfile";
import { GithubUserRepos } from "./components/GithubUserRepos";
import type { GitHubUser, GitHubRepo } from "./types/GitHub";

function App() {
  const [githubData, setGithubData] = useState<GitHubUser | undefined>();
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProfileData = async (username: string) => {
    setLoading(true);
    setError("");
    setGithubData(undefined);
    setGithubRepos(undefined);
    const profileUrl = `https://api.github.com/users/${username}`;
    try {
      const profileDataResponse = await fetch(profileUrl);
      if (!profileDataResponse.ok) {
        throw new Error(
          `Profile Data Response status: ${profileDataResponse.status}`,
        );
      }

      const profileDataResult = await profileDataResponse.json();
      setGithubData(profileDataResult);
      if (username) {
        const repoUrl = `https://api.github.com/users/${username}/repos`;
        try {
          const repoResponse = await fetch(repoUrl);
          if (!repoResponse.ok) {
            throw new Error(`Repo Response status: ${repoResponse.status}`);
          }

          const repoResult = await repoResponse.json();
          setGithubRepos(repoResult);
        } catch {
          setError("User not found. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    } catch {
      setError("User not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = (username: string) => {
    getProfileData(username);
  };

  return (
    <>
      <h1>Github User Finder</h1>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading user data...</p>}
        <GithubUserSearch fetchUser={fetchUser} />
        <GithubUserProfile githubData={githubData} />
        {githubRepos && <GithubUserRepos githubRepos={githubRepos} />}
      </div>
    </>
  );
}

export default App;
