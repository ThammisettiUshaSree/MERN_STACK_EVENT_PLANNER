import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const dbConnection = () => {
  console.log("Checking MONGO_URI:", process.env.MONGO_URI); // Debugging log

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is not defined. Check your .env file.");
    process.exit(1); // Stop the server if .env is missing
  }

  mongoose
    .connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENTS_MESSAGE" })
    .then(() => {
      console.log("✅ Connected to database!");
    })
    .catch((err) => {
      console.error(
        "❌ Some error occurred while connecting to database:",
        err
      );
      process.exit(1);
    });
};
