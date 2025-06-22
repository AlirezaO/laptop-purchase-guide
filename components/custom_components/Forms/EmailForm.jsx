"use client";
import { signUpSchema } from "@/utils/zodValidations/signUp";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { submitEmail } from "@/app/actions/submitEmail";
import { toast } from "sonner";

export default function EmailForm() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
    },
  });

  async function handleFormSubmit(values) {
    console.log("CLICKED:!1", values);
    const result = await submitEmail(values);
    if (result.status === "success") {
      toast.success(result.message);
      // console.log("SUCCESS", result.message);
    } else {
      toast.error(result.message);
      // console.log("ERROR", result.message);
    }
    // "use server";
    // await signIn("github", { redirectTo: "/" });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>Enter your email to sign in</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
