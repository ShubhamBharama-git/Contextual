const postModel = require("../models/post.model")
const generateCaption = require("../services/ai.service")

const uploadFile = require("../services/storage.service");

async function createPostController(req, res) {
    try {
        const file = req.file;
        console.log(file);

        const base64Image = file.buffer.toString("base64");

        const caption = await generateCaption(base64Image);
        const result = await uploadFile(file);

        const user = await postModel.create({
            caption,
            image: result.url,
            user: req.user._id
        })

        res.status(201).json({ caption, user });

    } catch (error) {
        if (error.status === "UNAVAILABLE") {
            return res.status(503).json({
                error: "AI service is busy, please try again in a moment."
            });
        }
        res.status(500).json({ error: "Something went wrong.", error });
    }
}

module.exports = {
    createPostController
}