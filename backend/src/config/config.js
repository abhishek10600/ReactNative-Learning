import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

export const NODE_ENVIRONMENT = process.env.NODE_ENVIRONMENT;
export const PORT = process.env.port || 4001;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_TOKEN_EXPIRY = process.env.JWT_TOKEN_EXPIRY;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDIANRY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLODUNAIRY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
