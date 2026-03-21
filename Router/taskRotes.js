const express = require("express");
const Task = require("../model/task");
const router = express.Router();
const { createTask,getTask, updateTask, completeTask,deleteTask } = require("../controller/textController");
const WrapHandler = require ("../middleware/WrapHandler");

// Create Task
router.post("/", WrapHandler(createTask));
// show data
router.get("/",WrapHandler(getTask));

  //Update route
router.put("/:id",WrapHandler(updateTask));

 //complete route
router.put ("/:id/complete",WrapHandler(completeTask));
// Delete Route
router.delete("/:id", WrapHandler(deleteTask));

module.exports = router;