import mongoose from "mongoose";
import { IComment } from "../types/comment.interface";

const commentSchema = new mongoose.Schema(
  {
    userIp: { type: String, required: true },
    comment: { type: String, required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model<IComment>("Comment", commentSchema);
export default commentModel;
