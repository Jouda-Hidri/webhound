"use client"

import { useApiUrl } from "@/app/context/ApiUrlContext"

type Props = {
    data: Record<string, unknown>,
}

export function Card({data}: Props) {
    const {apiUrl} =useApiUrl()
    return <pre style={{ fontFamily: "monospace", fontSize: "14px" }}>
      {JSON.stringify(data, null, 2)}
      <br/>
      ---<br/>
      {apiUrl}
    </pre>
}