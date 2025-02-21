import { Request, Response } from "express";
import {
  createBookService,
  deleteBookService,
  getAllBooksService,
  getBookByIDService,
} from "../services/book.service";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { IBook } from "../types/book.interface";
import { CreateBookSchema } from "../schema/book.schema";

export async function getAllBooksController(): Promise<IBook[]> {
  return getAllBooksService();
}
export async function getBookByIDController(id: string): Promise<IBook | null> {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid ObjectId format");
  }
  return getBookByIDService(new ObjectId(id));
}

export async function createBookController(
  bookData: CreateBookSchema["body"]
): Promise<IBook> {
  return createBookService(bookData);
}

export async function deleteBookController(bookId: string): Promise<void> {
  return deleteBookService(new ObjectId(bookId));
}
