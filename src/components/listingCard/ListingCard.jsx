import React, { useState } from "react";
import Modal from "../modal/Modal";
import { RiMapPin2Fill } from "react-icons/ri";
import GoogleMapReact from "google-map-react";

import "./ListingCard.css";

const ListingCard = ({ listings }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        key={listings.zpid}
        className="listingCard"
      >
        <img src={listings.imgSrc} alt="/" />
        <div className="listingText">
          <h3>${listings?.price.toLocaleString()}</h3>
          <p>
            {listings.bedrooms} Bed | {listings.bathrooms} Bath |{" "}
            {listings.livingArea} Sq.Ft{" "}
          </p>
          <p> {listings.address} </p>
        </div>
      </div>

      {/* MODAL */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="popupContainer">
          <div>
            <img src={listings.imgSrc} alt="/" height="auto" />
          </div>
          <div className="popupRight">
            <h2>${listings.price.toLocaleString()} </h2>
            <p>
              {listings.bedrooms} Beds | {listings.bathrooms} Baths | {listings.livingArea} Sqft
            </p>
            <p> {listings.address} </p>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_API_BLUEFIN_GOOGLE_MAPS_KEY,
              }}
              defaultCenter={{
                lat: listings.latitude,
                lng: listings.longitude,
              }}
              defaultZoom={17}
            >
              <RiMapPin2Fill className="mapMarker" lat={listings.latitude} lng={listings.longitude} />
            </GoogleMapReact>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ListingCard;
