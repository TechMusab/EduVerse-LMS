import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { MdPlayCircle } from "react-icons/md";
import { FaUsers, FaGraduationCap } from "react-icons/fa";
import { BiTime, BiCalendar } from "react-icons/bi";

export default function StudentDashboard() {
  const enrolledCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Smith",
      progress: 75,
      nextLesson: "State Management",
      dueDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Sarah Johnson",
      progress: 45,
      nextLesson: "Async Programming",
      dueDate: "2024-01-20",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop"
    }
  ];

  const upcomingAssignments = [
    { id: 1, title: "React Project", course: "React Fundamentals", dueDate: "2024-01-15", type: "Project" },
    { id: 2, title: "JavaScript Quiz", course: "Advanced JavaScript", dueDate: "2024-01-18", type: "Quiz" }
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Student Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg glass-effect animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-xs lg:text-sm font-medium">Enrolled Courses</p>
              <p className="text-2xl lg:text-3xl font-bold text-text">8</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg gradient-primary flex items-center justify-center">
              <IoBookSharp size={20} className="text-white lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg glass-effect animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-xs lg:text-sm font-medium">In Progress</p>
              <p className="text-2xl lg:text-3xl font-bold text-text">3</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg gradient-secondary flex items-center justify-center">
              <MdPlayCircle size={20} className="text-white lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg glass-effect animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-xs lg:text-sm font-medium">Completed</p>
              <p className="text-2xl lg:text-3xl font-bold text-text">5</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg gradient-success flex items-center justify-center">
              <FaGraduationCap size={20} className="text-white lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg glass-effect animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-light text-xs lg:text-sm font-medium">Average Grade</p>
              <p className="text-2xl lg:text-3xl font-bold text-text">87%</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg gradient-accent flex items-center justify-center">
              <FaUsers size={20} className="text-white lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg glass-effect animate-slide-up">
        <h2 className="text-xl lg:text-2xl font-bold text-text mb-4 lg:mb-6">My Courses</h2>
        <div className="space-y-3 lg:space-y-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-text text-sm lg:text-base truncate">{course.title}</h3>
                <p className="text-text-light text-xs lg:text-sm">by {course.instructor}</p>
                <div className="flex items-center gap-3 lg:gap-4 mt-2 text-xs text-text-light">
                  <span className="flex items-center gap-1">
                    <MdPlayCircle size={10} className="lg:w-3 lg:h-3" />
                    Next: {course.nextLesson}
                  </span>
                  <span className="flex items-center gap-1">
                    <BiCalendar size={10} className="lg:w-3 lg:h-3" />
                    Due: {course.dueDate}
                  </span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm lg:text-base">
                  {course.progress}%
                </div>
                <p className="text-xs text-text-light mt-1">Progress</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Assignments */}
      <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg glass-effect animate-slide-up">
        <h2 className="text-xl lg:text-2xl font-bold text-text mb-4 lg:mb-6">Upcoming Assignments</h2>
        <div className="space-y-3">
          {upcomingAssignments.map((assignment) => (
            <div key={assignment.id} className="flex items-center justify-between p-3 lg:p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-warning flex items-center justify-center">
                  <BiTime size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-text text-sm lg:text-base">{assignment.title}</p>
                  <p className="text-text-light text-xs lg:text-sm">{assignment.course} • {assignment.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-text">{assignment.dueDate}</p>
                <p className="text-xs text-text-light">Due Date</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 