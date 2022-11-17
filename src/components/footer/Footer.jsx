import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import Logo from "../..//assets/bluefin-logo.png";

import "./Footer.css";

const Footer = () => {
  const returnHome = () => {
    window.location = "/";
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <a href="/">About</a>
          <a href="/">Bestimates</a>
          <a href="/">Mortgage</a>
          <a href="/">Planning</a>
          <a href="/">Advertise</a>
        </div>
      </div>
      <img
        alt="logo"
        src={Logo}
        height="100px"
        onClick={returnHome}
        className="bluefin-logo"
      />
      <div className="social">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaPinterest />
      </div>
      <img
        src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
        type="image/svg+xml"
        alt="Footer art"
        focusable="false"
        height="160"
        width="1200"
      ></img>
    </div>
  );
};

export default Footer;
