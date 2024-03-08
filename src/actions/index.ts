export async function getLeaderboard() {
  try {
    const res = await fetch("http://34.65.161.184:48888/weights", {
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return JSON.parse(data);
  } catch (error) {}
}
