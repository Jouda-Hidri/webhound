import HomeClient from "./home-client";
import { parse } from "@/lib/gemini-parse";
import { Card } from "../types/card";

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const response = await res.json();

   const cards: Card[] = await parse(response);

  //   const cards: Card[] = response.map((item: any) => ({
  //   id: item.id,
  //   title: item.username,
  //   subtitle: item.name,
  //   description: item.email,
  //   icon: null,
  // }));

  return <HomeClient cards={cards} />;
}
