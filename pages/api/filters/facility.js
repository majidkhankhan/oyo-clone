import connectDB from "@/db.connection";
import hotelSchema from "@/models/hotel.schema";

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      await connectDB();

      const facilities = await hotelSchema.find().distinct('hotelFacility.name');
      
      return res.status(200).json({ msg: "Successfully fetched", data: facilities });
    } else {
      return res.status(405).json({ msg: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
