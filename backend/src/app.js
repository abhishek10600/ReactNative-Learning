import express from "express";

export const app = express();

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Api is working",
  });
});

import authRouter from "./modules/auth/auth.route.js";

app.use("/api/v1/auth", authRouter);
