const express=require("express");
const router=express.Router();

const Dresses=require("../models/dresses.model");


router.get("", async(req,res)=>{
    try{
       return res.render("products/landing_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/category", async(req,res)=>{
    try{
       return res.render("products/category_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})

// ------------get dresses data-------------
// router.get("/dresses", async(req,res)=>{
//     try{
//         const dresses=await Dresses.find().lean().exec();
//        return res.send(dresses)
//     }catch(err){
//         return res.status(500).send(err.message)
//     }
// })


router.get("/dresses",async(req,res)=>{
    try{
        const dresses=await Dresses.find().lean().exec();
        return res.render("products/dresses_page.ejs",{dresses})
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports=router;