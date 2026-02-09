import { useState } from "react";
import "./App.css";
import { GithubUserSearch } from "./components/GithubUserSearchForm";
import { GithubUserProfile } from "./components/GithubUserProfile";
import { GithubUserRepos } from "./components/GithubUserRepos";

function App() {
  const [githubData, setGithubData] = useState();
  const [githubRepos, setGithubRepos] = useState();

  const getProfileData = async (username: string) => {
    const profileUrl = `https://api.github.com/users/${username}`;
    try {
      const profileDataResponse = await fetch(profileUrl);
      if (!profileDataResponse.ok) {
        throw new Error(
          `Profile Data Response status: ${profileDataResponse.status}`,
        );
      }

      const profileDataResult = await profileDataResponse.json();
      console.log(profileDataResult);
      setGithubData(profileDataResult);
      if (username) {
        const repoUrl = `https://api.github.com/users/${username}/repos`;
        try {
          const repoResponse = await fetch(repoUrl);
          if (!repoResponse.ok) {
            throw new Error(`Repo Response status: ${repoResponse.status}`);
          }

          const repoResult = await repoResponse.json();
          console.log(repoResult);
          setGithubRepos(repoResult);
        } catch (error) {
          console.error(error.message);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchUser = (username: string) => {
    console.log(username);
    getProfileData(username);
  };

  return (
    <>
      <h1>Github User Finder</h1>
      <div>
        <GithubUserSearch fetchUser={fetchUser} />
        <GithubUserProfile githubData={githubData} />
        {githubRepos && <GithubUserRepos githubRepos={githubRepos} />}
      </div>
    </>
  );
}

export default App;
