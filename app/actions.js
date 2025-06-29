"use server";
import { GoogleGenAI } from "@google/genai";

export async function submitMessage(messages) {
  console.log("HERE!");
  const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

  // Format all messages for the AI model
  const formattedMessages = messages.map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: formattedMessages,
  });
  console.log("HERE2: ");
  return {
    role: "model",
    content: response.text,
  };
}
