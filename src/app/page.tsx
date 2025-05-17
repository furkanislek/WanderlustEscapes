import React from "react";
import Footer from "@/components/footer";
import { DealsSection } from "@/components/deals";
import { AboutSection } from "@/components/sections";
import HeadersComponent from "@/components/headers/Headers";
import { TopDestinations } from "@/components/destinations";
import { TravelTipsSection } from "@/components/travel-tips";
import { TestimonialsSection } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <HeadersComponent />
      <AboutSection />
      <TopDestinations />
      <TestimonialsSection />
      <DealsSection />
      <TravelTipsSection />
      <Footer />
    </div>
  );
}
