import React from "react";
import Search from "./Search";

function Header({ listings, originalListings, handleChange, setListings, search }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} originalListings={originalListings} handleChange={handleChange} listings={listings} setListings={setListings} />
    </header>
  );
}

export default Header;
