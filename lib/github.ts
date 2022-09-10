const GITHUB_ENDPOINT = `https://api.github.com/users/esau-morais/repos`;
const github_token = process.env.GITHUB_TOKEN;

export const getRepos = async () => {
  return fetch(GITHUB_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${github_token}`
    }
  })
};