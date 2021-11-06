import React from "react";
import "./ShippingInfo.css";
import ShippingInput from "./ShippingInput";
import ShippingSelect from "./ShippingSelect";
import ShippingRadio from "./ShippingRadio";
import { states } from "../../constants";

const ShippingInfo = ({
  shippingInfo: {
    titleInput,
    nameInput,
    addressInput,
    cityInput,
    stateInput,
    zipInput,
    countryInput,
    cellArea,
    cellInput,
    phoneArea,
    phoneInput,
    shippingOption,
  },
  shippingInfoError: { errorMessage, errorInput },
  handleShippingInputChange,
  handleShippingSelectChange,
  handleShippingRadio,
  handleShowScreen,
}) => {
  const titles = ["Mr", "Mrs", "Ms", "Miss"];
  const country = ["USA"];
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    handleShowScreen("shippingScreen", "cartScreen");
  }

  return (
    <div className="shipping-info-form-container">
      <h4>Shipping Information</h4>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <button disabled style={{ display: "none" }}></button>
        <ShippingSelect
          label="Address Title"
          name="titleInput"
          options={titles}
          value={titleInput}
          onChange={handleShippingSelectChange}
        />
        <ShippingInput
          label="Name - Surname"
          type="text"
          value={nameInput}
          name="nameInput"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
        />
        <ShippingInput
          label="Your Address"
          type="text"
          value={addressInput}
          name="addressInput"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
        />
        <ShippingInput
          label="City"
          type="text"
          value={cityInput}
          name="cityInput"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
        />
        <ShippingSelect
          label="State"
          name="stateInput"
          options={states}
          value={stateInput}
          onChange={handleShippingSelectChange}
        />
        <ShippingInput
          label="Zip Code"
          type="text"
          value={zipInput}
          name="zipInput"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
          min={10000}
          max={99999}
        />
        <ShippingSelect
          label="Country"
          name="countryInput"
          options={country}
          value={countryInput}
          onChange={handleShippingSelectChange}
        />
        <ShippingInput
          label="Cell Phone"
          type="text"
          value={cellArea}
          name="cellArea"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
          min={0}
          max={999}
        />
        <ShippingInput
          type="text"
          value={cellInput}
          name="cellInput"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
        />
        <ShippingInput
          label="Telephone"
          type="text"
          value={phoneArea}
          name="phoneArea"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
          min={0}
          max={999}
        />
        <ShippingInput
          type="text"
          value={phoneInput}
          name="phoneInput"
          errorInput={errorInput}
          onChange={handleShippingInputChange}
        />
      </form>
      <hr />
      <h4 className="h4-class">Shipping Method</h4>
      <ShippingRadio
        shippingOption={shippingOption}
        handleShippingRadio={handleShippingRadio}
      />
      <span className="shipping-details">View Shipping details</span>
      <div className="back-and-error-container">
        <div className="back-to-cart-btn" onClick={handleClick}>
          <span>BACK TO CART</span>
        </div>
        <span className={`error ${errorMessage ? "slide" : ""}`}>
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default ShippingInfo;
