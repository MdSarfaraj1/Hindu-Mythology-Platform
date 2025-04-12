const schedule = require("node-schedule");
const NotificationController = require("../Controllers/Notification");
const SendNotification = async () => { 
    console.log("Sending notifications at", new Date());
    try {
      await NotificationController.sendNotifications();
    } catch (error) { 
      console.error("Failed to send scheduled notifications:", error);
    } 
    const nextRun = new Date(Date.now() + 20 * 60 * 60 * 1000); // 20 hours later
    schedule.scheduleJob(nextRun, SendNotification);
  };


module.exports=SendNotification

