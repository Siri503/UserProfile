import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get('/me', authMiddleware, getProfile);
router.put('/me', authMiddleware,upload.single("profilePicture"), updateProfile);

export default router;
