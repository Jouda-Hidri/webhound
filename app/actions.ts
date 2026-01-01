// app/actions.ts (server)
'use server';

import { parseDetails } from "@/lib/gemini-parse";

export async function parseCardDetails(items : any, id : string) {
  return parseDetails(items,id)
}
