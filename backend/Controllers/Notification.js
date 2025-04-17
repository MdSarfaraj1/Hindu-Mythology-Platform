require('dotenv').config();
const User = require("../Models/User");
const Story =require("../Models/Stories") 
const admin = require("firebase-admin");
const { generateStory } = require("../Utils/generateStory");
const serviceAccount = {
  type: process.env.SERVICE_ACCOUNT_TYPE, 
  project_id: process.env.SERVICE_ACCOUNT_PROJECT_ID,
  private_key_id: process.env.SERVICE_ACCOUNT_PRIVATE_KEY_ID,
  private_key: process.env.SERVICE_ACCOUNT_PRIVATE_KEY,
  client_email: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
  client_id: process.env.SERVICE_ACCOUNT_CLIENT_ID,
  auth_uri: process.env.SERVICE_ACCOUNT_AUTH_URI,
  token_uri: process.env.SERVICE_ACCOUNT_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL, 
  client_x509_cert_url: process.env.SERVICE_ACCOUNT_CLIENT_X509_CERT_URL,
  universe_domain: process.env.SERVICE_ACCOUNT_UNIVERSE_DOMAIN
};
// const serviceAccount=require("../")
// Initialize Firebase Admin once
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

class NotificationController {
  // Send notifications to all users
  static async sendNotifications() {
    try {
      //getting users
      const users = await User.find(
        { NotificationToken: { $ne: "" } },
        { NotificationToken: 1, selectedTopics: 1, _id: 0, storyLanguage: 1 }
      ).populate({ path: "selectedTopics", select: "name" });
 if(users.length==0){
console.log("No users found with NotificationToken");
return  
};
      let sendingStoryPromises = users.map(async (user) => {
        const topics = user.selectedTopics.map((topic) => topic.name);

        let story = await generateStory(topics.join(","), user.storyLanguage);

        let newStory = new Story(story);
        await newStory.save();
        const message = { 
          notification: {
            title: story.heading,
            body: story.notification,
          },
          data: {
            url: `${process.env.FRONTEND_URL}/storyOfNotification?StoryId=${newStory._id}`,
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
      await Promise.all(sendingStoryPromises);
      return { success: true, message: "Notifications sent successfully" };
    } catch (error) {
      console.error("Error sending notifications:", error);
      return { success: false, message: "Failed to send notifications" };
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
        user: updatedUser,
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
        message: "Notification subscription removed successfully",
      };
    } catch (error) {
      console.error("Error removing Firebase token:", error);
      throw new Error("Failed to remove notification subscription");
    }
  }
}

module.exports = NotificationController;
