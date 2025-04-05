const Stories = require("../Models/Stories");
const Topic = require("../Models/Topics");
const User = require("../Models/User");
const { generateStory } = require("../Utils/generateStory");

class TopicController {

    static async getUserTopics(user) {
        try {
      const hasNotifications = !!user.NotificationToken; // double not operator converts any value to boolean
      
      const topic=user?.selectedTopics?.length>0?user.selectedTopics:[]
      return {
        Notification_Status: hasNotifications,
        topics:topic
      };
      // if (user && user.selectedTopics && user.selectedTopics.length > 0) {
      //   return {
      //     Notification_Status: hasNotifications,
      //     topics: user.selectedTopics,
      //   };
      // } else {
      //   return { 
      //     Notification_Status: hasNotifications, 
      //     topics: [] 
      //   };
      // }
    } catch (error) {
      throw new Error("Error retrieving user topics: " + error.message);
    }
  }

   // Update user's selected topics
   static async updateTopics(user, selectedTopics) {
    try {
      // Get existing topic names from user's current selection
      const existingTopicNames = (user.selectedTopics||[]).map((topic) => topic.name);
      
      // Identify topics to add and remove
      const topicsToAdd = selectedTopics.filter((topicName) => !existingTopicNames.includes(topicName));
      const topicsToRemove = existingTopicNames.filter((topicName) => !selectedTopics.includes(topicName));

      // Create new topics entry
      const addedTopicIds = await Promise.all(
        topicsToAdd.map(async (topicName) => {
          let topic = await Topic.findOne({ name: topicName });
            // Increment usercount for existing topic
            topic.usercount += 1;
            await topic.save();
    
          return topic._id; // Return the topic ID
        })
      );
      // For handling topic's user count
      if (topicsToRemove.length > 0) {
        await Topic.updateMany(
          { name: { $in: topicsToRemove }, usercount: { $gt: 0 } },
          { $inc: { usercount: -1 } }
        );
      }

      user.selectedTopics = [
        ...user.selectedTopics.filter((topic) => !topicsToRemove.includes(topic.name)) // Remove deselected topics
          .map((topic) => topic._id), // Keep only the IDs of remaining topics
        ...addedTopicIds, // Add new topic IDs
      ];
      await user.save();
      
      return {
        message: "Topics saved successfully",
        data: user,
      };
    } catch (error) {
      throw new Error("Error saving topics: " + error.message);
    }
  }


  // Generate facts about a specific topic
  static async generateFacts(topic, language) {
    try {
      const response = await generateStory(topic, language);
      return {
        heading: response.heading,
        story: response.story,
      };
    } catch (error) {
      throw new Error("Error generating facts: " + error.message);
    }
  }

  static async getNotificationStory(storyId) {
    try {
      const story = await Stories.findById(storyId)
        .select('-_id -createdAt -noExpiry -__v')
        .lean();
        
      if (!story) {
        throw new Error("Story not found");
      }
      
      // Remove `_id` from each story
      if (story && story.story) {
        story.story = story.story.map(({ _id, ...rest }) => rest);
      }
      
      return story;
    } catch (error) {
      throw new Error("Error retrieving notification story: " + error.message);
    }
  }
  
   // Save a fact
   static async saveFact(user, factData, expiry) {
    try {
      let newStory = await Stories.create({
        ...factData,
        Expiry: expiry ?? false,
      });
      
      user.savedStories.push(newStory._id);
      await user.save();
      
      return {
        message: "Story is Saved",
        id: newStory._id.toString()
      };
    } catch (error) {
      throw new Error("Error saving fact: " + error.message);
    }
  }
}
module.exports = TopicController;