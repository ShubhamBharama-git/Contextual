const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

async function registerController(req, res) {
    const { username, password } = req.body;

    const isUserExists = await userModel.findOne({
        username
    })
    if (isUserExists) {
        return res.status(409).json({
            message: "username is already exists!"
        })
    }

    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10) // store hashPassword
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        message: "Registerd Successfully!",
        user
    })
}

async function loginController(req, res) {
    const { username, password } = req.body;

    const user = await userModel.findOne({
        username
    })

    if (!user) {
        return res.status(400).json({
            message: "Invalid Username!!!"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid password!!!"
        })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.cookie("token", token)

    return res.status(200).json({
        message: "Login successfully!!!",
        user
    })
}

module.exports = {
    registerController,
    loginController
};