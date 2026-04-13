import {
  createNewUser,
  findUserByEmail,
  findUserByUsername,
} from "./auth.repository.js";
import AppError from "../../utils/AppError.js";
import { generateToken } from "../../utils/Jwt.js";
import { userResponseDto } from "./user.response.dto.js";

export const createUserService = async (username, email, password) => {
  const existingEmail = await findUserByEmail(email);
  if (existingEmail) {
    throw new AppError("User already exists with this email", 400);
  }

  const existingUsername = await findUserByUsername(username);
  if (existingUsername) {
    throw new AppError("User already exists with this username", 400);
  }

  const newUser = await createNewUser(username, email, password);

  const token = await generateToken(newUser._id);

  return {
    user: userResponseDto(newUser),
    token,
  };
};

export const loginUserService = async (email, password) => {
  const existingUser = await findUserByEmail(email);

  if (!existingUser) {
    throw new AppError("Invalid creadentials", 400);
  }

  const isPasswordCorrect = await existingUser.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new AppError("Invalid creadentials", 400);
  }

  const token = await generateToken(existingUser._id);

  return {
    user: userResponseDto(existingUser),
    token,
  };
};
