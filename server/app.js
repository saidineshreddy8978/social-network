const express=require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config()
const authroute = require("./Routes/AuthRouter")
const userroute = require("./Routes/userRoute.js")
const app=express()
const port=process.env.PORT
const BaseURL=process.env.MONGO_URL
app.use(cors())
app.use(express.json())
app.use("/auth",authroute)
app.use("/userdata",userroute)


mongoose
  .connect(`${BaseURL}`)
  .then(() => {
    console.log(`server running at ${port}`)
    console.log("Connected to MongoDB")})
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.listen(port);