import type { GitHubRepo } from "../types/GitHub";

interface Props {
  githubRepos?: GitHubRepo[];
}

export const GithubUserRepos = ({ githubRepos }: Props) => {
  if (!githubRepos || githubRepos.length === 0) {
    return <div>No repos</div>;
  }

  return (
    <div>
      {githubRepos.map((repo) => (
        <div key={repo.id || repo.name} style={{ marginBottom: "20px" }}>
          {repo.name && (
            <h2>
              <strong>Name: </strong> {repo.name}
            </h2>
          )}
          {repo.description && (
            <p>
              <strong>Description: </strong> {repo.description}
            </p>
          )}
          {repo.html_url && (
            <p>
              <strong>url: </strong>
              <a href={repo.html_url}>{repo.html_url}</a>
            </p>
          )}
          {repo.language && (
            <p>
              <strong>language: </strong> {repo.language}
            </p>
          )}
          {repo.homepage && (
            <p>
              <strong>homepage: </strong>
              <a href={repo.homepage}>{repo.homepage}</a>
            </p>
          )}
          {repo.watchers && (
            <p>
              <strong>watchers: </strong> {repo.watchers}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
