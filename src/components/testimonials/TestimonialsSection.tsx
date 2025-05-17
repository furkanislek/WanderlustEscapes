"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  avatarUrl: string;
  name: string;
  rating: number;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    avatarUrl: "/photos/random1.jpg",
    name: "Emily Torres",
    rating: 5,
    testimonial:
      "My experience with Wanderlust Affordable Tourism was absolutely amazing. I needed a very affordable package. Their customer service was incredibly helpful, and my journey was seamless from start to finish. I can't wait to plan my next adventure with them!",
  },
  {
    id: 2,
    avatarUrl: "/photos/random2.jpg",
    name: "Alex Johnson",
    rating: 5,
    testimonial:
      "As an experienced backpacker, I was surprised at how efficient and valuable Wanderlust Affordable Escape services were. They offered a range of choices that suited my budget without sacrificing quality. My trip to Costa Rica was the perfect mix of adventure and relaxation. I highly recommend their services to anyone looking for quality travel at a reasonable price.",
  },
  {
    id: 3,
    avatarUrl: "/photos/random3.jpg",
    name: "Aisha Patel",
    rating: 5,
    testimonial:
      "I've always wanted to visit Paris, and Wanderlust Affordable Escapes made that dream come true at an incredible price. Every detail of the trip was perfectly arranged, and I was impressed with their hotel and tour selections. Truly an unforgettable experience!",
  },
  {
    id: 4,
    avatarUrl: "/photos/random4.jpg",
    name: "Claire Zhang",
    rating: 5,
    testimonial:
      "I just returned from my solo adventure to Iceland, organized by Wanderlust Affordable Escapes. I was impressed with their attention to detail and knowledge about the destination. They truly listened to my needs and preferences, making this trip very personal and special",
  },
];

interface TestimonialsSectionProps {
  customTestimonials?: Testimonial[];
}

const TestimonialsSection = ({
  customTestimonials,
}: TestimonialsSectionProps) => {
  const displayTestimonials = customTestimonials || testimonials;

  return (
    <section className="py-16  max-w-[80vw] lg:max-w-[60vw] mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Hear from Our Happy Travelers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our customers share their memorable travel experiences booked
            through us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {displayTestimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              avatarUrl={item.avatarUrl}
              name={item.name}
              rating={item.rating}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
