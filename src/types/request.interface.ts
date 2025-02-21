import { Request } from "express";
import { IBook } from "./book.interface";
import { IComment } from "./comment.interface";

export interface BookRequest extends Request {
  body: IBook;
}

export interface CommentRequest extends Request {
  body: IComment;
}
