
const mongoose=require("mongoose")

const connect =() =>{
   
return mongoose.connect("mongodb+srv://shreya:gap_123@cluster0.8trst.mongodb.net/pants?retryWrites=true&w=majority");
};

module.exports=connect