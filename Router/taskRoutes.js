const express = require("express");
const Task = require("../model/task");
const router = express.Router();
const {  createTask,getTask, updateTask, completeTask,deleteTask } = require("../controller/textController");
const WrapHandler = require ("../middleware/WrapHandler");
const auth = require("../middleware/auth");
const User = require("../model/user");
const { protectTask } = require("../controller/userController");



// Create Task
router.post("/",auth, WrapHandler(createTask));
// show data
router.get("/",auth,WrapHandler(getTask));

  //Update route
router.put("/:id",auth,WrapHandler(updateTask));

 //complete route
router.put ("/:id/complete",auth,WrapHandler(completeTask));
// Delete Route
router.delete("/:id",auth, WrapHandler(deleteTask));

module.exports = router;