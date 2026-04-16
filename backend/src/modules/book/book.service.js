import AppError from "../../utils/AppError.js";
import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../../utils/cloudinary.helper.js";
import {
  countBooks,
  createBook,
  deleteBook,
  findAllBooksWithPagination,
  findBookById,
  findBooksByUserId,
} from "./book.repository.js";

export const createBookService = async (
  title,
  caption,
  rating,
  image,
  userId,
) => {
  const cloudinaryResponse = await uploadToCloudinary(image);
  const imageUrl = cloudinaryResponse.secure_url;

  const createdBook = await createBook(
    title,
    caption,
    rating,
    imageUrl,
    userId,
  );

  return createdBook;
};

export const findAllBooksWithPaginationService = async (page, limit, skip) => {
  const allBooks = await findAllBooksWithPagination(page, limit, skip);
  return allBooks;
};

export const getNumOfBooksCountService = async () => {
  const numOfBooks = await countBooks();
  return numOfBooks;
};

export const deleteBookService = async (bookId, userId) => {
  const book = await findBookById(bookId);
  if (!book) {
    throw new AppError("Book not found", 404);
  }

  if (book.user.toString() !== userId) {
    throw new AppError("You are not authorized to perform this action.", 401);
  }

  if (book.image && book.image.includes("cloudinary")) {
    await deleteFromCloudinary(book.image);
  }

  await deleteBook(userId);
};

export const getUserBookRecommendationService = async (userId) => {
  const books = await findBooksByUserId(userId);
  return books;
};
