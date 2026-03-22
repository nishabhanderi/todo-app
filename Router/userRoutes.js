const express = require("express");
const router = express.Router();
const { registerUser, loginUser, protectUser } = require("../controller/userController");
const WrapHandler = require("../middleware/WrapHandler");
const auth = require("../middleware/auth");

// Public routes
router.post("/register", WrapHandler(registerUser));
router.post("/login", WrapHandler(loginUser));

// Protected route
router.get("/tasks", auth, WrapHandler(protectUser));

module.exports = router;