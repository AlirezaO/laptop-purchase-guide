import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1];

    // In a real app, you'd send this to an AI model.
    // Here, we'll just echo it back.
    const aiResponse = `AI says: ${userMessage.content}`;

    return NextResponse.json({
      role: "assistant",
      content: aiResponse,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
