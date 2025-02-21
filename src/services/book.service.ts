import mongoose from "mongoose";
import BookModel from "../model/book.model";
import { IBook } from "../types/book.interface";
import { CreateBookSchema, createBookSchema } from "../schema/book.schema";

export async function getAllBooksService(): Promise<IBook[]> {
  return BookModel.find({});
}

export async function getBookByIDService(
  id: mongoose.Types.ObjectId
): Promise<IBook | null> {
  return BookModel.findOne({ _id: id });
}

export async function createBookService(
  bookData: CreateBookSchema["body"]
): Promise<IBook> {
  return BookModel.create(bookData);
}

export async function deleteBookService(bookId: mongoose.Types.ObjectId) {
  return BookModel.deleteOne({ _id: bookId });
}
