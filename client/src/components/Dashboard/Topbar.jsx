import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import review from "../../assets/review (1).jpg";
import hamburger from "../../assets/hamburger.svg";
import Toast from "../Toast";
export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    bio: "",
    expertise: "",
    linkedin: "",
  });
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
            Authorization: token,
          },
          body: JSON.stringify(formData),
        }
      );
        const data = await response.json();
        //toast
        setToast({ message: data.message, type: "success" });
        setTimeout(() => {
          setToast(null);
          closeModal();
        }, 3000);
    } catch (error) {
      console.error("Network error:", error);
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

        <button
          onClick={handleinstructorform}
          className="hidden  lg:block bg-primary-500 px-4 py-2 rounded-lg text-primary-text cursor-pointer hover:bg-primary-600"
        >
          Become Instructor
        </button>
        <div className="hidden lg:flex justify-center items-center gap-6">
          <MdMessage className="cursor-pointer" size={24} />
          <IoIosNotifications className="cursor-pointer" size={24} />
          <div className="flex justify-center items-center gap-4">
            <img
              className="w-8 h-8 rounded-full object-cover cursor-pointer"
              src={review}
              alt="profile pic"
            />
            <p className="text-text text-semibold">John Doe</p>
            <MdKeyboardArrowDown className="cursor-pointer" size={24} />
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
          <a className="text-text text-lg hover:text-primary-500" href="#">
            Home
          </a>
          <a className="text-text text-lg hover:text-primary-500" href="#">
            Courses
          </a>
          <a className="text-text text-lg hover:text-primary-500" href="#">
            About
          </a>
          <a className="text-text text-lg hover:text-primary-500" href="#">
            Notfications
          </a>
          <a className="text-text text-lg hover:text-primary-500" href="#">
            Messages
          </a>

          <div className="flex flex-col gap-4 mt-6 w-full">
            <a className="text-secondary-text text-center px-6 py-3 rounded-lg bg-primary-500 cursor-pointer hover:bg-primary-600">
              Profile
            </a>
            <button
              onClick={handleinstructorform}
              className=" bg-primary-500 px-4 py-2 rounded-lg text-primary-text cursor-pointer hover:bg-primary-600"
            >
              Become Instructor
            </button>
            <a className="text-secondary-text text-center px-6 py-3 rounded-lg bg-secondary-500 cursor-pointer hover:bg-secondary-hover">
              Logout
            </a>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Become an Instructor</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="bio"
                placeholder="Your Bio"
                value={formData.bio}
                onChange={handleChange}
                className="block w-full mb-2 border p-2 rounded"
                required
              />
              <input
                type="text"
                name="expertise"
                placeholder="Your Expertise"
                value={formData.expertise}
                onChange={handleChange}
                className="block w-full mb-2 border p-2 rounded"
                required
              />
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile (optional)"
                value={formData.linkedin}
                onChange={handleChange}
                className="block w-full mb-4 border p-2 rounded"
              />
              {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
