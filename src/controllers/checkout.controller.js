const express=require("express");
const router=express.Router();
const Dresses=require("../models/dresses.model");
const Pants=require("../models/pants.model");
const Gapfit=require("../models/gapfit.model");
router.get("/checkout/", async(req,res)=>{
    try{
        console.log(req.query.id, req.query.brand)
        const dress=await Dresses.findById(req.query.id).lean().exec();
        const pant=await Pants.findById(req.query.id).lean().exec();
        const gapfit=await Gapfit.findById(req.query.id).lean().exec();
        console.log("dress:",dress, "pants:",pant, "gapfit:",gapfit)
        // if(dress){
        //     return res.render("products/checkout_page.ejs",{dress})
        // }
        // if(pant){
        //     return res.render("products/checkout_page.ejs",{pant})
        // }
        // if(gapfit){
        //     return res.render("products/checkout_page.ejs",{gapfit})
        // }
        return res.render("products/checkout_page.ejs",{dress,pant,gapfit})
    }catch(err){
        return res.status(500).send(err.message)
    }
})