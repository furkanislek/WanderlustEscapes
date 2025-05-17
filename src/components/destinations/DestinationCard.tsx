"use client";

import React from "react";
import Image from "next/image";

interface DestinationCardProps {
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  isActive: boolean;
  direction: "next" | "prev" | "initial";
  animationComplete: () => void;
}

const DestinationCard = ({
  title,
  description,
  imageSrc,
  price,
  isActive,
  direction,
  animationComplete,
}: DestinationCardProps) => {
  const getTransitionClasses = () => {
    if (isActive) {
      return "opacity-100 translate-x-0 z-20";
    }

    if (direction === "next") {
      return "opacity-0 -translate-x-full z-10";
    }

    if (direction === "prev") {
      return "opacity-0 translate-x-full z-10";
    }

    return "opacity-0 translate-x-full z-0";
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-700 ease-in-out ${getTransitionClasses()}`}
      onTransitionEnd={isActive ? animationComplete : undefined}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-start py-6 px-10">
        <div
          className={`text-white p-10 max-w-lg transition-all duration-700 delay-100 ${
            isActive
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-10 scale-105"
          }`}
        >
          <h3 className="text-2xl lg:text-5xl font-bold mb-4">{title}</h3>
          <p className="text-lg mb-4">{description}</p>
          <p className="text-yellow-400 font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
