import HomeClient from "./home-client";
import { Coin } from "./types/coin";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const coins: Coin[] = await res.json();

  return <HomeClient coins={coins} />;
}
