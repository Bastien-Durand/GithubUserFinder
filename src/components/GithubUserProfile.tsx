export const GithubUserProfile = (props) => {
  console.log(props.githubData);
  if (!props.githubData) {
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
  } = props.githubData;

  //   if(name.length == 0) {
  //     return <div>user info not found</div>
  //   }

  return (
    <div>
      <div>
        {" "}
        {name && (
          <div>
            <h2>{name}'s Profile</h2>
            {user_view_type && (
              <p>
                <strong>Profile type: </strong>
                {user_view_type}
              </p>
            )}
            {avatar_url && (
              <img
                src={avatar_url}
                alt="avatar url"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}
            {bio && (
              <p>
                <strong>Bio: </strong>
                {bio}
              </p>
            )}
            {company && (
              <p>
                <strong>Company: </strong>
                {company}
              </p>
            )}
            {email && <p>{email}</p>}
            {followers && (
              <p>
                <strong>Followers: </strong>
                {followers}
              </p>
            )}
            {location && (
              <p>
                <strong>Location: </strong> {location}
              </p>
            )}
            {public_gists && (
              <p>
                <strong>Public Gists: </strong>
                {public_gists}
              </p>
            )}
            {public_repos && (
              <p>
                <strong>Public Repos: </strong>
                {public_repos}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
