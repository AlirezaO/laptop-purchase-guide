"use server";

import { createStartupSchema } from "@/utils/zodValidations/createStartup";

export async function submitStartupForm(values, selectFields) {
  const safeResult = createStartupSchema({ selectFields }).safeParse(values);
  if (!safeResult.success) {
    return { statu: "error", message: safeResult.error.message };
  }

  return {
    status: "success",
    message: "Startup submitted successfully!",
  };
}
