import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ILoaderData } from "~/features/github";
import { getGithubUser, GithubContainer } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    id: params.username,
    user: getGithubUser(params.username)
  }
}

export function ErrorBoundary() {
  return <h3>Error 💣</h3>
}

export default function () {
  const { user } = useLoaderData<ILoaderData>()
  console.log(user)
  return <GithubContainer user={user} />
}
