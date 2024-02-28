import { getLeaderboard } from "@/actions";

import { Competition } from "@/components/Competition";

export default async function Page() {
  const data = await getLeaderboard();
  const leaderboard = [];

  for (const [id, score] of Object.entries(data)) {
    leaderboard.push({ id, score });
  }

  return <Competition leaderboard={leaderboard} />;
}
