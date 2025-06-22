import { z } from "zod";

export const createStartupSchema = ({ selectFields }) =>
  z.object({
    name: z
      .string()
      .min(1, {
        message: "Your startup must have a name!",
      })
      .max(50, {
        message: "Name must be less than 50 characters.",
      }),
    description: z.string().min(1).max(150),
    image: z
      //Rest of validations done via react dropzone
      .instanceof(File)
      .refine((file) => file.size !== 0, "Please upload an image"),
    category: z.enum(selectFields, {
      errorMap: () => ({ message: "Please select a category" }),
    }),
  });
