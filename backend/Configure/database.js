require("dotenv").config();
const mongoose = require("mongoose"); 
const SendNotification=require("../Utils/SendNotification")
const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.mongo_atlas);
    console.log("Connected to database");
    SendNotification();
  } catch (err) {
    console.error("Database connection error:", err); 
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
