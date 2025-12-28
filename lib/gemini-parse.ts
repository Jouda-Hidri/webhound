import "server-only";  // ensures this is server-only
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Card } from "@/types/card";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = client.getGenerativeModel({
  model: "gemini-2.5-flash", // must match available AI Studio models
});

export async function parse(items: any[]): Promise<Card[]> {
const prompt = `
You are an AI that normalizes arbitrary JSON responses into a UI-friendly array of cards.

The input may be:
- A raw array
- An object containing an array under keys like "data", "items", "results", "records", or similar
- A deeply nested structure

Instructions:
- First, locate the most relevant array of objects in the input.
- If multiple arrays exist, choose the one that best represents a list of entities.
- Ignore pagination, metadata, and wrapper fields.
- Normalize each item into a card.

Output rules:
- Return ONLY valid JSON
- Do NOT include explanations, comments, or code fences
- Output MUST be a JSON array
- Each object must contain the most important data that parses into these fields:
  - "id" (string, generate if missing)
  - "title" (string, best primary label)
  - "subtitle" (string, optional)
  - "description" (string, optional)
  - "icon" (string, optional)

Input JSON:
${JSON.stringify(items)}
`;
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  // const cleaned = text.replace(/```json|```/g, "").trim();

  return JSON.parse(text) as Card[];
}
