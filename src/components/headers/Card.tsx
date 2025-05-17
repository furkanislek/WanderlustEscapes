import React from "react";

interface CardProps {
  value: string;
  description: string;
}

const Card = ({ value, description }: CardProps) => {
  return (
    <div className="rounded-lg px-3 sm:px-4 py-3 sm:py-4 w-full bg-white text-black flex flex-col items-center justify-center shadow-md mb-4 sm:mb-0">
      <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#424949] py-1">
        {value}
      </div>
      <div className="text-gray-600 text-xs sm:text-sm text-center">
        {description}
      </div>
    </div>
  );
};

export default Card;
