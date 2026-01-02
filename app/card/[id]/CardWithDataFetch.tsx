"use client"

import { CardComponent } from "./Card";
import { Card } from "@/types/card";
import { useApiUrl } from "@/app/context/ApiUrlContext";
import { useAi } from "@/app/context/AiFlagContext";
import { useEffect, useState } from "react";
import { parseCardDetails } from '../../actions';
import { redirect } from 'next/navigation';

export function CardWithDataFetch({ id }: { id: string }) {
  const { apiUrl } = useApiUrl()
  const { aiFlag } = useAi()
  const [data, setData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${apiUrl}`, { cache: "no-store" });
      return await res.json();
    }

fetchData()
  .then(data =>
    aiFlag
      ? parseCardDetails(data, id)
      : (data as Card[]).find(d => d.id === id)
  )
  .then(parsedData => {
    if (!parsedData) {
      throw new Error('parseCardDetails failed');
    }
    setData(parsedData);
  })
  .catch(err => {
    console.error(err);
    redirect('/server-error');
    setData(null);
  });


  }, [])

  if (!data) return null

  return (
    <CardComponent data={data} />
  );
}
