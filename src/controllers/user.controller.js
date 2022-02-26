
const { body, validationResult } = require("express-validator")
const express =require("express");
const User =require("../models/user.model")

const router = express.Router();



router.post("",
body("firstandlastname").isString().isLength({min:3,max:30}),
body("email")
.isEmail()
.custom(async (value) => {
  const user = await User.findOne({ email: value });
  if (user) {
    throw new Error("Email already exists");
  }
  return true;
}),
body("password").isUppercase({min:1,max:1}).isLowercase({min:1,max:1})
    .isLength({ min: 8, max: 24 })
    .custom((value) => {
      let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (pattern.test(value)) {
        return true;
      }
      throw new Error("Password is not strong");
    })
)



async (req, res) => {
    try {
      const errors = validationResult(req);
      // errors = []
      if (!errors.isEmpty()) {
        let newErrors;
        newErrors = errors.array().map((err) => {
          console.log("err", err);
          return { key: err.param, message: err.msg };
        });
        return res.status(400).send({ errors: newErrors });
      }
      const user = await User.create(req.body);


      return res.send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }




module.exports=router;