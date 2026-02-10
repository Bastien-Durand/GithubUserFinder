import type { GitHubUser } from "../types/GitHub";
import styles from "./GithubUserProfile.module.css";

interface Props {
  githubData?: GitHubUser;
}

export const GithubUserProfile = ({ githubData }: Props) => {
  if (!githubData) {
    return;
  }
  const {
    avatar_url,
    name,
    bio,
    company,
    email,
    followers,
    location,
    public_gists,
    public_repos,
    user_view_type,
  } = githubData;

  return (
    <div className={styles.profileCard}>
      {name && (
        <>
          <div className={styles.profileHeader}>
            {avatar_url && (
              <img src={avatar_url} alt="avatar" className={styles.avatar} />
            )}
            <div>
              <h2 className={styles.name}>{name}'s Profile</h2>
              {user_view_type && (
                <p className={styles.profileType}>
                  Profile type: {user_view_type}
                </p>
              )}
            </div>
          </div>

          {bio && <p className={styles.bio}>{bio}</p>}

          <div className={styles.statsGrid}>
            {company && (
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Company:</span>
                {company}
              </div>
            )}
            {email && (
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Email:</span>
                {email}
              </div>
            )}
            {followers !== undefined && (
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Followers:</span>
                {followers}
              </div>
            )}
            {location && (
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Location:</span>
                {location}
              </div>
            )}
            {public_gists !== undefined && (
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Public Gists:</span>
                {public_gists}
              </div>
            )}
            {public_repos !== undefined && (
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Public Repos:</span>
                {public_repos}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
