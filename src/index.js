const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = process.env.PORT || 2020;

const connect = require("./configs/db");

const homeController = require("./controllers/home.controller");
const paymentController = require("./controllers/payment.controller");
const checkoutController = require("./controllers/checkout.controller");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/home", homeController);

// const connect =require("./src/configs/db");

const userController = require("./controllers/user.controller");
// const { register, login } = require("./controllers/auth.controller");

app.use("/users", userController);
app.use("", checkoutController);
// app.use("/register",register)
// app.use("/login",login)

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening on ${PORT}...`);
  } catch (err) {
    console.log("err:", err);
  }
});
