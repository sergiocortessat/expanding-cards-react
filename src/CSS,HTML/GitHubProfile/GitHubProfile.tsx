import React from "react";
import "./style.css";

const GitHubProfile = () => {
  const [userOnChange, setUserOnChange] = React.useState("");
  const [user, setUser] = React.useState("");
  const [gitUserData, setGitUserData] = React.useState<any>({});
  const [gitUserRepo, setGitUserRepo] = React.useState<any>({});
  const [gitUserError, setGitUserError] = React.useState(false);
  const APIURL = "https://api.github.com/users/";

  // create a useCallback async function
  const getGitUser = React.useCallback(
    async (userName) => {
      const user = await fetch(APIURL + userName);
      const repos = await fetch(APIURL + userName + "/repos?sort=created");
      const userData = await user.json();
      const reposData = await repos.json();
      if (userData.message) {
        setGitUserError(true);
      } else {
        setGitUserData(userData);
        setGitUserRepo(reposData);
        setGitUserError(false);
      }
    },
    [APIURL]
  );
  // create a useEffect to call the getGitUser function
  React.useEffect(() => {
    if (user) {
      getGitUser(user);
    }
  }, [user, getGitUser]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setUser(userOnChange);
  };
  console.log(gitUserRepo);
  return (
    <>
      <form className="user-form" id="form" onSubmit={(e: any) => onSubmit(e)}>
        <input
          type="text"
          id="search"
          placeholder="Search a Github"
          onChange={(e) => setUserOnChange(e.target.value)}
        />
      </form>

      {!gitUserError && user && (
        <main id="main">
          <div className="card">
            <div>
              <img src={gitUserData.avatar_url} alt="" className="avatar" />
            </div>
            <div className="user-info">
              <h2>{gitUserData.name || gitUserData.login}</h2>
              <p> {gitUserData.bio ? `${gitUserData.bio}` : ""}</p>

              <ul>
                <li>
                  {gitUserData.followers} <strong>Followers</strong>
                </li>
                <li>
                  {gitUserData.following} <strong>Following</strong>
                </li>
                <li>
                  {gitUserData.public_repos} <strong>Repos</strong>
                </li>
              </ul>

              <div id="repos">
                {gitUserRepo.length > 0 &&
                  gitUserRepo.slice(0, 5).map((repo: any) => (
                    <a href={repo.html_url} className="repo" key={repo.id} rel="noreferrer" target='_blank'>
                      {repo.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </main>
      )}
      {!gitUserError && !user && <h1>Search a user</h1>}

      {gitUserError && <h1>User not found</h1>}
    </>
  );
};

export default GitHubProfile;
