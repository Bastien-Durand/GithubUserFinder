import { useState } from "react";

export const GithubUserSearch = (props: {
  fetchUser: (value: string) => void;
}) => {
  const [githubUser, setGithubUser] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
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
