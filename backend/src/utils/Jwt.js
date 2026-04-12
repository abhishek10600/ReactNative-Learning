import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_TOKEN_EXPIRY } from "../config/config.js";

export const generateToken = async (userId) => {
  console.log({ userId });
  console.log({ JWT_SECRET });
  console.log({ JWT_TOKEN_EXPIRY });
  const token = await jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: JWT_TOKEN_EXPIRY,
  });

  return token;
};
