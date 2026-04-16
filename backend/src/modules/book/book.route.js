import express from "express";
import {
  createBookController,
  deleteBookController,
  getBooksController,
  getUserRecommendationController,
} from "./book.controller.js";
import { protectRoute } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(protectRoute, createBookController);
router.route("/").get(protectRoute, getBooksController);
router.route("/:id").delete(protectRoute, deleteBookController);
router.route("/user").get(protectRoute, getUserRecommendationController);

export default router;
