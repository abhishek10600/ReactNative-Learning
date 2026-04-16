import Book from "./book.model.js";

export const findBookById = async (bookId) => {
  const book = await Book.findById(bookId);
  return book;
};

export const createBook = async (title, caption, rating, imageUrl, userId) => {
  const book = await Book.create({
    title,
    caption,
    rating,
    image: imageUrl,
    user: userId,
  });

  return book;
};

export const findAllBooks = async () => {
  const books = await Book.find().sort({ createdAy: -1 });
  return books;
};

export const findAllBooksWithPagination = async (page, limit, skip) => {
  const books = await Book.find()
    .sort({ createdAy: -1 })
    .skip(skip)
    .limit(limit)
    .populate("user", "username profileImage");
  return books;
};

export const findBooksByUserId = async (userId) => {
  const books = await Book.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });

  return books;
};

export const countBooks = async () => {
  const numOfBooks = await Book.countDocuments();
  return numOfBooks;
};

export const deleteBook = async (bookId) => {
  await Book.findByIdAndDelete(bookId);
};
