"use client";

import React, { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import NavigationButton from "./NavigationButton";
import ThumbnailBar from "./ThumbnailBar";
import Image from "next/image";

interface Destination {
  title: string;
  description: string;
  imageSrc: string;
  price: string;
}

const destinations: Destination[] = [
  {
    title: "Paris Adventure",
    description:
      "Discover the Romance of Paris! A 5-night stay in the heart of the city, including a Seine River cruise and priority access to the Louvre. Only $750 per person!",
    imageSrc: "/photos/bg1.jpg",
    price: "Only $750 per person!",
  },
  {
    title: "Paris Adventure",
    description:
      "Discover the Romance of Paris! A 5-night stay in the heart of the city, including a Seine River cruise and priority access to the Louvre. Only $750 per person!",
    imageSrc: "/photos/bg2.jpg",
    price: "Only $750 per person!",
  },
  {
    title: "Paris Adventure",
    description:
      "Discover the Romance of Paris! A 5-night stay in the heart of the city, including a Seine River cruise and priority access to the Louvre. Only $750 per person!",
    imageSrc: "/photos/bg3.jpeg",
    price: "Only $750 per person!",
  },
  {
    title: "Paris Adventure",
    description:
      "Discover the Romance of Paris! A 5-night stay in the heart of the city, including a Seine River cruise and priority access to the Louvre. Only $750 per person!",
    imageSrc: "/photos/bg4.jpg",
    price: "Only $750 per person!",
  },
  {
    title: "Paris Adventure",
    description:
      "Discover the Romance of Paris! A 5-night stay in the heart of the city, including a Seine River cruise and priority access to the Louvre. Only $750 per person!",
    imageSrc: "/photos/bg5.jpg",
    price: "Only $750 per person!",
  },
];

const DestinationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | "">("");
  const [animating, setAnimating] = useState(false);

  const handlePrev = () => {
    if (animating) return;

    setAnimating(true);
    setDirection("left");
    setActiveIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (animating) return;

    setAnimating(true);
    setDirection("right");
    setActiveIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    if (animating || index === activeIndex) return;

    setAnimating(true);
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
      setDirection("");
    }, 0);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const currentDestination = destinations[activeIndex];
  const images = destinations.map((d) => d.imageSrc);

  return (
    <div className="relative w-full rounded-lg overflow-hidden h-[70vh] min-h-[600px]">
      <div className={`h-full w-full transition-transform duration-500 ease-in-out ${
          animating
            ? direction === "left"
              ? "translate-x-10 opacity-0"
              : "-translate-x-10 opacity-0"
            : ""
        }`}
      >
        <div className="absolute inset-0">
          <Image
            src={currentDestination.imageSrc}
            alt={currentDestination.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-start py-6">
          <div className="text-white p-10 max-w-lg">
            <h3 className="text-5xl font-bold mb-4">
              {currentDestination.title}
            </h3>
            <p className="text-lg mb-4">{currentDestination.description}</p>
            <p className="text-yellow-400 font-semibold">
              {currentDestination.price}
            </p>
          </div>
        </div>
      </div>

      <NavigationButton direction="prev" onClick={handlePrev} />
      <NavigationButton direction="next" onClick={handleNext} />

      <div className="absolute bottom-4 left-0 right-0">
        <ThumbnailBar
          images={images}
          activeIndex={activeIndex}
          onSelect={handleThumbnailClick}
        />
      </div>
    </div>
  );
};

export default DestinationSlider;
