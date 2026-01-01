"use client"

import { Card } from "./Card";
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
      .then(data => aiFlag ? parseCardDetails(data, id) : data) // TODO ?id=$id for default flow
      .then(parsedData => setData(parsedData));

  }, [])

  if (!data) return null

  return (
    <Card data={data} />
  );
}
