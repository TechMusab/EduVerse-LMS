import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/hero-background.mp4";

export default function Hero() {
    const [animateText, setAnimateText] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => setAnimateText(true), 300); 
      }, []);
  return (
    <>
    <section className="h-screen w-full relative overflow-hidden">

   
      <video autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
       src={background}>
        
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 md:px-16">
      <h1
          className={`text-4xl md:text-4xl font-display font-bold text-primary-text max-w-5xl transition-all duration-1000 ${
            animateText ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          Master Real-World Skills with <span className="text-primary-500">EduVerse.</span>
        </h1>
        <p
          className={`mt-4 text-xl md:text-2xl text-white max-w-xl transition-all duration-1000 delay-300 ${
            animateText ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          Learn from top instructors anytime, anywhere 
        </p>
        <div className="mt-8 flex gap-4">
          <a
            onClick={()=>navigate('sign-up')}
            className="bg-primary-500 hover:bg-primary-hover text-primary-text 
            rounded-lg flex items-center justify-center px-4 py-2 font-medium cursor-pointer transition md:px-6 md:py-3 "
          >
            Get Started
          </a>
          <a
            href="#"
            className="border border-white text-white hover:bg-white hover:text-primary-500 px-4 py-2 md:px-6 md:py-3 rounded-lg text-lg font-medium transition"
          >
            Browse Courses
          </a>
        </div>
      </div>
      </section>
    </>
  );
}
