import { createUserService, loginUserService } from "./auth.service.js";
import {
  loginUserRequestDto,
  registerUserRequestDto,
} from "./user.request.dto.js";

export const registerController = async (req, res, next) => {
  try {
    const { username, email, password } = registerUserRequestDto(req.body);

    const result = await createUserService(username, email, password);

    return res.status(200).json({
      success: true,
      data: result,
      message: "Account created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = loginUserRequestDto(req.body);

    const result = await loginUserService(email, password);

    return res.status(200).json({
      success: true,
      dat: result,
      message: "User logged in successfully",
    });
  } catch (error) {
    next(error);
  }
};
