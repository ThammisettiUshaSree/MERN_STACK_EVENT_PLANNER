import { Message } from "../models/messageSchema.js"; // ✅ Correct path

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // ✅ Validate request
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    // ✅ Insert into database
    const newMessage = await Message.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error inserting message:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
