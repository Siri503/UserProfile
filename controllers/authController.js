import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { name, email, address, password } = req.body;

        // ✅ Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // ✅ Hash password before saving
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        // ✅ Create new user with hashed password
        user = new User({
            name,
            email,
            address,
            password: hashedPassword, // Store hashed password
        });

        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
