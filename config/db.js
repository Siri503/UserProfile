import mongoose from "mongoose";
import dotenv from "dotenv";
// Load environment variables
dotenv.config(); 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Failed`);
        process.exit(1);
    }
};
export default connectDB;
