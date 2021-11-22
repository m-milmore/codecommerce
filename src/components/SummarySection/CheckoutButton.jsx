import React, { useContext } from "react";
import "./CheckoutButton.css";
import { formatter } from "../../constants";
import { HandleContext } from "../../App";

const CheckoutButton = ({paymentScreen2ndCheckoutBtn}) => {
  const {
    showScreen: { cartScreen, shippingScreen, paymentScreen },
    account: { itemData, cartSubTotal, shippingHandling, discount },
    handleForm,
    handleSubmit,
    handleShowScreen,
  } = useContext(HandleContext);

  return (
    <div
      className={`summary-btn-container ${
        paymentScreen2ndCheckoutBtn ? "payment-screen" : ""
      }`}
    >
      <button
        className={`summary-btn ${
          paymentScreen2ndCheckoutBtn ? "payment-screen" : ""
        }`}
        disabled={
          (cartScreen && (!itemData || itemData.length === 0)) ||
          (shippingScreen && !handleForm("shippingInfo")) ||
          (paymentScreen && !handleForm("paymentInfo"))
        }
        onClick={() => {
          cartScreen && handleShowScreen("cartScreen", "shippingScreen");
          shippingScreen && handleSubmit();
          paymentScreen && handleSubmit();
        }}
      >
        {paymentScreen
          ? `PAY ${formatter.format(
              cartSubTotal + shippingHandling - discount
            )}`
          : "CHECKOUT"}
      </button>
    </div>
  );
};

export default CheckoutButton;
