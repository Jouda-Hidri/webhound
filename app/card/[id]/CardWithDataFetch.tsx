"use client"

import { CardComponent } from "./Card";
import { Card } from "@/types/card";
import { useApiUrl } from "@/app/context/ApiUrlContext";
import { useAi } from "@/app/context/AiFlagContext";
import { useEffect, useState } from "react";
import { parseCardDetails } from '../../actions';

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
      .then(data => aiFlag ? parseCardDetails(data, id) : (data as Card[]).find(d => d.id == id)) // TODO ?id=$id for default flow
      .then(parsedData => setData(parsedData ?? null));

  }, [])

  if (!data) return null

  return (
    <CardComponent data={data} />
  );
}
