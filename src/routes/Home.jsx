import React from "react";
import Hero from "../components/hero/Hero";
import CtaSection from "../components/ctaSection/CtaSection";

const Home = ({ fetchListings, listings }) => {
  return (
    <div>
      <Hero
        fetchListings={fetchListings}
        listings={listings}
      />
      <CtaSection />
    </div>
  );
};

export default Home;
