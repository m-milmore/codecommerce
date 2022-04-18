import React, { useContext } from "react";
import "./PaymentInfo.css";
import InfoInput from "../InfoInputSelect/InfoInput";
import InfoSelect from "../InfoInputSelect/InfoSelect";
import CheckoutButton from "../SummarySection/CheckoutButton";
import BackButtonAndErrorMessage from "../BackButtonAndErrorMessage/BackButtonAndErrorMessage";
import { HandleContext } from "../../App";
import { months } from "../../constants";

const PaymentInfo = () => {
  const {
    paymentInfo: { cardholderName, cardNumber, expMonth, expYear, cvv },
    infoError: { errorInput },
    handleInputChange,
    handleSelectRadioChange,
    handleInputBlur,
  } = useContext(HandleContext);

  const createYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const yearRange = 7;
    const years = [];
    for (let i = 0; i < yearRange; i++) {
      years.push(currentYear + 1 + i);
    }
    return years;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="payment-info-form-container">
      <h4>Payment Information</h4>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <button disabled style={{ display: "none" }}></button>
        <InfoInput
          label="Cardholder Name"
          type="text"
          value={cardholderName}
          name="cardholderName"
          errorInput={errorInput}
          onChange={handleInputChange("setPaymentInfo")}
        />
        <InfoInput
          label="Card Number"
          type="text"
          value={cardNumber}
          name="cardNumber"
          errorInput={errorInput}
          onChange={handleInputChange("setPaymentInfo")}
          onBlur={handleInputBlur("setPaymentInfo")}
        />
        <InfoSelect
          label="Exp.Date"
          name="expMonth"
          options={months}
          value={expMonth}
          onChange={handleSelectRadioChange("setPaymentInfo")}
        />
        <InfoSelect
          label=""
          name="expYear"
          options={createYearOptions()}
          value={expYear}
          onChange={handleSelectRadioChange("setPaymentInfo")}
        />
        <InfoInput
          label="cvv"
          type="text"
          value={cvv}
          name="cvv"
          errorInput={errorInput}
          onChange={handleInputChange("setPaymentInfo")}
        />
      </form>
      <CheckoutButton paymentScreen2ndCheckoutBtn />
      <BackButtonAndErrorMessage />
    </div>
  );
};

export default PaymentInfo;
