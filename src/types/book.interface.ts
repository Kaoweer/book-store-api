import mongoose from "mongoose";

export interface IBook {
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
