import React, { useContext } from "react";
import "./CartScreen.css";
import NavbarSection from "./NavbarSection";
import WarningSection from "./WarningSection";
import Items from "./Items";
import SummarySection from "../SummarySection/SummarySection";
import { HandleContext } from "../../App";

const CartScreen = () => {
  const {
    showScreen: { cartScreen },
  } = useContext(HandleContext);

  return (
    <div className={`cart-screen-container ${cartScreen ? "open" : ""}`}>
      <NavbarSection />
      <div className="main-container">
        <div className="left-main">
          <WarningSection />
          <div className="product-container">
            <Items />
          </div>
        </div>
        <SummarySection />
      </div>
    </div>
  );
};

export default CartScreen;
