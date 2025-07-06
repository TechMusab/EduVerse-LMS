import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import review from "../../assets/review (1).jpg";
import hamburger from "../../assets/hamburger.svg";

export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-surface p-6 shadow-xl flex justify-between items-center">
        <a
          href="#"
          className="text-primary-500 font-display text-xl font-semibold md:2xl"
        >
          EduVerse
        </a>
        <h3 className="hidden text-text font-bold text-display text-xl lg:block lg:text-2xl">Dashboard</h3>
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
        <div className="hidden md:flex justify-center items-center gap-6">
          <MdMessage className="cursor-pointer" size={24} />
          <IoIosNotifications className="cursor-pointer" size={24} />
          <div className="flex justify-center items-center gap-4">
            <img
              className="w-8 h-8 rounded-full object-cover cursor-pointer"
              src={review}
              alt="profile pix"
            />
            <p className="text-muted text-semibold">John Doe</p>
            <MdKeyboardArrowDown className="cursor-pointer" size={24} />
          </div>
        </div>
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <img src={hamburger} alt="Menu" className="w-8 h-8" />
        </button>
      </header>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-background z-50 flex flex-col justify-start items-start px-6 py-6 space-y-6">
       
          <button
            onClick={() => setIsOpen(false)}
            className="self-end mb-4"
          >
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
          <a
              className="text-secondary-text text-center px-6 py-3 rounded-lg bg-primary-500 cursor-pointer hover:bg-primary-600"
              
            >
              Profile
            </a>
            <a
              className="text-secondary-text text-center px-6 py-3 rounded-lg bg-secondary-500 cursor-pointer hover:bg-secondary-hover"
              
            >
              Logout
            </a>
            
           
          </div>
        </div>
      )}
    </>
  );
}
