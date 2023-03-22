import type { IUser } from "./types";

interface IGithubContainerProps {
  user: IUser
}

export function GithubContainer({ user }: IGithubContainerProps) {
  return <>
    <p>{user.login}</p>
    <p>{user.company}</p>
    <img src={user.avatar_url} alt="eu" width="100px" />
  </>
}
