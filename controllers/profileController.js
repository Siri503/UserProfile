// import User from '../models/User.js';
// export const getProfile =async(req,res)=>{
//     try{
//         const user=await User.findById(req.user.id).select('-password');
//         if(!user) return res.status(404).json(
//             {
//                 message:'User not found'
//             }
//         );
//         res.json(user);
//     }catch(error){
//         res.status(500).json(
//             {
//                 message:'Server error'
//             }
//         );
//     }
// };

// export const updateProfile=async(req,res)=>{
//     try{
//         const { name, address, bio, profilePicture } = req.body;
//         const user = await User.findById(req.user.id);

//         if (!user) return res.status(404).json({ message: 'User not found' });

//         user.name = name || user.name;
//         user.address = address || user.address;
//         user.bio = bio || user.bio;
//         user.profilePicture = profilePicture || user.profilePicture;

//         await user.save();
//         res.json({ message: 'Profile updated successfully', user });
//     }
//     catch(error){
//         res.status(500).json({ message: 'Server error' }); 
//     }
// }






import User from '../models/User.js';

// ✅ Get User Profile
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Update Profile (Handles both text & profile picture updates)
export const updateProfile = async (req, res) => {
    try {
        const updates = req.body;
        const user = await User.findById(req.user.id);

        if (!user) return res.status(404).json({ message: 'User not found' });

        // If a new profile picture is uploaded, update the profilePicture field
        if (req.file) {
            updates.profilePicture = `/uploads/${req.file.filename}`; 
        }

        // Update only the provided fields
        user.name = updates.name || user.name;
        user.address = updates.address || user.address;
        user.bio = updates.bio || user.bio;
        user.profilePicture = updates.profilePicture || user.profilePicture;

        await user.save();

        res.json({ 
            message: 'Profile updated successfully', 
            user: user.toObject({ getters: true }) // Converts Mongoose document to plain object
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
