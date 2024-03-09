import { getLeaderboard } from "@/actions";

import { Competition } from "@/components/Competition";

export default async function Page() {
  const data = await getLeaderboard();
  console.log(data);
  return <Competition leaderboard={data} />;
}
