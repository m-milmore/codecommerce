import React from "react";
import "./ShippingSelect.css";

const ShippingSelect = ({ label, ...props }) => {
  return (
    <div className="shipping-select-container">
      <label>{label}</label>
      <div className="select-container">
        <select name="titles">
          <option value="">
            Select&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </option>
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="ms">Ms</option>
          <option value="miss">Miss</option>
        </select>
      </div>
    </div>
  );
};

export default ShippingSelect;
