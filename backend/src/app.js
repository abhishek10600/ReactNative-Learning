import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Api is working",
  });
});

import authRouter from "./modules/auth/auth.route.js";
import bookRouter from "./modules/book/book.route.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/book", bookRouter);

app.use(errorMiddleware);
