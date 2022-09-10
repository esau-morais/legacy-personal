import { getRepos } from "@/lib/github";

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler() {
  const response = await getRepos();

  const repos = await response.json();


  return new Response(
    JSON.stringify({
      repos
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  );
}
