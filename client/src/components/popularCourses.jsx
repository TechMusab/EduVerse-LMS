import React from "react";
import sky from "../assets/sky.jpg";
import course from "../assets/course.jpg";
import course2 from "../assets/course (2).jpg";
import course3 from "../assets/course (3).jpg";

export default function PopularCourses() {
  const courses = [
    {
      title: "React Mastery",
      description: "Master building fast and interactive UIs with React.",
      instructor: "John Doe",
      thumbnail: course,
    },
    {
      title: "Node.js Bootcamp",
      description: "Build scalable backends and REST APIs using Node.js.",
      instructor: "Jane Smith",
      thumbnail: course2,
    },
    {
      title: "MongoDB Essentials",
      description: "Learn to model and query data with MongoDB.",
      instructor: "Alex Johnson",
      thumbnail: course3,
    },
  ];
  return (
    <section className="relative bg-background py-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full opacity-90 z-0">
        <img
          src={sky}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
          Popular Courses
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Explore Courses from top instructors and developers to
          sharpen your skills.
        </p>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-surface rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            {/* Thumbnail */}
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            {/* Card content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-text mb-2">
                {course.title}
              </h3>
              <p className="text-muted text-sm mb-3">{course.description}</p>
              <p className="text-muted text-xs mb-4">
                Instructor: {course.instructor}
              </p>
              <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
