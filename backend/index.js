const express = require("express");

 const dotenv= require("dotenv");
 const connectDb=require("./config/db");
const authRouter = require("./routes/auth.route.jsS");
 const app=express();
 dotenv.config()

const PORT=process.env.PORT || 5000



app.use("/api/auth",authRouter)
app.listen(PORT,()=>{
    connectDb();
    console.log(`server is runnin on ${PORT}`);
})