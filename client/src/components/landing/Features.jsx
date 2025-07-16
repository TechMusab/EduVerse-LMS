import React from "react";

export default function Features() {
  const features = [
    "Learn from top instructors",
    "Hands-on Projects",
    "Certificates of Completion",
    "Study at your own pace",
    "Mobile-friendly platform",
  ];

  return (
    <section
      id="features"
      className="bg-surface text-text fade-in py-12 px-6 md:px-16 mb-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary tracking-tight">
          Why Choose EduVerse?
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <span className="w-3 h-3 rounded-full bg-primary transition-transform group-hover:scale-110"></span>
              <span className="text-base sm:text-lg font-medium text-text hover:text-primary cursor-pointer transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
