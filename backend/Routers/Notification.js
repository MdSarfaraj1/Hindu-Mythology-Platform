const express = require("express");
const router = express.Router();
const NotificationController = require("../Controllers/Notification");
const { isLoggedIn } = require("../Middleware/middlewares");

router.post("/save_firebaseToken", isLoggedIn, async (req, res) => {
    try {
        const { userID, token } = req.body;
        console.log("from firebase token save",userID,token)
        const result = await NotificationController.saveFirebaseToken(userID, token);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to save notification token"
        });
    }
});

router.delete("/remove_firebaseToken", async (req, res) => {
    try {
        const { userID } = req.query;
        const result = await NotificationController.removeFirebaseToken(userID);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to remove notification subscription"
        });
    }
});

module.exports = router;