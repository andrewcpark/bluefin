import React from "react";
import Hero from "../components/hero/Hero";
import CtaSection from "../components/ctaSection/CtaSection";

const Home = ({ fetchListings, listings, loading }) => {
  return (
    <div>
      <Hero
        fetchListings={fetchListings}
        listings={listings}
        loading={loading}
      />
      <CtaSection />
    </div>
  );
};

export default Home;
