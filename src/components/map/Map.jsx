import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 34.07705421692482,
      lng: -118.22911329941581,
    },
    zoom: 9,
  };

  return (
    <>
      <div style={{ height: "100vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_API_BLUEFIN_GOOGLE_MAPS_KEY,
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
