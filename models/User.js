import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true, // ✅ Makes email lookups faster
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    profilePicture: {
        type: String,
        default: "" 
    }
});

const User = mongoose.model("User", UserSchema);
export default User;
