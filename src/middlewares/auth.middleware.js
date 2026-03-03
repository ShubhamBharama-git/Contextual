const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// post api which creates post ( protected api )
// Protected -> 
// token = yes / no 
// tokenValid = yes / no (jwt.vefify())

// put into the middleware so that we can use it for any api for protected routes
// and remember whatever user data there,  just pass that data in next(userData) for next controller / api

async function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, please login first..!"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // valid token ✅
        const user = await userModel.findOne({
            _id: decoded.id
        })
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token, please login again!!!"
        })
    }
}

module.exports = authMiddleware