import React from "react";

export default function Features() {
  return (
    <>
      <div className="overflow-hidden whitespace-nowrap bg-background py-8">
        <div className="inline-block animate-marquee text-text text-xl font-medium">
          <span className="mx-8">Learn from top instructors</span>
          <span className="inline-block w-4 h-4 rounded-full mx-4 bg-primary-500"></span>
          <span className="mx-8">Hands-on Projects</span>
          <span className="inline-block w-4 h-4 rounded-full mx-4 bg-primary-500"></span>
          <span className="mx-8">Certificates of Completion</span>
          <span className="inline-block w-4 h-4 rounded-full mx-4 bg-primary-500"></span>
          <span className="mx-8">Study at your own pace</span>
          <span className="inline-block w-4 h-4 rounded-full mx-4 bg-primary-500"></span>
          <span className="mx-8">Mobile-friendly platform</span>
        </div>
      </div>
    </>
  );
}
