import jwt from "jsonwebtoken";
import User from "../modules/auth/auth.model.js";
import AppError from "../utils/AppError.js";
import { JWT_SECRET } from "../config/config.js";
import { findUserById } from "../modules/auth/auth.repository.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      throw new AppError("Authentication token not found, access denied.", 401);
    }

    const decoded = await jwt.verify(token, JWT_SECRET);

    const user = await findUserById(decoded.userId);
    if (!user) {
      throw new AppError("Token not valid", 404);
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Authentication Error: ", error);
    throw new AppError("Invalid token", 401);
  }
};
