const express = require("express");
const Topic = require("../Models/Topics");
const { isLoggedIn } = require("../Middleware/middlewares");
const Stories = require("../Models/Stories");
const { generateStory } = require("../Utils/generateStory");
const router = express.Router({ mergeParams: true });
router.get("/retrieve-user-topics", isLoggedIn, async (req, res) => {
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
router.get("/retrieve_All_topics",async(req,res)=>{
  const topic=await Topic.find({});
  res.status(200).json({topic})
})
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
  const {topic} = req.query;
const language=req.user.storyLanguage
let response=await generateStory(topic,language)

  res.status(200).json({
    heading: response.heading, 
    story: response.story, 
  });
});
router.get("/learn/NotificationStory",async(req,res)=>{
  const {StoryId}=req.query;
  const story = await Stories.findById(StoryId)
  .select('-_id -createdAt -noExpiry -__v')  // Exclude these fields
  .lean(); // Converts Mongoose document to a plain JS object
if (!story) {
  return res.status(404).json({
    message: "Story not found",
  });
}
// Remove `_id` from each story 
if (story && story.story) {
  story.story = story.story.map(({ _id, ...rest }) => rest);
}

  res.status(200).json(story) 
})

router.post("/fact/save",isLoggedIn,async(req,res)=>{
  const user=req.user
  try{
    let newStory = await Stories.create({
      ...req.body.facts,
      Expiry: req.body.Expiry ?? false, // Default to false if not provided
    });
    await user.savedStories.push(newStory._id)
    await user.save()
    console.log(newStory._id.toString())
    res.status(200).json({
      message:"Story is Saved",
      id:newStory._id.toString()
    })
  }
  catch(err){
    console.log(err)
    res.status(406).json({
      message:"Topic is not present"
    })
  }
})
router.get("/getSharedStory/:storyId", async(req, res) => {
  
  const { storyId } = req.params;
  try{
     const story = await Stories.findById(storyId).select('-id -createdAt -Expiry -expiresAt -__v')  // Exclude these fields
  res.status(200).json({
    story:story})
  }catch(e){
    console.log("error occured from topic.js",e)
    res.status(401).json({
      message:"It seems like the story is no more exist"
    })
  }
 
});
module.exports = router;