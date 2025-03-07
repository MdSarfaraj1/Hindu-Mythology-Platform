const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router({ mergeParams: true });
const { isLoggedIn } = require("../Middleware/middlewares");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
router.post("/signup", async (req, res) => {
  const data = req.body;
  let existingUser = await User.findOne({
    $or: [{ email: data.email }, { username: data.username }],
  });

  if (existingUser) {
    const field = existingUser.email === data.email ? "email" : "username";
    return res
      .status(409)
      .json({ message: `This ${field} is already registered` });
  }

  const hashPassword = await bcrypt.hash(data.password, 10);
  data.password = hashPassword;
  let newUser = new User(data);
  await newUser.save();
  const newToken = jwt.sign({ UserID: newUser._id }, process.env.secret_key, {
    expiresIn: "24h",
  });
  res
    .status(201)
    .cookie("sessionToken", newToken, { maxAge: 24 * 60 * 60 * 1000 })
    .json({
      message: "User created successfully !",
      userID: newUser._id,
      username: newUser.username,
    });
});
router.post("/login", async (req, res) => {
  const token = req.cookies.sessionToken;
  if (token) {
    try {
      jwt.verify(token, process.env.secret_key);
      return res.status(400).json({
        message: "You are already logged in. Please logout first.",
      });
    } catch (err) {
      // Token is invalid or expired, continue with login
      res.clearCookie("sessionToken");
    }
  }
  let data = req.body;
  let user = await User.findOne({ email: data.email });
  if (user && (await bcrypt.compare(data.password, user.password))) {
    const newToken = jwt.sign({ UserID: user._id }, process.env.secret_key, {
      expiresIn: "24h",
    });
    return res
      .status(200)
      .cookie("sessionToken", newToken, { maxAge: 24 * 60 * 60 * 1000 })
      .json({
        message: `Welcome ${user.username}`,
        userID: user._id,
        username: user.username,
      });
  }

  res.status(409).json({
    message: "User Does not exist or wrong credentials provide",
  });
});
router.post("/logout", isLoggedIn, (req, res) => {
  try {
    console.log("from logout route",req.params)
    res
      .clearCookie("sessionToken", {
        httpOnly: true,
      })
      .json({
        message: "Logged out successfully",
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
router.post("/update", async (req, res) => {
  data = req.body.userProfile;
  console.log(data);
  const user = await User.findById(req.body.userID);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    user.username = data.username;
    user.email = data.email;
    user.storyLanguage = data.storyLanguage;
    await user.save();
    res.status(200).json({ message: "Profile Updated Successfully" });
  }
});
router.post("/profile", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.body.userID);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({
      username: user.username,
      email: user.email,
      storyLanguage: user.storyLanguage,
    });
  }
});

module.exports = router;
