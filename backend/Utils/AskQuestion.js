const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.gemini_api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
exports.generateResponse = async (question, topic) => {
  try {
    console.log("hi")
    const prompt = `You are a great  hindu scolar, known for your knoledge regarding ${topic}. Provide a helpful response , your response must be in json format and follow the structure berlow 
    {
  "title": "A concise title about the topic",
  "summary": "A paragraph summarizing the key aspects",
  "key_points": [
    {
      "title": "First key point title",
      "description": "Detailed explanation of this point"
    },
    {
      "title": "Second key point title",
      "description": "Detailed explanation of this point"
    }
    // Additional points as needed
  ]
}
Please ensure the JSON is valid  without any extra text, markdown, or code blocks outside the JSON structure.
\n\nUser: ${question}`;
    const result = await model.generateContent(prompt);
    filteredResult = result.response.text().replace(/```json\s+/g, '').replace(/```\s*$/g, '');
    return JSON.parse(filteredResult)
  } catch (e) {
    console.error("Error generating response from Gemini:", e);
    return "Sorry, I couldn't fetch a response.";
  }
};
