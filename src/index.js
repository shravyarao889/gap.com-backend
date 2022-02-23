const express=require("express");
const app=express();


app.listen(2020,async()=>{
    try{
     console.log("Listening on port 2020...")
    }catch(err){
        return res.status(500).send(err.message)
    }
})