const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: "AIzaSyBNWdcG2vQLI3WdtgHfs3Wr0kKhWKp_EgU"
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
            the caption should be in tapori hindi language and should be very short and catchy.
            use dark humar to write captions.
            use hashtags and emojis in the captions.
            `
        }
    });
    console.log(response.text);
    return response.text;
}

module.exports = generateCaption;