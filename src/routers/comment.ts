import { Router } from "express";
import { createComment, getCommentsOnBook } from "../gateway/comment.gateway";

const commentRouter = Router();

commentRouter.post("/comment", createComment);
console.log("object");
commentRouter.get("/comment/:bookId", getCommentsOnBook);

export default commentRouter;
