import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGO_URI}`);
    console.log(
      `MongoDB connected successfully!! DB Host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
