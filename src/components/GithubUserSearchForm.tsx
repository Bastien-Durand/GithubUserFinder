import { useState } from "react";
import styles from "./GithubUserSearch.module.css";

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
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={githubUser}
          onChange={handleChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </div>
    </form>
  );
};
