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

/**
 Feature 1: Search
 User can type a GitHub username
 Submit the search
 Fetch data from GitHub API

 BUILD:
 - Build GithubUserSearchForm.tsx component & display in App.tsx
 - Create form html that has onSubmit
 - Input field + submit button
 - HandleSubmit function
 - State for setGithubUser()
 - Pass the state up to app.tsx
 - fetch(githubUser) from github API - no key needed

GET https://api.github.com/users/{username}

GET https://api.github.com/users/{username}/repos


Feature 2: User Profile Display
 Show the user's information
 Display relevant stats
 Make it visually clear

 BUILD:
 - console.log returned data to verify type and structure
 - Build GithubUserProfileDisplay & Render in App.tsx
 - Pull out only whats needed {} Practice Destructuring!
 - Display Relevant data


Feature 3: Repository List
 Show the user's public repositories
 Display useful information about each repo
 Make repos easy to scan

 - Check Repo structure and data, display in new component and import if busy


Feature 4: User Experience
 Handle loading states
 Handle errors (user not found)
 Clean, readable UI

 */
