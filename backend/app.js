require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// Import configurations
const connectDB = require("./Configure/database");
// Import routes
const userRouter = require("./Routers/user");
const topicRouter = require("./Routers/topic");
const passwordRouter = require("./Routers/forgetPassword");
const notificationRouter = require("./Routers/Notification");
// Initialize express app
const app = express();
const port = process.env.PORT;
 
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

// Schedule notifications
