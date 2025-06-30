"use client";

import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { ArrowRight, Bot } from "lucide-react";
import Markdown from "react-markdown";
import { useChat } from "@ai-sdk/react";
import { toast } from "sonner";
import remarkGfm from "remark-gfm";

export default function ChatClient() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/gemini",
      onError: (err) => {
        toast.error(err.message);
      },
    });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.target.form;
      if (form) {
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
          submitButton.click();
        }
      }
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
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2
                ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role !== "user" && (
                  <div className=" flex rounded-[50%] bg-[#1e2939] text-white min-w-[40px] h-[40px] justify-center items-center">
                    <Bot className="translate-y-[-1px]" />
                  </div>
                )}
                <div
                  className={`flex-col p-2 rounded-lg text-white max-w-[calc(100%-48px)] text-justify overflow-hidden ${
                    msg.role === "user" ? "bg-blue-500" : ""
                  }`}
                >
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return inline ? (
                          <code {...props} className="bg-gray-200 p-2 rounded">
                            {children}
                          </code>
                        ) : (
                          <pre {...props} className="bg-gray-200 p-2 rounded">
                            <code>{children}</code>
                          </pre>
                        );
                      },
                      ul: ({ children }) => (
                        <ul className="list-disc ml-4">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <li className="list-decimal ml-4">{children}</li>
                      ),
                    }}
                  >
                    {msg.content}
                  </Markdown>
                </div>
              </div>
            ))
          ) : (
            <div>No messages yet!</div>
          )}
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
            onChange={handleInputChange}
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
