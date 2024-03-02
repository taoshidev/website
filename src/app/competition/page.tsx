import { getLeaderboard } from "@/actions";

import { Competition } from "@/components/Competition";

export default async function Page() {
  const data = await getLeaderboard();

  return <Competition leaderboard={data} />;
}
