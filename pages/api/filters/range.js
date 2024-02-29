import connectDB from "@/db.connection";
import hotelSchema from "@/models/hotel.schema";

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      await connectDB();
      const range = await hotelSchema.find({ offerPrice: { $lte: req.query.price } });
      return res.status(200).json({ msg: "Successfully fetched", data: range });
    } else {
      return res.status(405).json({ msg: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}
