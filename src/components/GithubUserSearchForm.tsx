import { useState } from "react";

export const GithubUserSearch = (props: {
  fetchUser: (value: string) => void;
}) => {
  const [githubUser, setGithubUser] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(githubUser);
    props.fetchUser(githubUser);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGithubUser(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter github username"
            value={githubUser}
            onChange={handleChange}
          />
          <button type="submit" value="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

//  BUILD:
//  - Build GithubUserSearch.tsx component & display in App.tsx DONE
//  - Create form html that has onSubmit
//  - Input field + submit button
//  - handleSubmit function
//  - handleChange function
//  - State for setGithubUser()
//  - Pass the state up to app.tsx
//  - fetch(githubUser) from github API - no key needed
