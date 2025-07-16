import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaLinkedin, FaUserGraduate, FaLightbulb } from "react-icons/fa";
import review from "../../assets/review (1).jpg";
import hamburger from "../../assets/hamburger.svg";
// Remove: import { useToast } from "../shared/ToastContext";
import { updateUserRole, fetchProfile } from "../../redux/Slices/authSlice";
import Toast from "../shared/Toast";

export default function Topbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // Remove: const { showSuccess, showError } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
    expertise: "",
    linkedin: "",
  });
  const [toast, setToast] = useState(null);
  
  const handleinstructorform = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/users/become-instructor",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      
      const data = await response.json();
      
      if (response.ok) {
        // Refetch user profile to get the latest data from database
        await dispatch(fetchProfile());
        
        // showSuccess("Congratulations! You are now an instructor!"); // Removed toast
        closeModal();
        
        // Clear form data
        setFormData({
          bio: "",
          expertise: "",
          linkedin: "",
        });
      } else {
        // showError(data.message || "Failed to become instructor"); // Removed toast
        setToast({ message: data.message || "Failed to become instructor", type: "error" });
      }
    } catch (error) {
      console.error("Network error:", error);
      setToast({ message: "Network error. Please try again.", type: "error" });
    }
  };
  return (
    <>
      <header className="bg-surface p-6 shadow-xl flex justify-between items-center">
        <a
          href="#"
          className="text-primary-500 font-display text-xl font-semibold md:2xl"
        >
          EduVerse
        </a>
        <h3 className="hidden text-text font-bold text-display text-xl lg:block lg:text-2xl">
          Dashboard
        </h3>
        <div className="relative w-full max-w-sm">
          <CiSearch
            size={18}
            className="absolute top-1/2 left-8 lg:left-3 -translate-y-1/2 text-primary-500"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-[90%] m-4 lg:w-full lg:m-0 py-2 pl-10 pr-4 rounded-2xl border border-gray-300 bg-gray-100 text-sm text-text focus:outline-none focus:border-primary-500"
          />
        </div>

        {/* Only show "Become Instructor" button for students */}
        {user?.role === "student" && (
          <button
            onClick={handleinstructorform}
            className="hidden lg:block gradient-primary px-4 py-2 rounded-lg text-primary-text cursor-pointer hover:shadow-glow-hover transition-all duration-300 animate-fade-in"
          >
            Become Instructor
          </button>
        )}

        <div className="hidden lg:flex justify-center items-center gap-6">
          <MdMessage className="cursor-pointer hover:text-primary-500 transition-colors" size={24} />
          <IoIosNotifications className="cursor-pointer hover:text-primary-500 transition-colors" size={24} />
          <div className="flex justify-center items-center gap-4">
            <img
              className="w-8 h-8 rounded-full object-cover cursor-pointer shadow-glow"
              src={user?.instructorProfile?.profilePicture || review}
              alt="profile pic"
            />
            <p className="text-text text-semibold">{user?.username || "User"}</p>
            <MdKeyboardArrowDown className="cursor-pointer hover:text-primary-500 transition-colors" size={24} />
          </div>
        </div>
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <img src={hamburger} alt="Menu" className="w-8 h-8" />
        </button>
      </header>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-background z-50 flex flex-col justify-start items-start px-6 py-6 space-y-6">
          <button onClick={() => setIsOpen(false)} className="self-end mb-4">
            <span className="text-3xl text-text">×</span>
          </button>

          {/* Nav Links */}
          <a className="text-text text-lg hover:text-primary-500 transition-colors" href="#">
            Home
          </a>
          <a className="text-text text-lg hover:text-primary-500 transition-colors" href="#">
            Courses
          </a>
          <a className="text-text text-lg hover:text-primary-500 transition-colors" href="#">
            About
          </a>
          <a className="text-text text-lg hover:text-primary-500 transition-colors" href="#">
            Notfications
          </a>
          <a className="text-text text-lg hover:text-primary-500 transition-colors" href="#">
            Messages
          </a>

          <div className="flex flex-col gap-4 mt-6 w-full">
            <a className="text-secondary-text text-center px-6 py-3 rounded-lg gradient-primary cursor-pointer hover:shadow-glow-hover transition-all duration-300">
              Profile
            </a>
            {/* Only show "Become Instructor" button for students in mobile menu */}
            {user?.role === "student" && (
              <button
                onClick={handleinstructorform}
                className="gradient-primary px-4 py-2 rounded-lg text-primary-text cursor-pointer hover:shadow-glow-hover transition-all duration-300"
              >
                Become Instructor
              </button>
            )}
            <a className="text-secondary-text text-center px-6 py-3 rounded-lg gradient-secondary cursor-pointer hover:shadow-glow-hover transition-all duration-300">
              Logout
            </a>
          </div>
        </div>
      )}

      {/* Beautiful Aesthetic Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop with blur effect */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={closeModal}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-lg animate-slide-up">
            {/* Glass morphism card */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Header with gradient */}
              <div className="gradient-primary p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">Become an Instructor</h2>
                      <p className="text-white/90 text-sm">Share your knowledge and inspire learners</p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 group"
                    >
                      <IoClose size={20} className="group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Feature highlights */}
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-white/20">
                        <FaUserGraduate size={14} />
                      </div>
                      <span className="text-xs">Teach & Inspire</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-white/20">
                        <FaLightbulb size={14} />
                      </div>
                      <span className="text-xs">Share Expertise</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Bio Field */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-text">
                      Tell us about yourself
                    </label>
                    <div className="relative">
                      <textarea
                        name="bio"
                        placeholder="Share your teaching experience and background..."
                        value={formData.bio}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all duration-300 bg-gray-50 resize-none"
                        required
                      />
                      <div className="absolute top-3 right-3 text-gray-400">
                        <FaUserGraduate size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Expertise Field */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-text">
                      Your areas of expertise
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="expertise"
                        placeholder="e.g., Web Development, Data Science, Design..."
                        value={formData.expertise}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all duration-300 bg-gray-50"
                        required
                      />
                      <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                        <FaLightbulb size={14} />
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Field */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-text">
                      LinkedIn Profile (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-all duration-300 bg-gray-50"
                      />
                      <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                        <FaLinkedin size={14} />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Help students connect with you professionally</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 py-2.5 px-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 px-4 gradient-success text-white rounded-lg hover:shadow-glow-hover transition-all duration-300 font-semibold text-sm"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <Toast message={toast?.message} type={toast?.type} onClose={() => setToast(null)} />

    </>
  );
}
