import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaUpload, FaBook, FaDollarSign, FaClock, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import Toast from "../shared/Toast";


export default function CreateCourseModal({ onClose, onCourseCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: "",
    price: "",
    category: "",
    level: "Beginner",
    duration: ""
  });
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [toast, setToast] = useState(null);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleCancel = () => {
    // Check if form has any data
    const hasData = Object.values(formData).some(value => value !== "" && value !== "Beginner");
    
    if (hasData) {
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price) || 0,
          duration: parseInt(formData.duration) || 0
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setTimeout(() => {
          onCourseCreated(data.course);
        }, 1500); // Wait for toast to show before closing modal
      } else {
        setToast({ message: "Failed to create course. Please try again.", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Failed to create course. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Design",
    "Business",
    "Marketing",
    "Photography",
    "Music",
    "Health & Fitness",
    "Language",
    "Other"
  ];

  const getFieldIcon = (fieldName) => {
    const icons = {
      title: FaBook,
      thumbnail: FaUpload,
      price: FaDollarSign,
      duration: FaClock
    };
    return icons[fieldName] || FaBook;
  };

  const isFieldValid = (fieldName) => {
    const value = formData[fieldName];
    if (fieldName === 'title' || fieldName === 'description' || fieldName === 'category') {
      return value && value.trim().length > 0;
    }
    return true;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={handleCancel}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-2xl h-[90vh]">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col h-full">
          {/* Header */}
          <div className="gradient-primary p-6 text-white relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Create New Course</h2>
                  <p className="text-white/90 text-sm">Share your knowledge with the world</p>
                </div>
                <button
                  onClick={handleCancel}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 group"
                >
                  <IoClose size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Form - Scrollable Content */}
          <div className="p-6 overflow-y-auto flex-1 min-h-0 scroll-smooth">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title Section */}
              <div ref={titleRef} className={`space-y-3 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
                <label className="block text-sm font-semibold text-text flex items-center gap-2">
                  <FaBook className="text-primary-500" size={14} />
                  Course Title *
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    onFocus={() => handleFocus('title')}
                    onBlur={handleBlur}
                    placeholder="Enter course title..."
                    className={`w-full p-4 pl-12 border-2 rounded-lg focus:outline-none transition-all duration-300 bg-gray-50 ${
                      focusedField === 'title' 
                        ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                        : isFieldValid('title') 
                          ? 'border-green-300' 
                          : 'border-gray-200'
                    }`}
                    required
                  />
                  <div className={`absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-300 ${
                    focusedField === 'title' ? 'text-primary-500 scale-110' : 'text-gray-400'
                  }`}>
                    <FaBook size={16} />
                  </div>
                  {isFieldValid('title') && formData.title && (
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 text-green-500">
                      <FaCheck size={14} />
                    </div>
                  )}
                </div>
              </div>

              {/* Description Section */}
              <div ref={descriptionRef} className={`space-y-3 ${descriptionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-100`}>
                <label className="block text-sm font-semibold text-text">
                  Description *
                </label>
                <div className="relative group">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onFocus={() => handleFocus('description')}
                    onBlur={handleBlur}
                    placeholder="Describe what students will learn in this course..."
                    rows="6"
                    className={`w-full p-4 border-2 rounded-lg focus:outline-none transition-all duration-300 bg-gray-50 resize-none ${
                      focusedField === 'description' 
                        ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                        : isFieldValid('description') 
                          ? 'border-green-300' 
                          : 'border-gray-200'
                    }`}
                    required
                  />
                  {isFieldValid('description') && formData.description && (
                    <div className="absolute top-4 right-4 text-green-500">
                      <FaCheck size={14} />
                    </div>
                  )}
                </div>
              </div>

              {/* Media Section */}
              <div ref={mediaRef} className={`space-y-3 ${mediaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-200`}>
                <label className="block text-sm font-semibold text-text flex items-center gap-2">
                  <FaUpload className="text-primary-500" size={14} />
                  Thumbnail URL *
                </label>
                <div className="relative group">
                  <input
                    type="url"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    onFocus={() => handleFocus('thumbnail')}
                    onBlur={handleBlur}
                    placeholder="https://example.com/image.jpg"
                    className={`w-full p-4 pl-12 border-2 rounded-lg focus:outline-none transition-all duration-300 bg-gray-50 ${
                      focusedField === 'thumbnail' 
                        ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                        : 'border-gray-200'
                    }`}
                    required
                  />
                  <div className={`absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-300 ${
                    focusedField === 'thumbnail' ? 'text-primary-500 scale-110' : 'text-gray-400'
                  }`}>
                    <FaUpload size={16} />
                  </div>
                </div>
                {formData.thumbnail && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <img 
                      src={formData.thumbnail} 
                      alt="Thumbnail preview" 
                      className="w-full h-32 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-32 bg-gray-200 rounded-lg items-center justify-center text-gray-500">
                      <FaExclamationTriangle size={24} />
                      <span className="ml-2">Invalid image URL</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Category and Level */}
              <div ref={detailsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-300`}>
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-text">
                    Category *
                  </label>
                  <div className="relative group">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      onFocus={() => handleFocus('category')}
                      onBlur={handleBlur}
                      className={`w-full p-4 border-2 rounded-lg focus:outline-none transition-all duration-300 bg-gray-50 appearance-none ${
                        focusedField === 'category' 
                          ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                          : isFieldValid('category') 
                            ? 'border-green-300' 
                            : 'border-gray-200'
                      }`}
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {isFieldValid('category') && formData.category && (
                      <div className="absolute top-1/2 right-12 -translate-y-1/2 text-green-500">
                        <FaCheck size={14} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-text">
                    Level
                  </label>
                  <div className="relative group">
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      onFocus={() => handleFocus('level')}
                      onBlur={handleBlur}
                      className={`w-full p-4 border-2 rounded-lg focus:outline-none transition-all duration-300 bg-gray-50 appearance-none ${
                        focusedField === 'level' 
                          ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                          : 'border-gray-200'
                      }`}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price and Duration */}
              <div ref={pricingRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-400`}>
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-text flex items-center gap-2">
                    <FaDollarSign className="text-primary-500" size={14} />
                    Price ($)
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      onFocus={() => handleFocus('price')}
                      onBlur={handleBlur}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className={`w-full p-4 pl-12 border-2 rounded-lg focus:outline-none transition-all duration-300 bg-gray-50 ${
                        focusedField === 'price' 
                          ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                          : 'border-gray-200'
                      }`}
                    />
                    <div className={`absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'price' ? 'text-primary-500 scale-110' : 'text-gray-400'
                    }`}>
                      <FaDollarSign size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-text flex items-center gap-2">
                    <FaClock className="text-primary-500" size={14} />
                    Duration (minutes)
                  </label>
                  <div className="relative group">
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      onFocus={() => handleFocus('duration')}
                      onBlur={handleBlur}
                      placeholder="0"
                      min="0"
                      className={`w-full p-4 pl-12 border-2 rounded-lg focus:outline-none transition-all duration-300 bg-gray-50 ${
                        focusedField === 'duration' 
                          ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                          : 'border-gray-200'
                      }`}
                    />
                    <div className={`absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'duration' ? 'text-primary-500 scale-110' : 'text-gray-400'
                    }`}>
                      <FaClock size={16} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Fields */}
              <div ref={additionalRef} className={`space-y-6 ${additionalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-500`}>
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-text">
                    Course Objectives
                  </label>
                  <textarea
                    placeholder="What will students achieve by the end of this course?"
                    rows="4"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all duration-300 bg-gray-50 resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-text">
                    Prerequisites
                  </label>
                  <textarea
                    placeholder="What should students know before taking this course?"
                    rows="3"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all duration-300 bg-gray-50 resize-none"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Action Buttons - Fixed at Bottom */}
          <div className="p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 py-3 px-6 gradient-success text-white rounded-lg hover:shadow-glow-hover transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating...
                  </div>
                ) : (
                  "Create Course"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />
    </div>
  );
} 