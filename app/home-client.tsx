"use client";

import { useState } from "react";
import CardComponent from "../components/Card";
import FilterInput from "../components/FilterInput";
import { Card } from "../types/card";

export default function HomeClient({ cards }: { cards: Card[] }) {
  const [filter, setFilter] = useState("");

  const filteredCards = cards.filter((card) => {
    const q = filter.toLowerCase();
    return (
        (card.title?.toLowerCase().includes(q) ?? false) ||
        (card.subtitle?.toLowerCase().includes(q) ?? false) ||
        (card.description?.toLowerCase().includes(q) ?? false)
    );
  });

  return (
    <div>
      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
      </div>

      <main className="grid">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <CardComponent key={card.id} card={card} />
          ))
        ) : (
          <p>No matching cards</p>
        )}
      </main>
    </div>
  );
}
