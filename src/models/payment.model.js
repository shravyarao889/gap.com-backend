const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    name: {type:String, required: true},
    address : {type:String, required: true},
    email: {type:String, required: true},
   
 },
 {
     versionKey:false,
     timestamps:true,
 
 });

 module.exports = mongoose.model("payment" , paymentSchema);