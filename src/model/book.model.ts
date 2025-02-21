import mongoose from "mongoose";
import { IBook } from "../types/book.interface";

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BookModel = mongoose.model<IBook>("Book", bookSchema);
export default BookModel;
