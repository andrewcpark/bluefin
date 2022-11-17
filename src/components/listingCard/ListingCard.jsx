import React from 'react'

import "./ListingCard.css";

const ListingCard = ({ listings }) => {
  return (
    <div key={listings.zpid} className="listingCard">
        <img src={listings.imgSrc} alt="/"/>
        <div className='listingText'>
            <h3>${listings?.price.toLocaleString()}</h3>
            <p>{listings.bedrooms} Bed | {listings.bathrooms} Bath | {listings.livingArea} Sq.Ft{' '}</p>
            <p> {listings.address} </p>
        </div>
    </div>
  )
}

export default ListingCard;