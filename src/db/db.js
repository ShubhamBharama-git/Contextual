const mongoose = require("mongoose")

function connectDb() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Connected to DB!")
        })
}

module.exports = connectDb