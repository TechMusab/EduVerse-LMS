import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import review1 from "../assets/review (1).jpg";
import review2 from "../assets/review (2).jpg";
import review3 from "../assets/review (3).jpg";
import { AnimatedSection, AnimatedCard, AnimatedImage } from "./shared/AnimatedComponents";
import { ScrollAnimated, StaggeredList, StaggeredItem } from "./shared/ScrollAnimation";

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
    <AnimatedSection className="bg-background w-full mt-10 py-16">
      <ScrollAnimated className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          What Our Students Say
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Hear from our community of learners who have transformed their careers with EduVerse
        </p>
      </ScrollAnimated>
      
      <StaggeredList className="max-w-xl mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <StaggeredItem>
                <AnimatedCard className="bg-surface p-6 md:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <AnimatedImage
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 my-6 rounded-full object-cover mx-auto border-4 border-primary-100"
                    src={review.image}
                    alt={review.name}
                  />
                  <h3 className="text-text text-xl font-semibold mb-3">{review.name}</h3>
                  <p className="text-muted italic mb-4 text-lg leading-relaxed">"{review.review}"</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </AnimatedCard>
              </StaggeredItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </StaggeredList>
    </AnimatedSection>
  );
}
