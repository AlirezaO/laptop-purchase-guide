"use server";

export async function submitMessage(messages) {
  // In a real app, you'd send this to an AI model.
  // Here, we'll just echo it back.
  const userMessage = messages[messages.length - 1];
  const aiResponse = `AI says: ${userMessage.content}`;

  return {
    role: "assistant",
    content: aiResponse,
  };
}
