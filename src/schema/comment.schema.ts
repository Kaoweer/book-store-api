import { object, string, TypeOf } from "zod";

export const createCommentSchema = object({
  body: object({
    userIp: string({ required_error: "userIp is required" }).ip(),
    comment: string({ required_error: "comment is required" }).min(1).max(100),
  }).required(),
});

export type CreateCommentSchema = TypeOf<typeof createCommentSchema>;
