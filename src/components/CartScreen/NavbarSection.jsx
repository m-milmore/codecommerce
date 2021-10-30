import React from "react";
import "./NavbarSection.css";

const NavbarSection = ({ username, handleShowScreen }) => {
  return (
    <div className="navbar">
      <span>Cart Screen</span>
      <span>Hello {username}</span>
      <span
        className="back-button"
        onClick={() => handleShowScreen("cartScreen", "loginScreen")}
      >
        &lt;-back
      </span>
    </div>
  );
};

export default NavbarSection;
