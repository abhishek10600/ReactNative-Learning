import AppError from "../../utils/AppError.js";
import { bookRequestDto } from "./book.request.dto.js";
import {
  createBookService,
  findAllBooksWithPaginationService,
  getNumOfBooksCountService,
  deleteBookService,
  getUserBookRecommendationService,
} from "./book.service.js";

export const createBookController = async (req, res, next) => {
  try {
    const { title, caption, rating } = bookRequestDto(req.body);
    if (!image) {
      throw new AppError("Please provide an image", 400);
    }

    const userId = req.user._id;

    const result = await createBookService(
      title,
      caption,
      rating,
      image,
      userId,
    );

    return res.status(201).json({
      success: true,
      data: result,
      message: "Book created successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getBooksController = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 2;
    const skip = (page - 1) * limit;
    const result = await findAllBooksWithPaginationService(page, limit, skip);

    const totalBooks = await getNumOfBooksCountService();

    return res.status(200).json({
      success: true,
      data: result,
      metaData: {
        currentPage: page,
        totalBooks,
        totalPages: Math.ceil(totalBooks / limit),
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getUserRecommendationController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const result = await getUserBookRecommendationService(userId);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteBookController = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const userId = req.user._id;

    await deleteBookService(bookId, userId);

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
