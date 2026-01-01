"use client";

import { useEffect, useState } from "react";
import HomeClient from "./home-client";
import { Card } from "../types/card";
import Spinner from "../components/Spinner"
import { useApiUrl } from "./context/ApiUrlContext";
import { useAi } from "./context/AiFlagContext";


export default function apiUrlInput() {
  const {apiUrl, setApiUrl} = useApiUrl()
  const {aiFlag, setUseAi} = useAi()
  const [cards, setCards] = useState<Card[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ⛔ stop page reload
    if (!apiUrl) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/fetch?url=${encodeURIComponent(apiUrl)}&ai=${aiFlag}`
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to fetch");
      }

      const data: Card[] = await res.json();
      setCards(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Auto-fetch on first load
  useEffect(() => {
    handleSubmit(new Event("submit") as any);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="controls">
          <input
            type="checkbox"
            checked={aiFlag}
            onChange={(e) => setUseAi(e.target.checked)}
          />
          Use AI
        </label>
        <input
          type="url"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          placeholder="Enter API apiUrl"
          className="top-controls"
        />
      </form>

      {loading && <Spinner color='white' />}
      {error && <p className="text-red-500">{error}</p>}

      {cards && <HomeClient cards={cards} aiFlag={aiFlag}/>}
    </div>
  );
}
