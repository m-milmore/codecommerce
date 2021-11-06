import React from "react";
import "./ShippingInput.css";

const ShippingInput = ({ label, name, errorInput, ...props }) => {
  return (
    <div className={`shipping-input-container ${name}`}>
      <label className={`label ${name}`}>{label}</label>
      {(name === "cellArea" || name === "phoneArea") && (
        <div className="div-span">
          <span>0 |</span>
        </div>
      )}
      <input
        autoComplete="off"
        name={name}
        className={`${name} ${errorInput === name ? "red-bg" : ""}`}
        {...props}
      />
    </div>
  );
};

export default ShippingInput;
