import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_TOKEN_EXPIRY } from "../config/config.js";

export const generateToken = async (userId) => {
  const token = await jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: JWT_TOKEN_EXPIRY,
  });

  return token;
};
