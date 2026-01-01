"use client"

import { useApiUrl } from "@/app/context/ApiUrlContext"
import { useAi } from "@/app/context/AiFlagContext"

type Props = {
    data: Record<string, unknown>,
}

export function CardComponent({data}: Props) {
    const {apiUrl} =useApiUrl()
    const {aiFlag} =useAi()
    return <pre style={{ fontFamily: "monospace", fontSize: "14px" }}>
      {JSON.stringify(data, null, 2)}
      <br/>
      ---<br/>
      {apiUrl}
    </pre>
}