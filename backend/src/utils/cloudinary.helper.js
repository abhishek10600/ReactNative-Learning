import cloudianry from "../lib/cloudinary.js";
import AppError from "./AppError.js";

export const uploadToCloudinary = async (image) => {
  try {
    const result = await cloudianry.uploader.upload(image);
    return result;
  } catch (error) {
    console.log(error);
    throw new AppError("Failed to upload image to cloudinary", 400);
  }
};

export const deleteFromCloudinary = async (imageUrl) => {
  try {
    const publicId = imageUrl.split("/").pop().split(".")[0];
    await cloudianry.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
    throw new AppError("Failed to delete image from cloudinary", 400);
  }
};
