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
You are an AI that normalizes arbitrary JSON objects into a UI-friendly array of cards.

Instructions:
- Return only valid JSON.
- Do NOT include code fences, explanations, or any extra text.
- Output must be an array of objects.
- Each object must have the following fields:
  - "id" (string)
  - "title" (string)
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
