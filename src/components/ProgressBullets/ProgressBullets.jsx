import React from "react";
import Bullet from "./Bullet";
import "./ProgressBullets.css";

const ProgressBullets = ({ showScreen }) => {
  return (
    <div className="progress-bullets-container">
      <div className="progress-bars-container">
        <div className="progress-bar">
          <Bullet label="Cart" icon="fa-check" light="" last="" />
        </div>
        <div className="progress-bar light">
          <Bullet label="Delivery" icon="fa-truck" light="" last="" />
        </div>
        <div className="progress-bar light">
          <Bullet label="Payment" icon="fa-credit-card" light="light" last="" />
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
