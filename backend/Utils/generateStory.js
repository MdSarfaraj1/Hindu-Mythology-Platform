
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.gemini_api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 

module.exports.generateStory = async (topics, language) => {
  try {
    const prompt = `Generate a captivating heading and a vivid, immersive story based on a topic from ${topics}, including Indian epics, mythology, folklore, or speculative mythology. The story should be written in the language  ${language} and can revolve around themes like redemption, forbidden knowledge, destiny versus free will, or unsung heroes or any random story that you want to provide. 

The structure must include the following elements:

1. **Heading:** A concise, captivating heading that reflects the essence of the story, be it a quest, a moral conflict, or a divine encounter.
2. **Notification:** A teaser paragraph to intrigue the audience, introducing the key theme or mystery.
3. **Section 1 Heading (s1Heading):** A title introducing the first segment of the story.
4. **Section 1 Content (s1Content):** The opening, setting the scene and introducing the characters, including their challenges or ambitions.
5. **Section 2 Heading (s2Heading):** A title introducing the second segment of the story.
6. **Section 2 Content (s2Content):** The main events, challenges, and turning points, with vivid details and cultural richness. 
7. **Section 3 Heading (s3Heading):** A title introducing the conclusion.
8. **Section 3 Content (s3Content):** The resolution, emphasizing moral insights, reflections, or the lasting impact of the events.

Include a magical object, a celestial prophecy, or an unexpected betrayal to add intrigue, and ensure the story brings out the richness of Indian mythology while offering something fresh and engaging. Stories should highlight unsung heroes or unexpected perspectives, and the writing style should align with the chosen language for cultural depth.
`;
    const resultt = await model.generateContent(prompt);
const response=resultt.response.text()
const parts = response.split(/\*\*[^*]+:\*\*/).map(part => part.trim());

const heading = parts[1];
const notification = parts[2];
const story = [];

for (let i = 3; i < parts.length; i += 2) {
  story.push({
    head: parts[i],
    content: parts[i + 1],
  });
}
    return { heading, notification, story };
  } catch (error) {
    console.error("Error generating story:", error);
  }
};
