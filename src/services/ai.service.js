const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

async function generateCaption(base64Image) {
    const contents = [
        {
            inlineData: {
                mimeType: "image/jpeg",
                data: base64Image, // data should accept base64 string of the image
            },
        },
        { text: "Caption this image." },
    ];

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents,
        config: {
            systemInstruction: `
            You are a helpful assistant that generates captions for images.
            the caption should be concise and creative, and it should describe the content of the image in an engaging way.
\           Use hashtags and emojis in the captions.
            dont make long captions, keep it short and sweet.
            `
        }
    });
    console.log(response.text);
    return response.text;
}

module.exports = generateCaption;