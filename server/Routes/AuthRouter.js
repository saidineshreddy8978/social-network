const express = require("express");
const router = express.Router();
const User = require("../model/user.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//sig up and posting the data into database
router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const email = await User.findOne({ email: data.email });
    if (!email) {
      const hashpassword = bcrypt.hashSync(data.password, 10);
      const user = new User(data);
      user.password = hashpassword;
      const save = await user.save();
      res.status(200).json(save);
    } else {
      res.send("user already exist please login");
    }
  } catch (err) {
    console.log(err);
  }
});

//validating the user

router.post("/login", async (req, res) => {
  try {
    const user = req.body;
    const email = await User.findOne({ email: user.email });
    if (email) {
      const password = user.password;
      const verify = bcrypt.compare(password, email.password);
      if (verify) {
        const token = jwt.sign({ id: email._id }, process.env.SECRET_KEY, {
          expiresIn: "3d",
        });
        res.json({ token, message: "login successful" });
      }
    } else {
      res.json("invalid credentails");
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
