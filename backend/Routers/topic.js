const express=require("express");
const Groq = require("groq-sdk");
const Topic = require("../Models/Topics");
const { isLoggedIn } = require("../Middleware/middlewares");
const router=express.Router({mergeParams:true});
router.get("/retrieve-topics", isLoggedIn, async (req, res) => {
  try {
    let Notification = false;
    const user = req.user;
    if (user.NotificationToken) {
      Notification = true;
    }

    if (user && user.selectedTopics && user.selectedTopics.length > 0) {
      res.json({
        Notification_Status: Notification,
        topics: user.selectedTopics,
      });
    } else {
      res.json({ Notification_Status: Notification, topics: [] });
    }
  } catch (error) {
    res.status(500).json({ error: "Error checking topics" });
  }
});
router.patch("/update-topics", isLoggedIn, async (req, res) => {
  try {
    const { selectedTopics } = req.body;
    const user = req.user;
    // Get existing topic names from user's current selection
    const existingTopicNames = user.selectedTopics.map((topic) => topic.name);
    // Identify topics to add and remove
    const topicsToAdd = selectedTopics.filter(
      (topicName) => !existingTopicNames.includes(topicName)
    );
    const topicsToRemove = existingTopicNames.filter(
      (topicName) => !selectedTopics.includes(topicName)
    );

    // Create new topics entry
    const addedTopicIds = await Promise.all(
      topicsToAdd.map(async (topicName) => {
        let topic = await Topic.findOne({ name: topicName });
        if (!topic) {
          // Create a new topic with usercount initialized to 1
          topic = await Topic.create({ name: topicName, usercount: 1 });
        } else {
          // Increment usercount for existing topic
          topic.usercount += 1;
          await topic.save();
        }
        return topic._id; // Return the topic ID
      })
    );

    await Promise.all(
      topicsToRemove.map(async (topicName) => {
        const topic = await Topic.findOne({ name: topicName });
        if (topic && topic.usercount > 0) {
          // Decrement usercount only if it is greater than 0
          topic.usercount -= 1;
          await topic.save();
        }
      })
    );

    user.selectedTopics = [
      ...user.selectedTopics
        .filter((topic) => !topicsToRemove.includes(topic.name)) // Remove deselected topics
        .map((topic) => topic._id), // Keep only the IDs of remaining topics
      ...addedTopicIds, // Add new topic IDs
    ];
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Topics saved successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error saving topics:", error);
    return res.status(500).json({
      success: false,
      message: "Error saving topics",
      error: error.message,
    });
  }
});
router.get("/learn/facts/:topic", isLoggedIn, async (req, res) => {
  const topic = req.params.topic;

  // const completion = await openai.chat.completions.create({
  //     model: "gpt-4o-mini",
  //     messages: [
  //         { role: "system", content: "You are a helpful assistant." },
  //         {
  //             role: "user",
  //             content: "say a",
  //         },
  //     ],
  // });

  // console.log(completion.choices[0].message);

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `
   Generate a captivating heading and full story based on ${topic} from Indian epics . The story should focus on the emotional turmoil or moral dilemma faced by a main character. The story should highlight their internal conflict, struggles, and the resolution of their dilemma with divine intervention, wisdom, or moral decisions with rich detail and multiple events that lead to a resolution. The structure should include the following:\n\n1. **Heading:** A brief, captivating heading that encapsulates the emotional turmoil or major decision the character faces.\n2. 
   **Notification** The first paragraph of the story, written in a way that draws immediate interest and can serve as a standalone teaser or notification
   **Story:** The full story This story should explain the situation, focusing on the character’s emotional journey and the eventual resolution..`,
      },
    ],
    model: "llama3-8b-8192",
  });
  // Print the completion returned by the LLM.
  let response = chatCompletion.choices[0]?.message?.content;
  const parts = response.split(/\*\*[^*]+:\*\*/);
  const heading = parts[1]?.trim();
  const notification = parts[2]?.trim();
  const story = parts[3]?.trim();
  res.status(200).json({
    heading: heading,
    noti: notification,
    story: story,
  });
});
module.exports=router