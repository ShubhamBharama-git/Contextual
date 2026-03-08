const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, // i can use populate here to retrive data from here 
        ref: "user"
    }
})

const postModel = mongoose.model("posts", postSchema)

module.exports = postModel