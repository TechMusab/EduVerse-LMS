import express from 'express';
import auth from '../middleware/auth.js';
import requireInstructor from '../middleware/requireInstructor.js';
import {
  createCourse,
  getInstructorCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  togglePublishStatus
} from '../controllers/courseController.js';

const router = express.Router();

// All routes require authentication and instructor role
router.use(auth);
router.use(requireInstructor);

// Course CRUD operations
router.post('/', createCourse);
router.get('/', getInstructorCourses);
router.get('/:courseId', getCourseById);
router.patch('/:courseId', updateCourse);
router.delete('/:courseId', deleteCourse);
router.patch('/:courseId/publish', togglePublishStatus);

export default router; 