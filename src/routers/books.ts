import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllbooks,
  getBookByID,
} from "../gateway/book.gateway";

const booksRouter = Router();

booksRouter.get("/book", getAllbooks);

booksRouter.get("/book/:id", getBookByID);

booksRouter.post("/book", createBook);

booksRouter.delete("/book/:id", deleteBook);

export default booksRouter;
