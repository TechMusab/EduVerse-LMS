import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import { MdOutlinePeople } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import Toast from "../shared/Toast";
import CreateCourseModal from "./CreateCourseModal";
import { 
  AnimatedContainer, 
  AnimatedCard, 
  AnimatedButton,
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  useScrollAnimation
} from "../shared/AnimatedComponents";

export default function InstructorDashboard() {
  const { user } = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [toast, setToast] = useState(null);

  // Scroll animations
  const [welcomeRef, welcomeInView] = useScrollAnimation();
  const [statsRef, statsInView] = useScrollAnimation();
  const [coursesRef, coursesInView] = useScrollAnimation();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setCourses(data.courses || []);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseCreated = (newCourse) => {
    setCourses([newCourse, ...courses]);
    setShowCreateModal(false);
    setToast({ message: "Course created successfully!", type: "success" });
    setTimeout(() => setToast(null), 3000);
  };

  const handleTogglePublish = async (courseId, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}/publish`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setCourses(courses.map(course => 
          course._id === courseId 
            ? { ...course, isPublished: !currentStatus }
            : course
        ));
        setToast({ 
          message: `Course ${!currentStatus ? 'published' : 'unpublished'} successfully!`, 
          type: "success" 
        });
      }
    } catch (error) {
      setToast({ message: "Error updating course status", type: "error" });
    }
    setTimeout(() => setToast(null), 3000);
  };

  const handleDeleteCourse = async (courseId) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setCourses(courses.filter(course => course._id !== courseId));
        setToast({ message: "Course deleted successfully!", type: "success" });
      }
    } catch (error) {
      setToast({ message: "Error deleting course", type: "error" });
    }
    setTimeout(() => setToast(null), 3000);
  };

  const stats = {
    totalCourses: courses.length,
    publishedCourses: courses.filter(c => c.isPublished).length,
    totalStudents: courses.reduce((sum, c) => sum + (c.studentsCount || 0), 0),
    totalRevenue: courses.reduce((sum, c) => sum + (c.revenue || 0), 0)
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <ScaleIn>
          <div className="text-primary-500 text-xl animate-bounce">Loading...</div>
        </ScaleIn>
      </div>
    );
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <AnimatedContainer className="space-y-6">
        {/* Welcome Section */}
        <FadeInUp ref={welcomeRef} isVisible={welcomeInView}>
          <AnimatedCard className="bg-surface rounded-xl p-6 shadow-lg glass-effect">
            <h1 className="text-3xl font-bold text-text mb-2">
              Welcome back, {user?.username}! 👋
            </h1>
            <p className="text-muted">
              Manage your courses and track your teaching progress
            </p>
          </AnimatedCard>
        </FadeInUp>

        {/* Stats Cards */}
        <div ref={statsRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SlideInLeft delay={0}>
            <AnimatedCard className="bg-surface rounded-xl p-6 shadow-lg glass-effect hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted text-sm">Total Courses</p>
                  <p className="text-3xl font-bold text-text group-hover:text-primary-500 transition-colors">{stats.totalCourses}</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <BiBookOpen size={24} className="text-blue-600" />
                </div>
              </div>
            </AnimatedCard>
          </SlideInLeft>

          <SlideInLeft delay={0.1}>
            <AnimatedCard className="bg-surface rounded-xl p-6 shadow-lg glass-effect hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted text-sm">Published</p>
                  <p className="text-3xl font-bold text-text group-hover:text-green-500 transition-colors">{stats.publishedCourses}</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                  <FaEye size={24} className="text-green-600" />
                </div>
              </div>
            </AnimatedCard>
          </SlideInLeft>

          <SlideInRight delay={0.2}>
            <AnimatedCard className="bg-surface rounded-xl p-6 shadow-lg glass-effect hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted text-sm">Total Students</p>
                  <p className="text-3xl font-bold text-text group-hover:text-purple-500 transition-colors">{stats.totalStudents}</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <MdOutlinePeople size={24} className="text-purple-600" />
                </div>
              </div>
            </AnimatedCard>
          </SlideInRight>

          <SlideInRight delay={0.3}>
            <AnimatedCard className="bg-surface rounded-xl p-6 shadow-lg glass-effect hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted text-sm">Revenue</p>
                  <p className="text-3xl font-bold text-text group-hover:text-yellow-500 transition-colors">${stats.totalRevenue}</p>
                </div>
                <div className="p-3 rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
                  <IoMdStats size={24} className="text-yellow-600" />
                </div>
              </div>
            </AnimatedCard>
          </SlideInRight>
        </div>

        {/* Courses Section */}
        <FadeInUp ref={coursesRef} isVisible={coursesInView}>
          <AnimatedCard className="bg-surface rounded-xl p-6 shadow-lg glass-effect">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-text">My Courses</h2>
              <AnimatedButton
                onClick={() => setShowCreateModal(true)}
                className="gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-glow-hover transition-all duration-300 font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlus size={16} />
                Create Course
              </AnimatedButton>
            </div>

            {courses.length === 0 ? (
              <div className="text-center py-12">
                <ScaleIn>
                  <BiBookOpen size={64} className="text-muted mx-auto mb-4" />
                </ScaleIn>
                <FadeInUp delay={0.2}>
                  <h3 className="text-xl font-semibold text-text mb-2">No courses yet</h3>
                </FadeInUp>
                <FadeInUp delay={0.4}>
                  <p className="text-muted mb-6">Start creating your first course to share your knowledge</p>
                </FadeInUp>
                <FadeInUp delay={0.6}>
                  <AnimatedButton
                    onClick={() => setShowCreateModal(true)}
                    className="gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-glow-hover transition-all duration-300 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Create Your First Course
                  </AnimatedButton>
                </FadeInUp>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <FadeInUp key={course._id} delay={index * 0.1}>
                    <AnimatedCard className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:scale-105">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        {course.thumbnail ? (
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <BiBookOpen size={48} className="text-gray-400" />
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-text mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">{course.title}</h3>
                      <p className="text-muted text-sm mb-4 line-clamp-3">{course.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium">
                          {course.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                          {course.level}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <AnimatedButton
                            onClick={() => handleTogglePublish(course._id, course.isPublished)}
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              course.isPublished 
                                ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                            title={course.isPublished ? 'Unpublish' : 'Publish'}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {course.isPublished ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                          </AnimatedButton>
                          <AnimatedButton
                            className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all duration-300"
                            title="Edit"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaEdit size={16} />
                          </AnimatedButton>
                          <AnimatedButton
                            onClick={() => handleDeleteCourse(course._id)}
                            className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-300"
                            title="Delete"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaTrash size={16} />
                          </AnimatedButton>
                        </div>
                        <span className="text-lg font-bold text-text">
                          ${course.price || 0}
                        </span>
                      </div>
                    </AnimatedCard>
                  </FadeInUp>
                ))}
              </div>
            )}
          </AnimatedCard>
        </FadeInUp>
      </AnimatedContainer>

      {/* Create Course Modal */}
      {showCreateModal && (
        <CreateCourseModal
          onClose={() => setShowCreateModal(false)}
          onCourseCreated={handleCourseCreated}
        />
      )}
    </>
  );
} 