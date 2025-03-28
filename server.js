import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from './routes/profileRoutes.js';
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();
// Connect to Database
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/auth',authRoutes);
app.use('/api/profile', profileRoutes);
app.use(errorHandler); 
const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.json({
        "message":"Hello"
    })
})
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
