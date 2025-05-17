"use client";
import React, { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 py-4 w-full lg:max-w-[80vw] mx-auto">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">
          <span>Wanderlust</span>
          <div className="block md:inline ml-0 md:ml-1 text-lg">Escapes</div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Destinations
          </a>
          <a href="#" className="hover:underline">
            Special Offers
          </a>
          <a href="#" className="hover:underline">
            Travel Tips
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 pb-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Destinations
          </a>
          <a href="#" className="hover:underline">
            Special Offers
          </a>
          <a href="#" className="hover:underline">
            Travel Tips
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
};

export default Menu;
