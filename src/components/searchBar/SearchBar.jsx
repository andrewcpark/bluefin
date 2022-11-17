import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./SearchBar.css";

const SearchBar = ({ fetchListings }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    if (query === "") {
      alert("Please enter a valid input");
    } else {
      e.preventDefault();
      fetchListings(query);
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="searchBar">
      <form className="sBar" onSubmit={onSubmit}>
        <input
          value={query}
          onChange={onChange}
          type="text"
          placeholder=" City, Address, School, Agent, ZIP"
        />
        <button type="submit">
          <AiOutlineSearch className="icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
