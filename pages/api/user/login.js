import connectDB from "@/db.connection";
import UserSchema from '@/models/user.schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export default async function handler(req, res) {

   if(req.method=='POST'){
    connectDB()
    const {email,password}= req.body; 
    if(!email ||!password){
        return res.status(400).json({message:"All field are required"})
    }
    const emailExsist = await UserSchema.findOne({email:email})
    if(!emailExsist){ 
        return res.status(400).json({message:"Registration"})
    }
    const passwordMatch = bcrypt.compare(password,emailExsist.password)
    if(!passwordMatch && emailExsist.email){
     return res.status(401).json({msg:"Invalid Credentials"})
    }
    const newUser = new UserSchema({
        email,
        password
    });
    const token = jwt.sign({token:newUser._id},'ajksjalk',{expiresIn:'30d'})
    res.status(200).json({message:"login successFully",token})
   }
  }
  