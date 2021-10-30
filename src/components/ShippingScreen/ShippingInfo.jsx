import React, { useState } from "react";
import "./ShippingInfo.css";
import ShippingInput from "./ShippingInput";
import ShippingSelect from "./ShippingSelect";

const ShippingInfo = ({ handleShippingForm }) => {
  const [shippingInfo, setShippingInfo] = useState({
    nameInput: "",
  });

  const handleStateChange = ({ target: { name, value } }) => {
    let re = /.*/;
    switch (name) {
      case "nameInput":
        break;
      default:
        console.log(`${name} is not accounted for.`);
    }
    if (re.test(value)) {
      setShippingInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      handleShippingForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Info Submit");
  };

  return (
    <div className="shipping-info-form-container">
      <h4>Shipping Information</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <button disabled style={{ display: "none" }}></button>
        <ShippingSelect label="Address Title" />
        <ShippingInput
          label="Name - Surname"
          type="text"
          value={shippingInfo.nameInput}
          name="nameInput"
          onChange={handleStateChange}
          minLength="3"
          maxLength="20"
        />
      </form>
    </div>
  );
};

export default ShippingInfo;
