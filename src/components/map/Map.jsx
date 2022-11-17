import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { RiMapPin2Fill } from "react-icons/ri";

import "./Map.css";

const Map = ({ center, zoom, listings }) => {
  const [centerObj, setCenter] = useState(center);

  useEffect(() => {
    if (listings && listings.length > 0) {
      const obj = { lat: listings[0].latitude, lng: listings[0].longitude };
      setCenter(obj);
    }
  }, [listings]);

  return (
    <>
      <div style={{ height: "90vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_API_BLUEFIN_GOOGLE_MAPS_KEY,
          }}
          center={centerObj}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          {listings.map((listing) => (
            <RiMapPin2Fill className="mapMarker"
              key={listing.zpid}
              lat={listing.latitude}
              lng={listing.longitude}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

Map.defaultProps = {
  center: {
    lat: 34.052235,
    lng: -118.243683,
  },
  zoom: 11,
};

export default Map;
