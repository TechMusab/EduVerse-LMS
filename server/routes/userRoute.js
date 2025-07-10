import express from 'express';
import auth from '../middleware/auth.js';
import becomeInstructor from '../controllers/userController.js';
const router = express.Router();
// Route to become an instructor
router.patch('/become-instructor',auth,becomeInstructor)

export default router;