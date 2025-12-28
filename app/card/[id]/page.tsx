import { Card } from "@/types/card";
import { notFound } from "next/navigation";

interface CardPageProps {
  params: Promise<{ id: string }>;
}

export default async function CoinDetailsPage(context: CardPageProps) {
  const params = await context.params;
  const id = params.id;
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(`${API_URL}?id=${id}`, { cache: "no-store" });

  if (!res.ok) notFound();

  const data: any[] = await res.json();
  const response = data.find((item) => String(item.id) === id);

  if (!response) notFound();

  return (
    <pre style={{ fontFamily: "monospace", fontSize: "14px" }}>
      {JSON.stringify(response, null, 2)}
    </pre>
  );
}
