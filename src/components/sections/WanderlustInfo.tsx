import React from "react";
import { InfoSection } from "./index";

const WanderlustInfo = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto max-w-[100vw] lg:max-w-[80vw]">
        <div className="grid md:grid-cols-2 gap-12">
          <InfoSection
            src="/svgs/ourmission.svg"
            h2text="Our Mission"
            ptext="At Wanderlust affordable tourism, our mission is to give affordable travel opportunities for everyone. We believe everyone should be able to experience how a truly relevant travel experience enriches lives."
          />
          <InfoSection
            src="/svgs/ourjourney.svg"
            h2text="Our Journey"
            ptext="Founded in 2019 by a group of travel enthusiasts, Wanderlust started with a passion for something more budget travel tips."
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <InfoSection
            src="/svgs/whychooseus.svg"
            h2text="Why Choose Us"
            ptext="Our extensive network includes carefully curated destinations worldwide, offering you a wide range of choices."
          />
          <InfoSection
            src="/svgs/ourpromisetoyou.svg"
            h2text="Our Promise To You"
            ptext="We do more than just provide information—we're committed to making your getaway as memorable as possible. At Wanderlust Affordable Tourism, your journey matters."
          />
        </div>
      </div>
    </div>
  );
};

export default WanderlustInfo;
