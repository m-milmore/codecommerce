import React, {useContext} from "react";
import Bullet from "./Bullet";
import "./ProgressBullets.css";
import { HandleContext } from "../../App";

const ProgressBullets = () => {
  const {showScreen: {shippingScreen}} = useContext(HandleContext);
  return (
    <div className="progress-bullets-container">
      <div className="progress-bars-container">
        <div className="progress-bar">
          <Bullet label="Cart" icon="fa-check" light="" last="" />
        </div>
        <div
          className={`progress-bar ${shippingScreen ? "light" : ""}`}
        >
          <Bullet label="Delivery" icon="fa-truck" light="" last="" />
        </div>
        <div className="progress-bar light">
          <Bullet
            label="Payment"
            icon="fa-credit-card"
            light={shippingScreen ? "light" : ""}
            last=""
          />
          <Bullet
            label="Confirmation"
            icon="fa-check-circle"
            light="light"
            last="last"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBullets;
