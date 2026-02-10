import type { GitHubRepo } from "../types/GitHub";
import styles from "./GithubUserRepos.module.css";

interface Props {
  githubRepos?: GitHubRepo[];
}

export const GithubUserRepos = ({ githubRepos }: Props) => {
  if (!githubRepos || githubRepos.length === 0) {
    return <div>No repos</div>;
  }

  return (
    <div className={styles.reposContainer}>
      <h2 className={styles.reposTitle}>Repositories ({githubRepos.length})</h2>

      {githubRepos.map((repo) => (
        <div key={repo.id} className={styles.repoCard}>
          {repo.name && <h3 className={styles.repoName}>{repo.name}</h3>}

          {repo.description && (
            <p className={styles.repoDescription}>{repo.description}</p>
          )}

          <div className={styles.repoMeta}>
            {repo.language && (
              <div className={styles.repoMetaItem}>
                <span className={styles.repoLabel}>Language:</span>
                {repo.language}
              </div>
            )}

            {repo.watchers !== undefined && (
              <div className={styles.repoMetaItem}>
                <span className={styles.repoLabel}>⭐ Stars:</span>
                {repo.watchers}
              </div>
            )}

            {repo.html_url && (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoLink}
              >
                View on GitHub →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
