import { Request, Response, NextFunction } from "express";
import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

function requestLogger(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();

  logger.info(
    {
      method: req.method,
      path: req.path,
    },
    "Incoming request"
  );

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    logger.info(
      {
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
      },
      "Request completed"
    );
  });

  next();
}

export default requestLogger;
