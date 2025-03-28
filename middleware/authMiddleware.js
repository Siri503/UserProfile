// import jwt from 'jsonwebtoken';
// const authMiddleware=(req,res,next)=>{
//     const token=req.header('Authorization');
//     if(!token)return res.status(401).json(
//         {
//            message:'Access denied'
//         }
//     );
//     try{
//         const decoded=jwt.verify(token,process.env.JWT_SECRET);
//         req.user=decoded;
//         next();
//     }
//     catch(error){
//         res.status(400).json(
//             {
//                 message:"Invalid token"
//             }
//         );
//     }
// };
// export default authMiddleware;
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};

export default authMiddleware;
