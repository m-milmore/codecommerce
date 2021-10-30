import React from "react";
import "./ShippingInput.css";

const ShippingInput = ({label, ...props}) => {
  return (
    <div className="shipping-input-container">
      <label className="label">{label}</label>
      <input autoComplete="off" className="" {...props} />
    </div>
  );
};

export default ShippingInput;
