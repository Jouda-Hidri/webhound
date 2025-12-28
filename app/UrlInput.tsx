"use client";

import { useEffect, useState } from "react";
import HomeClient from "./home-client";
import { Card } from "../types/card";

const DEFAULT_URL = "https://jsonplaceholder.typicode.com/users";

export default function UrlInput() {
  const [url, setUrl] = useState(DEFAULT_URL);
  const [cards, setCards] = useState<Card[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ⛔ stop page reload
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/fetch?url=${encodeURIComponent(url)}`
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
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter API URL"
          className="top-controls"
        />
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {cards && <HomeClient cards={cards} />}
    </div>
  );
}
