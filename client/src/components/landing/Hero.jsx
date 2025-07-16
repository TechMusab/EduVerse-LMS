import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/hero-background.mp4";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-text">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={background}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-sm" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-surface mb-6 max-w-4xl leading-tight tracking-tight drop-shadow-md">
          Master Real-World Skills with <span className="text-primary">EduVerse</span>
        </h1>
        <p className="text-lg md:text-2xl text-muted max-w-2xl mb-10">
          Learn from top instructors anytime, anywhere with our comprehensive online learning platform.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <button
            onClick={() => navigate("/sign-up")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition duration-300"
          >
            Get Started
          </button>
          <a
            href="#features"
            className="border border-surface text-surface hover:bg-surface hover:text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-sm"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </section>
  );
}
