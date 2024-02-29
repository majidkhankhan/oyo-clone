import connectDB from "@/db.connection";
import hotelSchema from "@/models/hotel.schema";
export default async function handler(req, res) {
    try {
        if (req.method == 'GET') {
            connectDB();
            if (req.query.id) {
                const hotel = await hotelSchema.findById(req.query.id);
                return res.status(200).json({ messsage: "data send successfully", data: hotel })
            }
        }

    } catch (error) {
        console.log(error)
    }

}