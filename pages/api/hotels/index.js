import connectDB from "@/db.connection";
import HotelSchema from "@/models/hotel.schema";

export default async function handler(req,res){
    // if(req.method=='POST'){
    //     connectDB()
    //     const newHotel = new HotelSchema(req.body)
    //     const result = await newHotel.save();
    //     res.status(201).json({msg:"hotel add",result})
    // }

    if(req.method == 'GET'){
        connectDB()
        const hotels = await HotelSchema.find()
        return res.status(200).json({msg:"succfylly fetch hotel",result:hotels})
    }
}