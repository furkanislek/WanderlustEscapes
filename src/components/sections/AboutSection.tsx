import React from "react";
import Image from "next/image";
import WanderlustInfo from "./WanderlustInfo";

const AboutSection = () => {
  return (
    <div className="md:mt-12 mt-52 max-w-[80vw] lg:max-w-[60vw] mx-auto">
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Making Travel Accessible and Affordable
          </h2>
          <p className="text-gray-600">
            Learn more about how we curate the best travel experiences without
            breaking your budget
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="bg-blue-400 p-6 rounded-lg relative">
            <Image
              src="/svgs/travel.svg"
              alt="Travel Illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <WanderlustInfo />
    </div>
  );
};

export default AboutSection;
