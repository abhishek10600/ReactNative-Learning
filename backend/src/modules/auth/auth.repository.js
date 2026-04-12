import User from "./auth.model.js";

export const findUserById = async (userId) => {
  return await User.findById(userId).select("-password");
};

export const findUserByEmailOrUsername = async (email, username) => {
  return await User.findOne({
    $or: [{ email }, { username }],
  });
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

export const createNewUser = async (username, email, password) => {
  const profileImage = `https://api.dicebear.com/9.x/avataaars/svg?seed=${username}`;

  return await User.create({
    username,
    email,
    password,
    profileImage,
  });
};
