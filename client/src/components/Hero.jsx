import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/hero-background.mp4";
import { AnimatedSection, AnimatedButton } from "./shared/AnimatedComponents";
import { SmoothLink } from "./shared/SmoothScroll";

export default function Hero() {
    const [animateText, setAnimateText] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => setAnimateText(true), 300); 
      }, []);
  return (
    <AnimatedSection className="h-screen w-full relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={background}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 md:px-16">
        <AnimatedSection 
          className="text-center"
          variant="fadeInDown"
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white max-w-5xl mb-6">
            Master Real-World Skills with{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              EduVerse.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Learn from top instructors anytime, anywhere with our comprehensive online learning platform
          </p>
        </AnimatedSection>
        
        <AnimatedSection 
          className="flex gap-4 flex-col sm:flex-row"
          variant="fadeInUp"
          transition={{ delay: 0.6 }}
        >
          <AnimatedButton
            onClick={() => navigate('sign-up')}
            className="gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-glow-hover transition-all duration-300"
          >
            Get Started
          </AnimatedButton>
          <SmoothLink
            to="features"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Browse Courses
          </SmoothLink>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
