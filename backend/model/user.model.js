const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true

    },
    email:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    },
    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Listing"

    },
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Booking",

    }


},{timestamps:true})
const User=mongoose.model("User",userSchema);
module.exports=User;
