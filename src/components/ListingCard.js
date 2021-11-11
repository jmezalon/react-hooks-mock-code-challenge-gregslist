import React, { useState } from "react";

function ListingCard({ listingObj: { id, description, image, location }, listingObj, url, onDeleteClick }) {
  const [fav, setFav] = useState(true)

  function handleDeleteClick() {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    .then(() => onDeleteClick(listingObj))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image || "https://via.placeholder.com/300x300"} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={()=>setFav(!fav)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setFav(!fav)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
