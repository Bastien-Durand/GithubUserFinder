import { useState } from "react";
import "./App.css";
import { GithubUserSearch } from "./components/GithubUserSearchForm";

function App() {
  const [githubData, setGithubData] = useState();

  const getData = async (username: string) => {
    const url = `https://api.github.com/users/${username}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchUser = (username: string) => {
    console.log(username);
    getData(username);
  };

  return (
    <>
      <h1>Github User Finder</h1>
      <div>
        <GithubUserSearch fetchUser={fetchUser} />
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
 - Build GithubUserSearch.tsx component & display in App.tsx
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
