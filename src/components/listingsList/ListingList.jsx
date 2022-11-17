import React from 'react'
import ListingCard from '../listingCard/ListingCard'

import "./ListingList.css"

const ListingList = ({listings}) => {
  return (
    <div className='listingListSection'>
        {listings.map((listings) => (
        <ListingCard listings={listings}/>
        ))}
    </div>
  )
}

export default ListingList;