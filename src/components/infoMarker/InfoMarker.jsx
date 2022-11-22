import React from "react";
import { FaTimes } from "react-icons/fa";

import "./InfoMarker.css";

const InfoMarker = ({ info, handleClick }) => {
  return (
    <div className="infoMarkerContainer">
      <div>
        <img width="150px" src={info.img} alt="/" />
      </div>
      <div className="textInfoMarkerConatiner">
        <p className="infoMarkerPrice"> ${info.price.toLocaleString()}</p>
        <div>
          <p>
            {info.bed} Beds | {info.bath} Baths
          </p>
        </div>
        <p> {info.sqft.toLocaleString()} Sqft </p>
        <p> {info.address} </p>
      </div>
      <p onClick={handleClick}>
        <FaTimes />
      </p>
    </div>
  );
};

export default InfoMarker;
