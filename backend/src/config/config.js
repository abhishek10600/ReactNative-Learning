import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

export const NODE_ENVIRONMENT = process.env.NODE_ENVIRONMENT;
export const PORT = process.env.port || 4001;
export const MONGO_URI = process.env.MONGO_URI;
