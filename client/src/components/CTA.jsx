import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatedSection, AnimatedButton } from "./shared/AnimatedComponents";
import { ScrollAnimated } from "./shared/ScrollAnimation";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <AnimatedSection id="contact" className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-20">
      <ScrollAnimated>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Level Up Your Skills?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of learners and start your journey today with our comprehensive learning platform.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <AnimatedButton
            onClick={() => navigate('/sign-up')}
            className="bg-white text-primary-500 font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Get Started for Free
          </AnimatedButton>
          <AnimatedButton
            onClick={() => navigate('/login')}
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-500 transition-all duration-300"
          >
            Sign In
          </AnimatedButton>
        </div>
      </ScrollAnimated>
    </AnimatedSection>
  );
}
