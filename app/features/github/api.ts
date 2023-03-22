export const getGithubUser = async (username?: string) => {
  const res = await fetch(`https://api.github.com/users/${username}`)

  const { login, avatar_url, company } = await res.json()

  return {
    user: { login, avatar_url, company }
  }
}
