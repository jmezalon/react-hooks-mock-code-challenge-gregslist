import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteClick, url }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(item => <ListingCard onDeleteClick={onDeleteClick} url={url} key={item.id} listingObj={item} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
