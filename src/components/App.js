import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const base_url = 'http://localhost:6001/listings';
  const [listings, setListings] = useState([])
  const [originalListings, setOriginalListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch(base_url)
    .then(r => r.json())
    .then(data => {
      setListings(data)
      setOriginalListings(data)
    })
  },[])

  function handleDelete(listingObj) {
    const updatedListing = listings.filter(list => list.id !== listingObj.id)
    setListings(updatedListing)
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="app">
      <Header originalListings={originalListings} search={search} listings={listings} setListings={setListings} handleChange={handleChange} />
      <ListingsContainer listings={listings} url={base_url} onDeleteClick={handleDelete} />
    </div>
  );
}

export default App;
