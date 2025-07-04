import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="p-3 bg-background flex justify-between items-center shadow-md">
        <a
          href="#"
          className="text-primary-500 font-display text-xl font-semibold md:2xl"
        >
          EduVerse
        </a>

        <div className="hidden md:flex gap-4">
          <a className="text-text hover:text-primary-500 transition" href="#">
            Home
          </a>
          <a className="text-text hover:text-primary-500 transition" href="#">
            Courses
          </a>
          <a className="text-text hover:text-primary-500 transition" href="#">
            About
          </a>
        </div>

        <div className="hidden md:flex gap-4">
          <a
            className="text-secondary-text px-4 py-2 rounded-lg cursor-pointer bg-secondary-500 hover:bg-secondary-hover"
            onClick={()=>navigate('/login')}
          >
            Login
          </a>
          <a
            className="text-primary-text px-4 py-2 rounded-lg cursor-pointer bg-primary-500 hover:bg-primary-hover"
            onClick={()=>navigate('/sign-up')}
          >
            Sign Up
          </a>
        </div>

        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <img src={hamburger} alt="Menu" className="w-8 h-8" />
        </button>
      </nav>

    
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

          <div className="flex flex-col gap-4 mt-6 w-full">
            <a
              className="text-secondary-text text-center px-6 py-3 rounded-lg bg-secondary-500 cursor-pointer hover:bg-secondary-hover"
              onClick={()=>navigate('/login')}
            >
              Login
            </a>
            <a
              className="text-primary-text text-center px-6 py-3 rounded-lg bg-primary-500 cursor-pointer hover:bg-primary-hover"
              onClick={()=>navigate('/sign-up')}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </>
  );
}
