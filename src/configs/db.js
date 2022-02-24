const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://reshma:gap_123@cluster0.uwl7a.mongodb.net/products?retryWrites=true&w=majority")
}

module.exports=connect;