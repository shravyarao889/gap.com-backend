const express=require("express");
const res = require("express/lib/response");
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


router.get("/view_product", async(req,res)=>{
    try{
       return res.render("products/view_product_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/view_product/:id", async(req,res)=>{
    try{
        const view_item=await Dresses.findById(req.params.id).lean().exec();
       return res.render("products/view_product_page.ejs",{view_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})


router.get("/checkout" ,async(req,res)=>{
    try{
        return res.render("products/checkout_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/checkout/:id" ,async(req,res)=>{
    try{
        const cart_item=await Dresses.findById(req.params.id).lean().exec();
        return res.render("products/checkout_page.ejs",{cart_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})


router.get("/payment", async(req,res)=>{
    try{
        return res.render("products/payment_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/payment/:id", async(req,res)=>{
    try{
        const final_item=await Dresses.findById(req.params.id).lean().exec();
        return res.render("products/payment_page.ejs",{final_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.post("/pants",async(req,res)=>{
    try{
        const pants=await Pants.create(req.body);
        return res.send(pants)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/pants",async(req,res)=>{
    try{
        const pants=await Pants.find().lean().exec();
        return res.render("products/pants_page.ejs",{pants})
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/view_product/:id", async(req,res)=>{
    try{
        const view_item=await Pants.findById(req.params.id).lean().exec();
       return res.render("products/view_product_page.ejs",{view_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/checkout/:id" ,async(req,res)=>{
    try{
        const cart_item=await Pants.findById(req.params.id).lean().exec();
        return res.render("products/checkout_page.ejs",{cart_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/payment/:id", async(req,res)=>{
    try{
        const final_item=await Pants.findById(req.params.id).lean().exec();
        return res.render("products/payment_page.ejs",{final_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})



                       //Gapfit//
router.get("/gapfit",async(req,res)=>{
    try{
        const gapfit=await Gapfit.find().lean().exec();
        return res.render("products/gapfit_page.ejs",{gapfit})
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/gapfit/view_product/:id", async(req,res)=>{
    try{
        const view_item=await Gapfit.findById(req.params.id).lean().exec();
       return res.render("products/view_product_page.ejs",{view_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/gapfit/checkout/:id" ,async(req,res)=>{
    try{
        const cart_item=await Gapfit.findById(req.params.id).lean().exec();
        return res.render("products/checkout_page.ejs",{cart_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/gapfit/payment/:id", async(req,res)=>{
    try{
        const final_item=await Gapfit.findById(req.params.id).lean().exec();
        return res.render("products/payment_page.ejs",{final_item})
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("/view_product", async(req,res)=>{
    try{
       return res.render("products/view_product_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/checkout" ,async(req,res)=>{
    try{
        return res.render("products/checkout_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.get("/payment", async(req,res)=>{
    try{
        return res.render("products/payment_page.ejs")
    }catch(err){
        return res.status(500).send(err.message)
    }
})
// router.get("/welcome", async(req,res)=>{
//     try{
//        return res.render("products/welcome_page.ejs")
//     }catch(err){
//         return res.status(500).send(err.message)
//     }
// })


// router.get("/create", async(req,res)=>{
//     try{
//        return res.render("products/create_signup_page.ejs")
//     }catch(err){
//         return res.status(500).send(err.message)
//     }
// })

module.exports=router;