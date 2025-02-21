import { object, string, TypeOf } from "zod";

export const createBookSchema = object({
  body: object({
    name: string({
      required_error: "Book name is required",
    })
      .min(2)
      .max(100),
    description: string().min(10).max(500).optional(),
    image: string({
      required_error: "Book image url is required",
    }).url("Invalid image URL format"),
  }).required({}),
});

export type CreateBookSchema = TypeOf<typeof createBookSchema>;
