import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import BluefinLogo from "../../assets/bluefin-logo.png";

import "./Navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <div className="navbar">
      <div className="container">
        <img alt="bluefin-logo" src={BluefinLogo}></img>
        <div className="icon" onClick={handleClick}>
          {click ? <FaRegTimesCircle /> : <HiOutlineMenuAlt4 />}
        </div>
        <div className={click ? "menu-container active" : "menu-container"}>
          <ul className="nav-menu">
            <a href="/"> Buy </a>
            <a href="/"> Rent </a>
            <a href="/"> Sell </a>
            <a href="/"> Mortgage</a>
            <a href="/"> Real Estate Agents </a>
            <a href="/"> Feed </a>
          </ul>
          <button className="btn"> Log In </button>
          <button className="btn"> Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
