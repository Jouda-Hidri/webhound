import { NextRequest, NextResponse } from "next/server";
import { parse } from "@/lib/gemini-parse";
import { Card } from "@/types/card";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  const useAI = req.nextUrl.searchParams.get("ai") === "true";

  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  const res = await fetch(url);
  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }

  const response = await res.json();
  let cards: Card[];

  if (useAI) {
    // 🤖 AI parsing
    cards = await parse(response);
  } else {
    // 🧱 Default/manual parsing
    cards = response.map((item: any) => ({
      id: String(item.id),
      title: item.username,
      subtitle: item.name,
      description: item.email,
      icon: null,
    }));
  }

  return NextResponse.json(cards);
}
