"use client";

import React from "react";
import TravelTipCard from "./TravelTipCard";

interface TravelTip {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  readMoreLink: string;
}

const travelTips: TravelTip[] = [
  {
    id: 1,
    imageUrl: "/photos/deals1.jpg",
    title: "Hidden Gems in Europe for Budget Travelers",
    description:
      "Discover five breathtaking, budget-friendly European destinations away from the usual tourist track. From the charming streets of Porto to the vibrant culture of Riga, find out how to enjoy these gems without overspending.",
    readMoreLink: "#",
  },
  {
    id: 2,
    imageUrl: "/photos/deals2.jpg",
    title: "Budget Accommodations: Choosing the Right Place to Stay",
    description:
      "Find out how to select accommodations that are both affordable and comfortable. From hostels to budget hotels, we provide insights on getting the best value for your stay",
    readMoreLink: "#",
  },
  {
    id: 3,
    imageUrl: "/photos/deals3.jpg",
    title: "Local Eats: How to Find Affordable Food on Your Travels",
    description:
      "Dive into the world of delicious and affordable food cuisines. Our guide helps you find hidden culinary gems that offer the true taste of the locale without straining your wallet",
    readMoreLink: "#",
  },
  {
    id: 4,
    imageUrl: "/photos/deals4.jpg",
    title: "Backpacking Essentials: What to Pack for Your Next Adventure",
    description:
      "Packing for a backpacking trip can be a challenge. Learn what essential items to bring along to ensure your journey is both comfortable and convenient, without overpacking",
    readMoreLink: "#",
  },
  {
    id: 5,
    imageUrl: "/photos/deals5.jpg",
    title: "Cultural Etiquette: Respecting Customs While Traveling",
    description:
      "Traveling to a new country? Learn about cultural etiquettes and practices to ensure respectful and enriching interactions with local communities during your travels",
    readMoreLink: "#",
  },
  {
    id: 6,
    imageUrl: "/photos/deals6.jpg",
    title: "Eco-Friendly Travel: Tips for Sustainable Tourism",
    description:
      "Embark on your journey with sustainability in mind. Our guide offers practical tips for eco-friendly travel, helping you make a positive impact on the environment and local communities.",
    readMoreLink: "#",
  },
];

interface TravelTipsSectionProps {
  customTips?: TravelTip[];
}

const TravelTipsSection = ({ customTips }: TravelTipsSectionProps) => {
  const displayTips = customTips || travelTips;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Expert Travel Tips and Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Stay informed with our latest travel guides, tips, and destination
            highlights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayTips.map((tip) => (
            <TravelTipCard
              key={tip.id}
              imageUrl={tip.imageUrl}
              title={tip.title}
              description={tip.description}
              readMoreLink={tip.readMoreLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTipsSection;
