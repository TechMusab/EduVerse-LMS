import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { AnimatedSection, AnimatedButton } from "./shared/AnimatedComponents";
import { SmoothLink } from "./shared/SmoothScroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <AnimatedSection 
        className="bg-surface/95 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-40"
        variant="fadeInDown"
      >
        <AnimatedSection 
          className="text-primary-500 font-display text-2xl font-bold hover:scale-105 transition-transform cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          EduVerse
        </AnimatedSection>

        <div className="hidden md:flex gap-8">
          <SmoothLink to="hero" className="text-text hover:text-primary-500 transition-colors font-medium">
            Home
          </SmoothLink>
          <SmoothLink to="courses" className="text-text hover:text-primary-500 transition-colors font-medium">
            Courses
          </SmoothLink>
          <SmoothLink to="about" className="text-text hover:text-primary-500 transition-colors font-medium">
            About
          </SmoothLink>
          <SmoothLink to="contact" className="text-text hover:text-primary-500 transition-colors font-medium">
            Contact
          </SmoothLink>
        </div>

        <div className="hidden md:flex gap-4">
          <AnimatedButton
            className="text-text px-6 py-2.5 rounded-lg border-2 border-gray-300 hover:border-primary-500 hover:text-primary-500 transition-all duration-300 font-semibold"
            onClick={() => navigate('/login')}
          >
            Login
          </AnimatedButton>
          <AnimatedButton
            className="gradient-primary text-white px-6 py-2.5 rounded-lg hover:shadow-glow-hover transition-all duration-300 font-semibold"
            onClick={() => navigate('/sign-up')}
          >
            Sign Up
          </AnimatedButton>
        </div>

        <AnimatedButton 
          onClick={() => setIsOpen(true)} 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <img src={hamburger} alt="Menu" className="w-6 h-6" />
        </AnimatedButton>
      </AnimatedSection>

      {/* Mobile Menu */}
      {isOpen && (
        <AnimatedSection 
          className="fixed top-0 left-0 w-full h-full bg-background/95 backdrop-blur-md z-50 flex flex-col justify-start items-start px-6 py-6 space-y-6"
          variant="fadeInRight"
        >
          <div className="flex justify-between items-center w-full mb-8">
            <a
              href="#"
              className="text-primary-500 font-display text-2xl font-bold"
            >
              EduVerse
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <IoClose size={24} className="text-text" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-6 w-full">
            <a className="text-text text-xl hover:text-primary-500 transition-colors font-medium border-b border-gray-100 pb-2" href="#">
              Home
            </a>
            <a className="text-text text-xl hover:text-primary-500 transition-colors font-medium border-b border-gray-100 pb-2" href="#">
              Courses
            </a>
            <a className="text-text text-xl hover:text-primary-500 transition-colors font-medium border-b border-gray-100 pb-2" href="#">
              About
            </a>
            <a className="text-text text-xl hover:text-primary-500 transition-colors font-medium border-b border-gray-100 pb-2" href="#">
              Contact
            </a>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-4 mt-8 w-full">
            <button
              className="text-text text-center px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-primary-500 hover:text-primary-500 transition-all duration-300 font-semibold"
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="gradient-primary text-white text-center px-6 py-3 rounded-lg hover:shadow-glow-hover transition-all duration-300 font-semibold"
              onClick={() => {
                navigate('/sign-up');
                setIsOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </AnimatedSection>
      )}
    </>
  );
}
