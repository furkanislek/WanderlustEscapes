"use client";

import React from "react";
import DestinationSlider from "./DestinationSlider";

const TopDestinations = () => {
  return (
    <section className="py-24 bg-teal-100">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Top Destinations at Great Prices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tropical paradises to bustling cities, explore our top picks
            for budget travelers.
          </p>
        </div>

        <DestinationSlider />
      </div>
    </section>
  );
};

export default TopDestinations;
