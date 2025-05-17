"use client";

import React from "react";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const NavigationButton = ({ direction, onClick }: NavigationButtonProps) => {
  return (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center z-10 hover:bg-yellow-500 transition duration-200 shadow-lg hover:scale-110"
      style={{ [direction === "prev" ? "left" : "right"]: "30px" }}
      onClick={onClick}
      aria-label={direction === "prev" ? "Önceki" : "Sonraki"}
    >
      {direction === "prev" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
};

export default NavigationButton;
