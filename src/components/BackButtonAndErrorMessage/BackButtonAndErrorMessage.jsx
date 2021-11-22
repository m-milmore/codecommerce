import React, { useContext } from "react";
import "./BackButtonAndErrorMessage.css";
import { HandleContext } from "../../App";

const BackButtonAndErrorMessage = () => {
  const {
    showScreen: { shippingScreen, paymentScreen, confirmationScreen },
    infoError: { errorMessage },
    handleShowScreen,
  } = useContext(HandleContext);

  const handleClick = () => {
    shippingScreen
      ? handleShowScreen("shippingScreen", "cartScreen")
      : paymentScreen
      ? handleShowScreen("paymentScreen", "shippingScreen")
      : handleShowScreen("confirmationScreen", "loginScreen");
  };
  return (
    <div
      className={`back-and-error-container ${
        confirmationScreen ? "conf-screen" : ""
      }`}
    >
      <div className={`back-to-cart-btn ${confirmationScreen ? "conf-screen" : ""}`} onClick={handleClick}>
        <span>
          {shippingScreen
            ? "BACK TO CART"
            : paymentScreen
            ? "BACK TO ADDRESS"
            : "BACK TO HOME PAGE"}
        </span>
      </div>
      <span
        className={`error ${errorMessage ? "slide" : ""} ${
          confirmationScreen ? "conf-screen" : ""
        }`}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default BackButtonAndErrorMessage;
