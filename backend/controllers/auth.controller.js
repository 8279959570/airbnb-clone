import User from "../model/user.model";




export const signUp=async()=>{
    try{
let{name,email,password}=req.body;
     let existUser=await User.findOne(email);
     if(existUser){
        return res.status(400).json({message:"user already exist"});
     }
     let hashPass=await bcrypt.hash(password,10);
    }catch(error){

    }
}