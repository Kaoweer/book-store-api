import { timeStamp } from "console";
import { Response } from "express";

export class ResponseHandler {
  static success(res: Response, data: any) {
    return res.status(200).json({
      success: true,
      data,
      timeStamp: new Date(),
    });
  }
  static created(res: Response, data: any) {
    return res.status(200).json({
      success: true,
      data,
      message: "Data updated successfully",
      timeStamp: new Date(),
    });
  }
  static deleted(res: Response) {
    return res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      timeStamp: new Date(),
    });
  }
  static error(res: Response, message: string, statusCode: number = 500) {
    return res.status(statusCode).json({
      success: false,
      error: message,
      timeStamp: new Date(),
    });
  }
}
