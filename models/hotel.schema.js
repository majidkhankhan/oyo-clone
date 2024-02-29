import mongoose from 'mongoose'

const hotelSchema = new mongoose.Schema({
    banner: { type: String },
    gallery: [{ type: String }],
    hotelName: { type: String },
    hotelLocation: { type: String, require: true, trim: true, unique: true },
    realPrice: { type: String },
    priceOff: { type: String },
    offerPrice: { type: String },
    hotelFacility: [{ img: String, name: String }],
    address: { type: String },
    features: { type: String },
}, { timestamps: true });
export default mongoose.models?.hotel || mongoose.model("hotel", hotelSchema)