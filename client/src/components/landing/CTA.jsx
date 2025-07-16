import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="bg-primary text-white py-20 px-6 fade-in">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Ready to Level Up Your Skills?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Join thousands of learners and start your journey today with our comprehensive learning platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/sign-up")}
            className="bg-surface text-primary font-semibold px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
          >
            Get Started for Free
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary hover:scale-105 transition-transform duration-300"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}
