"use client";

import React from "react";
import DealCard from "./DealCard";

interface Deal {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Early Bird Summer Deals - Up to 30% Off",
    imageUrl: "/photos/deals1.jpg",
    description:
      "Book your summer holiday now to enjoy up to 30% off. Choose from destinations like Thailand or Rome for an affordable summer escape",
    ctaText: "Book Now",
    ctaLink: "/deals/early-bird",
  },
  {
    id: 2,
    title: "Last-Minute Weekend Escapes - Save 25%",
    imageUrl: "/photos/deals2.jpg",
    description:
      "Book your summer holiday now to enjoy up to 30% off. Choose from destinations like Thailand or Rome for an affordable summer escape",
    ctaText: "View Deals",
    ctaLink: "/deals/last-minute",
  },
  {
    id: 3,
    title: "Romantic Getaway Discounts - Special Couples' Rate",
    imageUrl: "/photos/deals3.jpg",
    description:
      "Book your summer holiday now to enjoy up to 30% off. Choose from destinations like Thailand or Rome for an affordable summer escape",
    ctaText: "Reserve",
    ctaLink: "/deals/romantic",
  },
  {
    id: 4,
    title: "Family Vacation Packages - Discounts for Families",
    imageUrl: "/photos/deals4.jpg",
    description:
      "Book your summer holiday now to enjoy up to 30% off. Choose from destinations like Thailand or Rome for an affordable summer escape",
    ctaText: "Discover",
    ctaLink: "/deals/family",
  },
  {
    id: 5,
    title: "Group Travel Discounts - More Savings for Groups",
    imageUrl: "/photos/deals5.jpg",
    description:
      "Book your summer holiday now to enjoy up to 30% off. Choose from destinations like Thailand or Rome for an affordable summer escape",
    ctaText: "Plan Group",
    ctaLink: "/deals/group",
  },
  {
    id: 6,
    title: "Seasonal Flash Sales - Limited Time Offers",
    imageUrl: "/photos/deals6.jpg",
    description:
      "Book your summer holiday now to enjoy up to 30% off. Choose from destinations like Thailand or Rome for an affordable summer escape",
    ctaText: "Shop Now",
    ctaLink: "/deals/flash-sales",
  },
];

interface DealsSectionProps {
  customDeals?: Deal[];
}

const DealsSection = ({ customDeals }: DealsSectionProps) => {
  const displayDeals = customDeals || deals;

  return (
    <section className="py-20 min-h-screen bg-teal-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Exclusive Deals You Can't Miss
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grab these limited-time offers and enjoy more savings on your next
            adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDeals.map((deal) => (
            <DealCard
              key={deal.id}
              title={deal.title}
              imageUrl={deal.imageUrl}
              description={deal.description}
              ctaText={deal.ctaText}
              ctaLink={deal.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
