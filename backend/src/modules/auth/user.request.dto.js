import AppError from "../../utils/AppError.js";

export const registerUserRequestDto = (body) => {
  const { username, email, password } = body;

  // Validation
  if (!username || !email || !password) {
    throw new AppError("All fields are required", 400);
  }

  if (username.length < 3) {
    throw new AppError("Username must be at least 3 characters long", 400);
  }

  if (password.length < 6) {
    throw new AppError("Password must be at least 6 characters long", 400);
  }

  // Normalize email
  const normalizedEmail = email.toLowerCase().trim();

  // Optional sanitization
  const cleanUsername = username.trim();

  return {
    username: cleanUsername,
    email: normalizedEmail,
    password,
  };
};
