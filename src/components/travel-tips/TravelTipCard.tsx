"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TravelTipCardProps {
  imageUrl: string;
  title: string;
  description: string;
  readMoreLink: string;
}

const TravelTipCard = ({
  imageUrl,
  title,
  description,
  readMoreLink,
}: TravelTipCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-gray-100">
      <div className="w-full md:w-1/3">
        <div className="relative h-48 w-full bg-emerald-600 rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm text-justify">{description}</p>
        <Link
          href={readMoreLink}
          className="inline-block px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-colors text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default TravelTipCard;
