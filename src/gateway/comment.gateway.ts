import { Request, Response } from "express";
import {
  createCommentController,
  getCommentController,
} from "../controller/comment.controller";
import { ResponseHandler } from "../utils/response";

export async function createComment(req: Request, res: Response) {
  try {
    const comments = await createCommentController(req.body);
    return ResponseHandler.created(res, comments);
  } catch (error: any) {
    return ResponseHandler.error(res, (error as Error).message, 400);
  }
}

export async function getCommentsOnBook(req: Request, res: Response) {
  try {
    const { bookId } = req.params;
    const comments = await getCommentController(bookId);
    return ResponseHandler.success(res, comments);
  } catch (error) {
    return ResponseHandler.error(res, (error as Error).message, 400);
  }
}
