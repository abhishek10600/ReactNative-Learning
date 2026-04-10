import dotenv from "dotenv";

import { app } from "./app.js";
import { NODE_ENVIRONMENT, PORT } from "./config/config.js";
import connectDB from "./config/db.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (error) {}
};

startServer();
