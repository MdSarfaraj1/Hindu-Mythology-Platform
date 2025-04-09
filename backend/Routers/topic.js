const express = require("express");
const Topic = require("../Models/Topics");
const { isLoggedIn } = require("../Middleware/middlewares");
const Stories = require("../Models/Stories");
const {generateResponse}=require("../Utils/AskQuestion")
const TopicController = require("../Controllers/TopicControllers");
const router = express.Router({ mergeParams: true });

router.get("/retrieve-user-topics", isLoggedIn, async (req, res) => {
  try{
    const result=await TopicController.getUserTopics(req.user)
  res.json(result);
}catch(error){
  res.status(500).json({ error: "Error checking topics" });
}
}); 

router.get("/retrieve_All_topics",async(req,res)=>{
  const topic=await Topic.find({});
  res.status(200).json({topic})
})
router.patch("/update-topics", isLoggedIn, async (req, res) => {
  try {
    const { selectedTopics } = req.body;
    const result = await TopicController.updateTopics(req.user, selectedTopics);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Error saving topics"+error.message, });
  }
});
router.get("/learn/facts", isLoggedIn, async (req, res) => {
  try {
    const { topic } = req.query;
    const language = req.user.storyLanguage;
    const result = await TopicController.generateFacts(topic, language);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/learn/NotificationStory", async (req, res) => {
  try {
    const { StoryId } = req.query;
    const story = await TopicController.getNotificationStory(StoryId);
    res.status(200).json(story);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/askQuestion",async(req,res)=>{
  const { question, topic } = req.body;
  try {
    const response = await generateResponse(question, topic);
    console.log(response)
    res.json({AIresponse: response });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to generate response' });
  }
});


// Save a fact/story
router.post("/fact/save", isLoggedIn, async (req, res) => {
  try {
    const result = await TopicController.saveFact(req.user, req.body.facts, req.body.Expiry);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(406).json({ message: "Topic is not present" });
  }
});
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