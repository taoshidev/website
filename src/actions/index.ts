export async function getLeaderboard() {
  try {
    const res = await fetch("http://34.65.161.184:48888/weights", {
      cache: "no-store",
    });

    const data = await res.json();
    return JSON.parse(data);
  } catch (error) {}

  return [];
}
