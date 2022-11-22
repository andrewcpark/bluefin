import React from "react";
import Map from "../components/map/Map";
import SearchBar from "../components/searchBar/SearchBar";
import ListingList from "../components/listingsList/ListingList";

const Listings = ({ fetchListings, listings, loading }) => {
  return (
    <div className="listings">
      <SearchBar fetchListings={fetchListings} />
      <div className="listingsPage">
        <Map listings={listings} />
        <ListingList listings={listings} />
      </div>
    </div>
  );
};

export default Listings;
