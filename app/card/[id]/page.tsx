import { notFound } from "next/navigation";
import { Card } from "./Card";

interface CardPageProps {
  params: Promise<{ id: string}>;
}

export default async function CoinDetailsPage(props: CardPageProps) {
  const params = await props.params;
  const id = params.id;
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(`${API_URL}?id=${id}`, { cache: "no-store" });

  if (!res.ok) notFound();

  const data: any[] = await res.json();
  const response = data.find((item) => String(item.id) === id);

  if (!response) notFound();

  return (
    <Card data={response}/>
  );
}
