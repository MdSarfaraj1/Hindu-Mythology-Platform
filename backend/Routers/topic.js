const express = require("express");
const Groq = require("groq-sdk");
const Topic = require("../Models/Topics");
const { isLoggedIn } = require("../Middleware/middlewares");
const User = require("../Models/User");
const Stories = require("../Models/Stories");
const router = express.Router({ mergeParams: true });
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
router.patch("/update-topics", isLoggedIn, async (req, res) => { // also save topic first time
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
// for handling topic's user count
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
      ...user.selectedTopics.filter((topic) => !topicsToRemove.includes(topic.name)) // Remove deselected topics
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
router.get("/learn/facts", isLoggedIn, async (req, res) => {
  const topic = req.params.topic;
const language=req.user.storyLanguage
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
   Generate a captivating heading and full story based on any one of this  ${topic} from Indian epics ,the story must be in language ${language}. The story should focus on the emotional turmoil or moral dilemma faced by a main character. The story should highlight their internal conflict, struggles, and the resolution of their dilemma with divine intervention, wisdom, or moral decisions with rich detail and multiple events that lead to a resolution. The structure should include the following:\n\n1. **Heading:** A brief, captivating heading that encapsulates the emotional turmoil or major decision the character faces.\n2. 
   **Notification** The first paragraph of the story, written in a way that draws immediate interest and can serve as a standalone teaser or notification
   //The full story in three or section This story should explain the situation, focusing on the character’s emotional journey and the eventual resolution.. 
   **s1Heading** heading of the story's first section
   **s1Content** content of the story's first section
     **s2Heading** heading of the story's second section
   **s2Content** content of the story's second section
     **s3Heading** heading of the story's third section
   **s3Content** content of the story's third section

   `,
      },
    ],
    model: "llama3-8b-8192",
  });
  // Print the completion returned by the LLM.
  let response = chatCompletion.choices[0]?.message?.content;
  const parts = response.split(/\*\*[^*]+:\*\*/);
  const heading = parts[1]?.trim();
  const notification = parts[2]?.trim();
  const story = [ 
    {
      head:parts[3]?.trim(),
      content:parts[4]?.trim()
    },
    {
      head:parts[5]?.trim(),
      content:parts[6]?.trim()
    },
    {
      head:parts[7]?.trim(),
      content:parts[8]?.trim()
    }
  ]
  res.status(200).json({
    heading: heading,
    noti: notification,
    story: story,
  });
});
module.exports = router;
router.post("/fact/save",isLoggedIn,async(req,res)=>{
  const user=req.user
  try{
    let newStory=await Stories.create(req.body.facts)
    console.log(newStory)
    await user.savedStories.push(newStory._id)
    await user.save()
    res.status(200).json({
      message:"Story is Saved"
    })
  }
  catch(err){
    console.log(err)
    res.status(406).json({
      message:"Topic is not present"
    })
  }
  
  
})