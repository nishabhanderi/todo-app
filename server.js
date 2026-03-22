require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const userRoutes = require("./Router/userRoutes");
const errorHandler = require ("./middleware/errorHandler");
const taskRoutes = require("./Router/taskRoutes");


const app = express();



app.use(express.json());




  const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");
 }catch(error){
       console.log(error.message);
 }
  };
  connectDB();
app.get("/",(req,res) =>{
    res.send("hello word")
});
//Routes use
app.use("/tasks", taskRoutes);
app.use("/user",userRoutes)

 //Error handler
app.use(errorHandler);

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});