import React, { useContext } from "react";
import "./NavbarSection.css";
import { HandleContext } from "../../App";

const NavbarSection = () => {
  const { account: {username}, handleShowScreen } = useContext(HandleContext);

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
