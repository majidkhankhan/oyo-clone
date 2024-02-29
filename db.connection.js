import mongoose from "mongoose";

const URI = 'mongodb://localhost:27017/oyo';

const connectDB = async () => {
    try {
        const dbConnect = await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
        return dbConnect
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
}

export default connectDB;
