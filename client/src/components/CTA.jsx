import React from "react";

export default function CTA() {
  return (
    <>
      <section className="bg-surface border text-text text-center py-14 mt-6">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Level Up Your Skills?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of learners and start your journey today.
        </p>
        <a
          href="/signup"
          className="bg-secondary-500 text-secondary-text font-semibold px-6 py-3 rounded-lg hover:bg-secondary-hover"
        >
          Get Started for Free
        </a>
      </section>
    </>
  );
}
