import React from "react";
import Map from "../components/map/Map";
import SearchBar from "../components/searchBar/SearchBar";

const Listings = ({ fetchListings, listings, loading }) => {
  return (
    <div>
      <SearchBar fetchListings={fetchListings}/>
      <Map
        listings={listings}

      />
    </div>
  );
};

export default Listings;
