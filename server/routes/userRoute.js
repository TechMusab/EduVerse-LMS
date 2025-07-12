import express from 'express';
import auth from '../middleware/auth.js';
import { becomeInstructor, updateProfile, getProfileInfo } from '../controllers/userController.js';
const router = express.Router();
// Route to become an instructor
router.patch('/become-instructor',auth,becomeInstructor)
// Route to update profile
router.patch('/update-profile', auth, updateProfile);
// Route to get profile info
router.get('/profile-info', auth, getProfileInfo);

export default router;