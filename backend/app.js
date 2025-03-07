require("dotenv").config();
const OpenAI = require("openai");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const schedule = require("node-schedule");

// Import configurations
const connectDB = require("./Configure/database");

// Import routes
const userRouter = require("./Routers/user");
const topicRouter = require("./Routers/topic");
const passwordRouter = require("./Routers/forgetPassword");
const notificationRouter = require("./Routers/Notification");

// Import controllers
const NotificationController = require("./Controllers/Notification");

// Initialize express app
const app = express();
const port = process.env.PORT;

// Initialize OpenAI configuration
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// Middleware
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(cookieParser());

// Routes
app.use("/user", userRouter);
app.use("/forget-password", passwordRouter);
app.use("/topics", topicRouter);
app.use("/Notification", notificationRouter);

// Schedule notifications
// schedule.scheduleJob("*/1 * * * *", async () => {
//   console.log("Sending notifications...");
//   try {
//     await NotificationController.sendNotifications();
//   } catch (error) {
//     console.error("Failed to send scheduled notifications:", error);
//   }
// });

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
