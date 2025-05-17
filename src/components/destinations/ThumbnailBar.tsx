"use client";

import React from "react";
import Image from "next/image";

interface ThumbnailBarProps {
  images: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const ThumbnailBar = ({ images, activeIndex, onSelect }: ThumbnailBarProps) => {
  return (
    <div className="flex justify-center gap-6 mt-6 pb-6">
      {images.map((img, index) => (
        <div
          key={index}
          className={`relative w-32 h-20 rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
            activeIndex === index
              ? "border-3 border-yellow-400 scale-110"
              : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => onSelect(index)}
        >
          <Image
            src={img}
            alt={`Thumbnail ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailBar;
