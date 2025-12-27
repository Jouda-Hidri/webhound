"use client";

import { useState } from "react";
import CoinCard from "../components/CoinCard";
import FilterInput from "../components/FilterInput";

import Spinner from "../components/Spinner";
import { Coin } from "./page";

export default function HomeClient({ coins }: { coins: Coin[] }) {
  const [filter, setFilter] = useState("");

  const filteredCoins = coins.filter((coin) => {
    const q = filter.toLowerCase();
    return (
      coin.username.toLowerCase().includes(q) ||
      coin.name.toLowerCase().includes(q) ||
      coin.email.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <h1>🚀 Webhound</h1>

      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
      </div>

      <main className="grid">
        {filteredCoins.length > 0 ? (
          filteredCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))
        ) : (
          <p>No matching cards</p>
        )}
      </main>
    </div>
  );
}
