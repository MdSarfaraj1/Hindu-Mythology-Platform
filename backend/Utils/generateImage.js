const { GoogleGenAI } = require("@google/genai");
const fs = require("fs"); 


async function main() {

  const ai = new GoogleGenAI({ apiKey: "AIzaSyD8RIiIbUfeRY4nSmQ-vHGgroU7KQnth0U" });

  const contents =
  "sita of ramayana sitting in the ravana's garden";

  // Set responseModalities to include "Image" so the model can generate  an image
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-exp-image-generation",
    contents: contents,
    config: {
      responseModalities: ["Text", "Image"],
    },
  });
  for (const part of response.candidates[0].content.parts) {
    // Based on the part type, either show the text or save the image
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
      console.log("Image saved as gemini-native-image.png");
    }
  }
}

main();