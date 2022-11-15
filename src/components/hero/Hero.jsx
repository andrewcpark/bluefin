import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./Hero.css";

const Hero = ({ fetchListings, listings, loading }) => {
  const length = listings.length;

  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      alert("Please enter something");
    } else {
      fetchListings(query);
      setQuery("");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="hero">
      <div className="content">
        <h1> Find homes first.</h1>
        <h1> Tour homes fast.</h1>
        <form className="search" onSubmit={onSubmit}>
          <input
            value={query}
            onChange={onChange}
            type="text"
            placeholder="City, Address, School, Agent, ZIP"
          />
          <button type="submit">
            <AiOutlineSearch className="icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
