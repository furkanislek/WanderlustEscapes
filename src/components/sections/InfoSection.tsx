"use client";

import React from "react";
import Image from "next/image";

interface InfoSectionProps {
  src: string;
  h2text: string;
  ptext: string;
  extraContent?: React.ReactNode;
}

const InfoSection = ({
  src,
  h2text,
  ptext,
  extraContent,
}: InfoSectionProps) => {
  return (
    <div className="py-4 px-4   max-w-[60vw]">
      <div className="flex items-center">
        <div className="w-1/3 flex justify-end pr-4">
          <div className="relative">
            <Image
              src={src}
              alt={h2text}
              width={120}
              height={120}
              className="h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/svgs/travel.svg";
              }}
            />
          </div>
        </div>

        <div className="w-2/3 pl-4">
          <h3 className="text-2xl font-bold mb-2 text-blue-600 text-justify">
            {h2text}
          </h3>
          <p className="text-gray-600 text-justify ">{ptext}</p>
          {extraContent}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
