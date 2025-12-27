// listModels.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function listModels() {
  const models = await client.listModels();
  console.log(models);
}

listModels().catch(console.error);

