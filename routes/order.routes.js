const express = require("express");

const orderRouter=express.Router();


// orderRouter.get("/",async(req,res)=>{
    
// })
orderRouter.post("/",async(req,res)=>{
    const userId=req.body.userId;
})

module.exports=orderRouter;