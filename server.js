import express from "express"
import path from "path"
import mongoose from "mongoose";
import employeeModel from './database.js'
const __dirname = import.meta.dirname;
const app=express()
const PORT=4444

// Use pre tags for code blocks or for giving proper formating

// views engine setup . Used for rendering index.ejs file
app.set("views",path.join(__dirname,'views')); // important for serving static files like css
app.set('view engine', 'ejs'); 

// app configuration
app.use(express.static(path.join(__dirname,'public'))) // important for serving static files like css
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'Your_website_address');
    // You can also specify other CORS headers as needed
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// connecting to database
await mongoose.connect("Your_mongodb_connection_string")

app.get("/",async (req,res)=>{
    // res.render("index",{result}); This can be used if u directly put result in .ejs file using ejs templates 
    res.render("index")
})

app.get("/api",async (req,res)=>{
    let result = await employeeModel.find()
    res.send(result)
    
})


app.listen(PORT,()=>{
    console.log("Server running at Your_websiteAdress"+ PORT);
})
