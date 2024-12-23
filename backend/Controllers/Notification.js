const User = require("../Models/User");
const admin = require("firebase-admin");
const serviceAccount = require("../firbase_admin.json");

// Initialize Firebase Admin once
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

class NotificationController {
    // Send notifications to all users
    static async sendNotifications() {
        try {
            const users = await User.find({}, {"NotificationToken":1,"_id":0});
            
            const notifications = users.map(async (user) => {
                if (!user.NotificationToken) return;
                
                const message = {
                    notification: {
                        title: "Reminder",
                        body: "This is your notification every 5 minutes!",
                    },
                    token: user.NotificationToken,
                };

                try {
                    await admin.messaging().send(message);
                    console.log(`Successfully sent notification to user`);
                } catch (error) {
                    console.error("Error sending notification:", error);
                }
            });

            await Promise.all(notifications);
            return { success: true, message: "Notifications sent successfully" };
        } catch (error) {
            console.error("Error in sendNotifications:", error);
            throw new Error("Failed to send notifications");
        }
    }

    // Save user's Firebase token
    static async saveFirebaseToken(userId, token) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { NotificationToken: token },
                { new: true }
            );

            if (!updatedUser) {
                throw new Error("User not found");
            }

            return {
                message: "Token updated successfully",
                user: updatedUser
            };
        } catch (error) {
            console.error("Error saving Firebase token:", error);
            throw new Error("Failed to save notification token");
        }
    }

    // Remove user's Firebase token
    static async removeFirebaseToken(userId) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { NotificationToken: "" },
                { new: true }
            );

            if (!updatedUser) {
                throw new Error("User not found");
            }

            return {
                message: "Notification subscription removed successfully"
            };
        } catch (error) {
            console.error("Error removing Firebase token:", error);
            throw new Error("Failed to remove notification subscription");
        }
    }
}

module.exports = NotificationController;