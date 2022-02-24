const express= require("express")

const connect = require("./configs/db");

const app = express()

app.use(express.json()) 
//const ejs=require("ejs")

const pantController=require("./controller/pants.controller");

//app.use(express.urlencoded({extended:true}));
// app.set("view engine", "ejs");
//app.use(express.static("public"));


app.use("/pants", pantController)

app.listen (2020,  async function (){

    try {
        await connect()
        console.log("liseing on the port 2020")

    } catch (err) {
        console.log("err: ", err.message)
    }
  
});