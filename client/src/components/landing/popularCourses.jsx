import React from "react";
import sky from "../../assets/sky.jpg";
import course from "../../assets/course.jpg";
import course2 from "../../assets/course (2).jpg";
import course3 from "../../assets/course (3).jpg";

export default function PopularCourses() {
  const courses = [
    {
      title: "React Mastery",
      description: "Master building fast and interactive UIs with React.",
      instructor: "John Doe",
      thumbnail: course,
      price: "$89.99",
      rating: 4.8,
      students: 1247,
    },
    {
      title: "Node.js Bootcamp",
      description: "Build scalable backends and REST APIs using Node.js.",
      instructor: "Jane Smith",
      thumbnail: course2,
      price: "$79.99",
      rating: 4.9,
      students: 892,
    },
    {
      title: "MongoDB Essentials",
      description: "Learn to model and query data with MongoDB.",
      instructor: "Alex Johnson",
      thumbnail: course3,
      price: "$69.99",
      rating: 4.7,
      students: 567,
    },
  ];

  return (
    <section id="courses" className="relative bg-background py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img
          src={sky}
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Popular Courses
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Explore curated content from experienced instructors to sharpen your skills.
        </p>
      </div>

      {/* Course Cards */}
      <div className="relative z-10 mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-surface rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Thumbnail */}
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-text">
                  {course.title}
                </h3>
                <span className="text-primary font-bold text-sm">{course.price}</span>
              </div>

              <p className="text-muted text-sm mb-3">{course.description}</p>

              <div className="flex items-center justify-between mb-4 text-xs text-muted">
                <span>Instructor: {course.instructor}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>{course.rating}</span>
                  <span>({course.students})</span>
                </div>
              </div>

              <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-200 text-sm font-medium">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
