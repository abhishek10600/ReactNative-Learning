import { createUserService } from "./auth.service.js";
import { registerUserRequestDto } from "./user.request.dto.js";

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

export const loginController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Login controller",
    });
  } catch (error) {
    console.log(error);
  }
};
