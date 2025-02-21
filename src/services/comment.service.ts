import mongoose from "mongoose";
import { IComment } from "../types/comment.interface";
import commentModel from "../model/comment.model";
import { CreateCommentSchema } from "../schema/comment.schema";

export async function createCommentService(
  commentData: CreateCommentSchema["body"]
): Promise<IComment> {
  return commentModel.create(commentData);
}

export async function getCommentService(
  bookId: mongoose.Types.ObjectId
): Promise<IComment[]> {
  return commentModel.find({ bookId: bookId }).sort({ createdAt: -1 });
}
