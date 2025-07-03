import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import review1 from "../assets/review (1).jpg";
import review2 from "../assets/review (2).jpg";
import review3 from "../assets/review (3).jpg";

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
    <>
      <section className="bg-background w-full mt-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text -text mb-6">
          What Our Students Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="max-w-xl mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
        >
          {reviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-surface p-4 md:p-6 rounded-xl shadow text-center">
                  <img
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-46 md:h-46 my-4 rounded-full object-cover mx-auto"
                    src={review.image}
                    alt=""
                  />
                  <h3 className="text-text text-semibold">{review.name}</h3>
                  <p className="text-muted italic mb-4">"{review.review}"</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
