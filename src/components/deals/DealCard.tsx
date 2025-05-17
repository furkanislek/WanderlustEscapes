"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DealCardProps {
  title: string;
  imageUrl: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const DealCard = ({
  title,
  imageUrl,
  description,
  ctaText,
  ctaLink,
}: DealCardProps) => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium text-gray-800 mb-3">{title}</h3>

      <div className="relative h-64 w-full mb-3 bg-emerald-600 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="mt-auto">
        <Link
          href={"#"}
          className="w-full inline-block py-3 bg-yellow-500 hover:bg-yellow-600 text-center text-white font-medium rounded-md transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default DealCard;
