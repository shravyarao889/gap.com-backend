const express= require("express");

const EventEmitter = require("events");
//const path = require("path")

const {sendMail, orderSuccess} = require("../utils");

const eventEmitter = new EventEmitter();  // class  => two values emit and on

const User = require("../models/payment.model")

const router= express.Router();

router.post("", async(req,res)=>{
    try {
        
        const users= await User.create(req.body);
     //   console.log(users)
        
        eventEmitter.on("User Registered", orderSuccess);

        eventEmitter.emit("User Registered", {
            from:"admin@masai.com",
            to:users.email,
            users,
        
        })

          
    return res.send("mail send")

        
    } catch (err) {
        return res.status(500).send(err.message)
    }
})







module.exports= router;