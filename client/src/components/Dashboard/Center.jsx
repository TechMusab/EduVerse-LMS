import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { MdPlayCircle } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

export default function Center() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Smith",
      students: 1247,
      duration: "8 hours",
      progress: 75,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Sarah Johnson",
      students: 892,
      duration: "12 hours",
      progress: 45,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Mike Chen",
      students: 1563,
      duration: "10 hours",
      progress: 90,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-xs lg:text-sm font-medium">Total Courses</p>
              <p className="text-2xl lg:text-3xl font-bold text-text">24</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary flex items-center justify-center">
              <IoBookSharp size={20} className="text-white lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-xs lg:text-sm font-medium">In Progress</p>
              <p className="text-2xl lg:text-3xl font-bold text-text">8</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-secondary flex items-center justify-center">
              <MdPlayCircle size={20} className="text-white lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
        
        <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg animate-slide-up sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted text-xs lg:text-sm font-medium">Completed</p>
              <p className="text-2xl lg:text-3xl font-bold text-text">16</p>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-success flex items-center justify-center">
              <FaUsers size={20} className="text-white lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Courses */}
      <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg animate-slide-up">
        <h2 className="text-xl lg:text-2xl font-bold text-text mb-4 lg:mb-6">Recent Courses</h2>
        <div className="space-y-3 lg:space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg border border-border hover:shadow-md transition-all duration-300">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-text text-sm lg:text-base truncate">{course.title}</h3>
                <p className="text-muted text-xs lg:text-sm">by {course.instructor}</p>
                <div className="flex items-center gap-3 lg:gap-4 mt-2 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <FaUsers size={10} className="lg:w-3 lg:h-3" />
                    {course.students} students
                  </span>
                  <span className="flex items-center gap-1">
                    <BiTime size={10} className="lg:w-3 lg:h-3" />
                    {course.duration}
                  </span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm lg:text-base">
                  {course.progress}%
                </div>
                <p className="text-xs text-muted mt-1">Progress</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-surface rounded-xl p-4 lg:p-6 shadow-lg animate-slide-up">
        <h2 className="text-xl lg:text-2xl font-bold text-text mb-4 lg:mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          <button className="p-3 lg:p-4 rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary-light transition-all duration-300 text-left group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-primary flex items-center justify-center">
                <IoBookSharp size={16} className="text-white lg:w-5 lg:h-5" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm lg:text-base group-hover:text-primary">Browse Courses</p>
                <p className="text-xs lg:text-sm text-muted">Discover new learning opportunities</p>
              </div>
            </div>
          </button>
          
          <button className="p-3 lg:p-4 rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary-light transition-all duration-300 text-left group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-secondary flex items-center justify-center">
                <MdPlayCircle size={16} className="text-white lg:w-5 lg:h-5" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm lg:text-base group-hover:text-primary">Continue Learning</p>
                <p className="text-xs lg:text-sm text-muted">Resume your last course</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
