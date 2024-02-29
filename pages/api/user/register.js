import connectDB from "@/db.connection";
import UserSchema from '@/models/user.schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export default async function handler(req, res) {

   if(req.method=='POST'){
    connectDB()
    const {name,email,password}= req.body;  
    if(!name ||!email ||!password){
        return res.status(400).json({message:"All field are required"})
    }
    const emailExsist = await UserSchema.findOne({email:email})
    if(emailExsist){
        return res.status(400).json({message:"User alreay exist"})
    }
    const hasPassword = await bcrypt.hash(password,10)
    const newUser = new UserSchema({
        name,
        email,
        password:hasPassword
    });
    const result = await newUser.save();
    const token = jwt.sign({token:result._id},'ajksjalk',{expiresIn:'30d'})
    res.status(201).json({message:"send successFully",token})
   }
  }
  