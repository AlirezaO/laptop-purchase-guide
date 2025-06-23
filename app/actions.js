"use server";
import { GoogleGenAI } from "@google/genai";

export async function submitMessage(messages) {
  console.log("HERE!");
  const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
  const userMessage = messages[messages.length - 1];
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${userMessage.content}`,
  });
  console.log("HERE2: ");
  return {
    role: "assistant",
    content: response.text,
  };
}
