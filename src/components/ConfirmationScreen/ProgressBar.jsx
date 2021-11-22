import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <h4>CART</h4>
      <h4>DELIVERY</h4>
      <h4>PAYMENT</h4>
      <h4 className="conf-segment">CONFIRMATION</h4>
    </div>
  );
};

export default ProgressBar;
