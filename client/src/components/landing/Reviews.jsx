import React from "react";
import review1 from "../../assets/review (1).jpg";
import review2 from "../../assets/review (2).jpg";
import review3 from "../../assets/review (3).jpg";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "This course was amazing! I learned so much and the instructors were very helpful.",
      rating: 5,
      image: review1,
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "I really enjoyed the hands-on approach of this course. Highly recommend!",
      rating: 4,
      image: review2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      review:
        "Great content and well-structured. I feel more confident in my skills now.",
      rating: 5,
      image: review3,
    },
  ];

  return (
    <section className="bg-background w-full py-20 px-6 fade-in">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          What Our Students Say
        </h2>
        <p className="text-muted text-lg">
          Hear from our learners who’ve transformed their careers with <span className="text-text font-semibold">EduVerse</span>
        </p>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-surface p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Avatar */}
            <img
              src={review.image}
              alt={`Profile of ${review.name}`}
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full object-cover border-4 border-primary"
            />

            {/* Reviewer Name */}
            <h3 className="text-text text-lg font-semibold mb-2">
              {review.name}
            </h3>

            {/* Review Text */}
            <p className="text-muted italic text-base leading-relaxed mb-4">
              “{review.review}”
            </p>

            {/* Star Rating */}
            <div className="flex justify-center gap-1">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
              {[...Array(5 - review.rating)].map((_, i) => (
                <span key={i} className="text-gray-300 text-lg">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
