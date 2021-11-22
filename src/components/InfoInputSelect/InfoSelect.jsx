import React from "react";
import "./InfoSelect.css";

const InfoSelect = ({ label, name, options, ...props }) => {
  return (
    <div className={`shipping-select-container ${name}`}>
      <label className={`select-label ${name}`}>{label}</label>
      <div className="select-container">
        <select name={name} {...props}>
          {(name === "titleInput" ||
            name === "stateInput" ||
            name === "countryInput") && (
            <option value="">
              Select&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
          )}
          {name === "expMonth" && (
            <option value="">
              Month&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
          )}
          {name === "expYear" && (
            <option value="">
              Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </option>
          )}
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InfoSelect;
