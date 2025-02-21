import express from "express";
import config from "config";
import connect from "./utils/connect";
import loggerUtil from "./utils/logger";
import booksRouter from "./routers/books";
import cors from "cors";
import requestLogger from "./middlewears/logger.middleware";
import commentRouter from "./routers/comment";

const app = express();
const port = config.get("port");

app.use(cors());

app.use(requestLogger);

app.use(express.json());

app.use(booksRouter);
app.use(commentRouter);

app.listen(port, async () => {
  loggerUtil.info(`App is running at http://localhost:${port}`);
  await connect();
});
