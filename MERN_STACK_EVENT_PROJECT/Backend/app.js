import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js"; // Import message routes

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

// CORS Configuration (Fix CORS issues)
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust based on frontend URL
    credentials: true, // Allow cookies and authorization headers
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/eventDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));
// Register routes
app.use("/api/v1/message", messageRouter);

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
