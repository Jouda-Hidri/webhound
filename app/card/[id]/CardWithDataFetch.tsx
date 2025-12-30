"use client"

import { Card } from "./Card";
import { useApiUrl } from "@/app/context/ApiUrlContext";
import { useEffect, useState } from "react";



export  function CardWithDataFetch({id} : {id:string}) { 
  const { apiUrl} = useApiUrl()
  const [data, setData ] = useState<Record<string,unknown> |null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${apiUrl}?id=${id}`, { cache: "no-store" });
      return await res.json();
    }
    fetchData().then((data)=>setData(data))
  }, [])

  if (!data) return null

  return (
    <Card data={data}/>
  );
}
