import React from "react";
import "./ShippingRadio.css";

const ShippingRadio = ({ shippingOption, handleShippingRadio }) => {
  return (
    <div className="shipping-radio-container">
      <input
        type="radio"
        id="standard"
        name="shippingOption"
        value="standard"
        checked={shippingOption === "standard"}
        onChange={handleShippingRadio}
        className="shipping-radio-input"
      />
      <label className="shipping-radio-label">Standard</label>
      <span className="shipping-radio-span">
        Delivery in 4-6 Business Days - Free ($40 min.)
      </span>
      <input
        type="radio"
        id="express"
        name="shippingOption"
        value="express"
        checked={shippingOption === "express"}
        onChange={handleShippingRadio}
        className="shipping-radio-input"
      />
      <label className="shipping-radio-label">Express</label>
      <span className="shipping-radio-span">
        Delivery in 1-3 Business Days - $5.00
      </span>
    </div>
  );
};

export default ShippingRadio;
