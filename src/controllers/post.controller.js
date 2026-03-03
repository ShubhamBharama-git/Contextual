const postModel = require("../models/post.model")
const generateCaption = require("../services/ai.service")



async function createPostController(req, res) {
    try {
        const file = req.file; // dont destructure this lien
        console.log(file);

        const base64Image = file.buffer.toString("base64");

        const caption = await generateCaption(base64Image);

        res.status(201).json({ caption })
    } catch (error) {
        if (error.status === "UNAVAILABLE") {
            return res.status(503).json({
                error: "AI service is busy, please try again in a moment."
            });
        }
        res.status(500).json({ error: "Something went wrong." });
    }
}

module.exports = {
    createPostController
}