const express=require("express");
const app=express();
const ejs=require("ejs")

const connect=require("./configs/db");

const homeController=require("./controllers/home.controller");
const paymentController=require("./controllers/payment.controller")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.use("/home",homeController)



app.listen(2020,async()=>{
    try{
        await connect();
        console.log("Listening on port 2020...")
    }catch(err){
        console.log("err:",err)
    }
});