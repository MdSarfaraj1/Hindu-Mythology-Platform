const express = require("express");
const router = express.Router({ mergeParams: true }); 
const { isLoggedIn } = require("../Middleware/middlewares"); 
const UserAuthController = require("../Controllers/UserAuthControllers");
router.post("/signup",UserAuthController.signup);
router.post("/login", UserAuthController.login);
router.post("/logout", isLoggedIn,UserAuthController.logout);
router.post("/update",UserAuthController.updateProfile);
router.post("/profile", isLoggedIn, UserAuthController.getProfile);
router.get("/verify-token",UserAuthController.verifyAuthToken)
router.post("/verify-email",UserAuthController.verifyemail)

router.get("/stories", isLoggedIn, UserAuthController.getUserStories)
router.post("/stories/delete",isLoggedIn,UserAuthController.deleteUserStory) 

module.exports = router;