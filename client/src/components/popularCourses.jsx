import React from "react";
import sky from "../assets/sky.jpg";
import course from "../assets/course.jpg";
import course2 from "../assets/course (2).jpg";
import course3 from "../assets/course (3).jpg";
import { AnimatedSection, AnimatedCard, AnimatedImage, AnimatedButton } from "./shared/AnimatedComponents";
import { ScrollAnimated, StaggeredList, StaggeredItem } from "./shared/ScrollAnimation";

export default function PopularCourses() {
  const courses = [
    {
      title: "React Mastery",
      description: "Master building fast and interactive UIs with React.",
      instructor: "John Doe",
      thumbnail: course,
      price: "$89.99",
      rating: 4.8,
      students: 1247
    },
    {
      title: "Node.js Bootcamp",
      description: "Build scalable backends and REST APIs using Node.js.",
      instructor: "Jane Smith",
      thumbnail: course2,
      price: "$79.99",
      rating: 4.9,
      students: 892
    },
    {
      title: "MongoDB Essentials",
      description: "Learn to model and query data with MongoDB.",
      instructor: "Alex Johnson",
      thumbnail: course3,
      price: "$69.99",
      rating: 4.7,
      students: 567
    },
  ];
  
  return (
    <AnimatedSection id="courses" className="relative bg-background py-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full opacity-90 z-0">
        <AnimatedImage
          src={sky}
          alt="Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <ScrollAnimated>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
            Popular Courses
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Explore Courses from top instructors and developers to
            sharpen your skills.
          </p>
        </ScrollAnimated>
      </div>
      
      <StaggeredList className="relative z-10 max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <StaggeredItem key={index}>
            <AnimatedCard className="bg-surface rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Thumbnail */}
              <AnimatedImage
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Card content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-text">
                    {course.title}
                  </h3>
                  <span className="text-primary-500 font-bold">{course.price}</span>
                </div>
                <p className="text-muted text-sm mb-3">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted text-xs">
                    Instructor: {course.instructor}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-muted text-xs">{course.rating}</span>
                    <span className="text-muted text-xs">({course.students})</span>
                  </div>
                </div>
                <AnimatedButton className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm font-semibold">
                  Enroll Now
                </AnimatedButton>
              </div>
            </AnimatedCard>
          </StaggeredItem>
        ))}
      </StaggeredList>
    </AnimatedSection>
  );
}
