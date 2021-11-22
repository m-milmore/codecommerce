import React, { useContext } from "react";
import "./InfoRadio.css";
import { HandleContext } from "../../App";

const InfoRadio = () => {
  const {
    shippingInfo: { shippingOption },
    handleSelectRadioChange,
  } = useContext(HandleContext);

  return (
    <div className="shipping-radio-container">
      <input
        type="radio"
        id="standard"
        name="shippingOption"
        value="standard"
        checked={shippingOption === "standard"}
        onChange={handleSelectRadioChange("setShippingInfo")}
        className="shipping-radio-input"
      />
      <label className="shipping-radio-label" htmlFor="standard">Standard</label>
      <span className="shipping-radio-span">
        Delivery in 4-6 Business Days - Free ($40 min.)
      </span>
      <input
        type="radio"
        id="express"
        name="shippingOption"
        value="express"
        checked={shippingOption === "express"}
        onChange={handleSelectRadioChange("setShippingInfo")}
        className="shipping-radio-input"
      />
      <label className="shipping-radio-label" htmlFor="express">Express</label>
      <span className="shipping-radio-span">
        Delivery in 1-3 Business Days - $5.00
      </span>
    </div>
  );
};

export default InfoRadio;
