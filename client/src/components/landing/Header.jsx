import React, { useState } from "react";
import hamburger from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Top Navigation */}
      <header className="bg-surface text-text border-b border-surface px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-40 backdrop-blur-md">
        <div
          onClick={() => navigate("/")}
          className="text-primary font-display text-2xl font-bold hover:scale-105 transition-transform cursor-pointer"
        >
          EduVerse
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="text-text hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-text hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#" className="text-text hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="text-text hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button
            className="text-text px-5 py-2 rounded-lg border border-surface hover:border-primary hover:text-primary transition duration-200"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg transition duration-200 shadow-sm"
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-muted/10 transition"
        >
          <img src={hamburger} alt="Menu" className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 px-6 py-6">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-8">
            <div
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
              className="text-primary font-display text-2xl font-bold cursor-pointer"
            >
              EduVerse
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-muted/10 hover:bg-muted/20 transition"
            >
              <IoClose size={24} className="text-text" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <a href="#" className="text-text hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-text hover:text-primary transition-colors">
              Courses
            </a>
            <a href="#" className="text-text hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-text hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-4 mt-10">
            <button
              className="text-text px-6 py-3 border border-surface rounded-lg hover:border-primary hover:text-primary transition"
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition"
              onClick={() => {
                navigate("/sign-up");
                setIsOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}
