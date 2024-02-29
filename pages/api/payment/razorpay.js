import connectDB from "@/db.connection";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotel.schema";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const hotel = await Hotel.findById(req.body);
    if (hotel) {
      const amount = hotel.offerPrice;
      const options = {
        amount: (amount * 100).toString(),
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture: 1,
      };

      try {
        const result = await razorpay.orders.create(options);
         return res.status(201).json({
           id: result.id,
           currency: result.currency,
           amount: result.amount,
         });
      } catch (err) {
         res.status(400).json(err);
      }
    }
  }
}