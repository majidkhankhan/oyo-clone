import connectDB from "@/db.connection";
import hotelSchema from "@/models/hotel.schema";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectDB();
      const key = req.query.val;
      const facilities = await hotelSchema.find({"hotelFacility.name": { $in: key } });
      return res.status(200).json({ msg: "Successfully fetched", data: facilities });
    } catch (error) {
      console.error("Error fetching data:", error);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ msg: "Method Not Allowed" });
  }
}
