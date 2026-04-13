export const userResponseDto = (user) => {
  return {
    id: user._id,
    username: user.username,
    email: user.email,
    profileImage: user.profileImage,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
