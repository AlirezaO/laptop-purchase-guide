import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.VITE_GEMINI_API_KEY,
});

export const runtime = "edge";

const buildGoogleGenAIPromp = (messages) => [];

export async function POST(request) {
  const { message } = await request.json();
}
