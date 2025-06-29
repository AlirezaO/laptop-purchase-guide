"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitMessage } from "@/app/actions";
import { Textarea } from "../ui/textarea";
import { ArrowRight, Bot } from "lucide-react";
import { toast } from "sonner";
import Markdown from "react-markdown";
import { useChat, useCompletion } from "@ai-sdk/react";

export default function ChatClient() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, reload, error } =
    useChat({ api: "/api/gemini" });
  const { completion, isLoading } = useCompletion({ api: "/api/completion" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const data = await submitMessage(newMessages);
      setMessages((prevMessages) => [...prevMessages, data]);
    } catch (error) {
      console.log("error: ", error);
      //   toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Card className="flex-grow min-w-sm max-w-4xl w-dvw bg-[#5a616a] h-full">
      <CardHeader>
        <h1 className="text-2xl font-bold">AI Chat</h1>
      </CardHeader>
      <CardContent className="flex-1 flex-col overflow-y-auto h-0 relative">
        <div className="space-y-4 relative mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-2
                ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role !== "user" && (
                <div className=" flex rounded-[50%] bg-[#1e2939] text-white min-w-[40px] h-[40px] justify-center items-center">
                  <Bot className="translate-y-[-1px]" />
                </div>
              )}
              {/* <div
                className={`p-4 rounded-lg text-white max-w-[calc(100%-48px)] text-justify ${
                  msg.role === "user" ? "bg-blue-500" : ""
                }`}
                dangerouslySetInnerHTML={{ __html:  }}
              /> */}

              <div
                className={`flex-col p-2 rounded-lg text-white max-w-[calc(100%-48px)] text-justify overflow-hidden overflow-ellipsis whitespace-nowrap ${
                  msg.role === "user" ? "bg-blue-500" : ""
                }`}
              >
                <Markdown>{msg.content}</Markdown>
              </div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter>
        <form
          onSubmit={handleSubmit}
          className="flex w-full space-x-2 bg-white p-4 rounded-md"
        >
          <Textarea
            id="chatTextArea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="resize-none"
            onKeyDown={handleKeyDown}
          />
          <Button type="submit" disabled={isLoading} className="cursor-pointer">
            <ArrowRight />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
