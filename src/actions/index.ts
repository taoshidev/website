export async function getLeaderboard() {
  const res = await fetch("http://34.65.161.184:48888/weights");
  const data = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return JSON.parse(data);
}