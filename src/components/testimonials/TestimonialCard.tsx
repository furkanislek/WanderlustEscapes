"use client";

import React, { useState } from "react";
import Image from "next/image";
import StarRating from "./StarRating";

interface TestimonialCardProps {
  avatarUrl: string;
  name: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard = ({
  avatarUrl,
  name,
  rating,
  testimonial,
}: TestimonialCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 rounded-full overflow-hidden bg-emerald-500 mb-4 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            width={144}
            height={144}
            className="object-cover w-full h-full"
            onError={() => setImageError(true)}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTBiOTgxIi8+PC9zdmc+"
            priority={false}
          />
        ) : (
          <span className="text-white text-2xl font-bold">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="mb-3 flex justify-center">
          <StarRating rating={rating} />
        </div>
        <p className="text-gray-600 text-sm text-justify">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
