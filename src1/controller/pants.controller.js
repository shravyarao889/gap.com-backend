const express=require("express");

const router=express.Router();

const Pants=require("../models/pants.model");

router.post("",   async (req,res)=>{

    try {
        const items= await Pants.create(req.body); 
        
          return res.status(201).send(items);
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
        
});

router.get("",   async(req,res)=>{
    try {
     
        const items= await Pants.find().lean().exec();  
     
        return res.status(201).send (items)
       

    } catch (err) {
        return res.status(500).send(err.message)
    }
});

router.get("/:id",   async(req,res)=>{
    try {
        const items= await Pants.findById(req.params.id).lean().exec()

         return res.status(201).send (items)

    } catch (err) {
        return res.status(500).send(err.message)
    }
});

router.patch("/:id",  async(req,res)=>{
    try {
        const items= await Pants.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec()
        
        return   res.send(items)

    } catch (err) {
        return res.status(500).send(err.message)
    }
});


router.delete("/:id",  async(req,res)=>{
    try {
        const items= await Pants.findByIdAndDelete(req.params.id).lean().exec()
        
        return   res.send(items)

    } catch (err) {
        return res.status(500).send(err.message)
    }
});

module.exports= router;