const express = require("express");
const router = express.Router();
const User = require("../model/user.js");
const auth = require("./AuthMiddlewear.js");
// GET all users
router.get("/mydata", auth, async (req, res) => {
  const data = await User.find();
  res.status(200).json(data);
});

// GET a single user by ID
router.get("/data", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST a new user
router.post("/", async (req, res) => {
  const { name, email, pass } = req.body;
  const newUser = new User({ name, email, pass });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

// PUT (Update) a user by ID
router.put("/data", auth, async (req, res) => {
  const data = req.body;
  console.log(req.body);
  const updatedUser = await User.findByIdAndUpdate(req.user.id, data, {
    new: true,
    runValidators: true, 
  });
  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(updatedUser);
});

// DELETE a user by ID
router.delete("/data", async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User deleted successfully" });
});

router.put('/:id/follow',auth,(req,res)=>{
  const randomuser_id=req.params.id;
  const currentuser_id=req.user.id;
  User.findByIdAndUpdate(currentuser_id,{$push:{following:randomuser_id}},{new:true,runValidators:true});
})

module.exports = router;
