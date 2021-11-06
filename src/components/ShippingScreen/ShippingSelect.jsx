import React from "react";
import "./ShippingSelect.css";

const ShippingSelect = ({ label, name, options, ...props }) => {
  return (
    <div className={`shipping-select-container ${name}`}>
      <label className={`select-label ${name}`}>{label}</label>
      <div className="select-container">
        <select name={name} {...props}>
          <option value="">
            Select&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </option>
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ShippingSelect;
