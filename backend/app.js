//dotenv 
require("dotenv").config();

//require express
const express =require("express");
const app=express();
//middleware json
app.use(express.json());

//simple logger
if(process.env.Node_Env==="dev"){
    app.use((req, res, next)=>{
        console.log(`${req.methode}${req.originalUrl}`)
        next();
    })
}
//Route test
app.get ("/test",(req,res)=>{res.status(200).json({msg:"test Route"})})

//connection Db
const connectDB= require("./config/db");
connectDB();
//port
const port=process.env.Port||3000;

//run server

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})