const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const { createPostController } = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage()})
const {showAllPostController} = require("../controllers/post.controller")
const router = express.Router();

router.post("/", 
    authMiddleware, 
    upload.single("image"),
    createPostController
)

router.get("/data",
    // authMiddleware,
    showAllPostController
)


module.exports = router;