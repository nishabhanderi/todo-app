const express = require('express');
const Task = require("../model/task");

exports.createTask = async(req,res) =>{
    
        const {title,description} = req.body;
        if(!title || title.trim() === ""){
            throw new Error ("Title is required");
        }
        const newTask = new Task({title, description});
         await newTask.save();
    
         res.status(201).json(newTask);
        };
exports.getTask = async(req,res) =>{
    
        const tasks= await Task.find();
        res.status(200).json(tasks);
    
        res.status(500).json({error:error.message});

};
exports.updateTask = async(req, res)=> {
    
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,{new:true}
        );
        res.json(updateTask);
};

exports.completeTask = async(req,res)=>{
   
    const task = await Task.findById(req.params.id);
    if(!task){
        throw new Error("Task not found");
    }
    if(task.completed){
        throw new Error("Task already completed");
    }
    task.completed = true;
    await task.save();
    res.json({
        message:"Task marked as complete",
        data:task
    });
   
};
exports.deleteTask = async(req,res) =>{
    
  const task = await Task.findByIdAndDelete(req.params.id);
    if(!task){
        throw new Error ("Task not found");
    }
    res.json({message:"Task delete successfully"});
    
};