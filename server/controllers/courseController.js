import Course from '../models/Course.js';

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { title, description, thumbnail, price, category, level, duration } = req.body;
    const instructorId = req.user.id;

    // Validate required fields
    if (!title || !description || !thumbnail || !category) {
      return res.status(400).json({
        message: 'Title, description, thumbnail, and category are required'
      });
    }

    // Create new course
    const course = new Course({
      title,
      description,
      instructorId,
      thumbnail,
      price: price || 0,
      category,
      level: level || 'Beginner',
      duration: duration || 0
    });

    await course.save();

    // Populate instructor info
    await course.populate('instructorId', 'username email instructorProfile');

    res.status(201).json({
      message: 'Course created successfully',
      course
    });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({
      message: 'Error creating course',
      error: error.message
    });
  }
};

// Get all courses for an instructor
export const getInstructorCourses = async (req, res) => {
  try {
    const instructorId = req.user.id;
    
    const courses = await Course.find({ instructorId })
      .populate('instructorId', 'username email instructorProfile')
      .sort({ createdAt: -1 });

    res.status(200).json({
      courses,
      count: courses.length
    });
  } catch (error) {
    console.error('Get instructor courses error:', error);
    res.status(500).json({
      message: 'Error fetching courses',
      error: error.message
    });
  }
};

// Get a single course by ID
export const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const instructorId = req.user.id;

    const course = await Course.findOne({ _id: courseId, instructorId })
      .populate('instructorId', 'username email instructorProfile');

    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json({
      course
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({
      message: 'Error fetching course',
      error: error.message
    });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const instructorId = req.user.id;
    const updateData = req.body;

    const course = await Course.findOneAndUpdate(
      { _id: courseId, instructorId },
      { ...updateData, updatedAt: Date.now() },
      { new: true, runValidators: true }
    ).populate('instructorId', 'username email instructorProfile');

    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json({
      message: 'Course updated successfully',
      course
    });
  } catch (error) {
    console.error('Update course error:', error);
    res.status(500).json({
      message: 'Error updating course',
      error: error.message
    });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const instructorId = req.user.id;

    const course = await Course.findOneAndDelete({ _id: courseId, instructorId });

    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    res.status(200).json({
      message: 'Course deleted successfully'
    });
  } catch (error) {
    console.error('Delete course error:', error);
    res.status(500).json({
      message: 'Error deleting course',
      error: error.message
    });
  }
};

// Toggle course publish status
export const togglePublishStatus = async (req, res) => {
  try {
    const { courseId } = req.params;
    const instructorId = req.user.id;

    const course = await Course.findOne({ _id: courseId, instructorId });

    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    course.isPublished = !course.isPublished;
    course.updatedAt = Date.now();
    await course.save();

    res.status(200).json({
      message: `Course ${course.isPublished ? 'published' : 'unpublished'} successfully`,
      course
    });
  } catch (error) {
    console.error('Toggle publish status error:', error);
    res.status(500).json({
      message: 'Error updating course status',
      error: error.message
    });
  }
}; 