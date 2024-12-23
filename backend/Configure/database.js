const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
