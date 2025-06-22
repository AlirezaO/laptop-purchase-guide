"use server";

import { signUpSchema } from "@/utils/zodValidations/signUp";

export async function submitEmail(values) {
  const safeResult = signUpSchema.safeParse(values);
  if (!safeResult.success) {
    return { statu: "error", message: safeResult.error.message };
  }

  return {
    status: "success",
    message: "Email submitted successfully!",
  };
}
