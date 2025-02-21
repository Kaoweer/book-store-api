import { IComment } from "../types/comment.interface";
import {
  createCommentService,
  getCommentService,
} from "../services/comment.service";
import { CreateCommentSchema } from "../schema/comment.schema";
import mongoose, { ObjectId } from "mongoose";

export async function createCommentController(
  commentData: CreateCommentSchema["body"]
): Promise<IComment> {
  return createCommentService(commentData);
}
export async function getCommentController(
  bookId: string
): Promise<IComment[]> {
  return getCommentService(new mongoose.Types.ObjectId(bookId));
}
