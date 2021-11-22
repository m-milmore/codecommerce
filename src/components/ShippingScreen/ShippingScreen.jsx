import React, { useContext } from "react";
import "./ShippingScreen.css";
import SummarySection from "../SummarySection/SummarySection";
import ProgressBullets from "../ProgressBullets/ProgressBullets";
import ShippingInfo from "./ShippingInfo";
import { HandleContext } from "../../App";

const ShippingScreen = () => {
  const {
    showScreen: { shippingScreen },
  } = useContext(HandleContext);

  return (
    <div
      className={`shipping-screen-container ${shippingScreen ? "open" : ""}`}
    >
      <div>
        <ProgressBullets />
        <ShippingInfo />
      </div>
      <SummarySection />
    </div>
  );
};

export default ShippingScreen;
