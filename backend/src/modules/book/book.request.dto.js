import AppError from "../../utils/AppError.js";

export const bookRequestDto = (body) => {
  const { title, caption, rating } = body;

  if (!title) {
    throw new AppError("Title is required", 400);
  }

  if (!caption) {
    throw new AppError("Rating is required", 400);
  }

  if (!ratring) {
    throw new AppError("Rating is required", 400);
  }

  return {
    title: title.trim(),
    caption: caption.trim(),
    rating,
  };
};
