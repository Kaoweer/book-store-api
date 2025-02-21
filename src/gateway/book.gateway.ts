import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import {
  createBookController,
  deleteBookController,
  getAllBooksController,
  getBookByIDController,
} from "../controller/book.controller";
import { ResponseHandler } from "../utils/response";

export async function getAllbooks(req: Request, res: Response) {
  const books = await getAllBooksController();
  return ResponseHandler.success(res, books);
}
export async function getBookByID(req: Request, res: Response) {
  try {
    const book = await getBookByIDController(req.params.id);
    return ResponseHandler.success(res, book);
  } catch (error: any) {
    return ResponseHandler.error(res, (error as Error).message, 400);
  }
}
export async function createBook(req: Request, res: Response) {
  try {
    const book = await createBookController(req.body);
    return ResponseHandler.created(res, book);
  } catch (error: any) {
    return ResponseHandler.error(res, (error as Error).message, 400);
  }
}
export async function deleteBook(req: Request, res: Response) {
  try {
    await deleteBookController(req.params.id);
    return ResponseHandler.deleted(res);
  } catch (error: any) {
    return ResponseHandler.error(res, (error as Error).message, 400);
  }
}
