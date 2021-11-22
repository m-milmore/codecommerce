import React, { useContext } from "react";
import "./ShippingInfo.css";
import InfoInput from "../InfoInputSelect/InfoInput";
import InfoSelect from "../InfoInputSelect/InfoSelect";
import InfoRadio from "../InfoInputSelect/InfoRadio";
import BackButtonAndErrorMessage from "../BackButtonAndErrorMessage/BackButtonAndErrorMessage";
import { states } from "../../constants";
import { HandleContext } from "../../App";

const ShippingInfo = () => {
  const {
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
    },
    infoError: { errorInput },
    handleInputChange,
    handleSelectRadioChange,
    handleInputBlur,
  } = useContext(HandleContext);

  const titles = ["Mr", "Mrs", "Ms", "Miss"];
  const country = ["USA"];

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="shipping-info-form-container">
      <h4>Shipping Information</h4>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <button disabled style={{ display: "none" }}></button>
        <InfoSelect
          label="Address Title"
          name="titleInput"
          options={titles}
          value={titleInput}
          onChange={handleSelectRadioChange("setShippingInfo")}
        />
        <InfoInput
          label="Name - Surname"
          type="text"
          value={nameInput}
          name="nameInput"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
        />
        <InfoInput
          label="Your Address"
          type="text"
          value={addressInput}
          name="addressInput"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
        />
        <InfoInput
          label="City"
          type="text"
          value={cityInput}
          name="cityInput"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
        />
        <InfoSelect
          label="State"
          name="stateInput"
          options={states}
          value={stateInput}
          onChange={handleSelectRadioChange("setShippingInfo")}
        />
        <InfoInput
          label="Zip Code"
          type="text"
          value={zipInput}
          name="zipInput"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
          min={10000}
          max={99999}
        />
        <InfoSelect
          label="Country"
          name="countryInput"
          options={country}
          value={countryInput}
          onChange={handleSelectRadioChange("setShippingInfo")}
        />
        <InfoInput
          label="Cell Phone"
          type="text"
          value={cellArea}
          name="cellArea"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
          min={0}
          max={999}
        />
        <InfoInput
          type="text"
          value={cellInput}
          name="cellInput"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
          onBlur={handleInputBlur("setShippingInfo")}
        />
        <InfoInput
          label="Telephone"
          type="text"
          value={phoneArea}
          name="phoneArea"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
          min={0}
          max={999}
        />
        <InfoInput
          type="text"
          value={phoneInput}
          name="phoneInput"
          errorInput={errorInput}
          onChange={handleInputChange("setShippingInfo")}
          onBlur={handleInputBlur("setShippingInfo")}
        />
      </form>
      <hr />
      <h4 className="h4-class">Shipping Method</h4>
      <InfoRadio />
      <span className="shipping-details">View Shipping details</span>
      <BackButtonAndErrorMessage />
    </div>
  );
};

export default ShippingInfo;
