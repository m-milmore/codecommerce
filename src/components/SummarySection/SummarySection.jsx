import React, { useContext } from "react";
import "./SummarySection.css";
import ShippingItem from "./ShippingItem";
import CheckoutButton from "./CheckoutButton";
import { formatter } from "../../constants";
import { HandleContext } from "../../App";

const SummarySection = () => {
  const {
    showScreen: {
      cartScreen,
      shippingScreen,
      paymentScreen,
      confirmationScreen,
    },
    account: { itemData, cartSubTotal, shippingHandling, discount, email },
    shippingInfo: {
      titleInput,
      nameInput,
      addressInput,
      cityInput,
      stateInput,
      zipInput,
      countryInput,
      shippingOption,
    },
    paymentInfo: { cardNumber, issuer, issuerLogo },
    handleShowScreen,
  } = useContext(HandleContext);
  const last4digits = cardNumber.replaceAll(" ", "").slice(-4);
  return (
    <div className={`summary-section`}>
      <div
        className={`summary-container ${
          confirmationScreen ? "conf-screen" : ""
        }`}
      >
        <h3>Summary</h3>
      </div>
      <hr />
      {cartScreen && (
        <>
          <div className="promo-container">
            <span>Do you have a promo code?</span>
          </div>
          <div className="promo-inputs">
            <div className="promo-code">
              <span>Code</span>
            </div>
            <div className="promo-btn">
              <span>APPLY</span>
            </div>
          </div>
        </>
      )}
      {(shippingScreen || paymentScreen || confirmationScreen) && (
        <>
          <div
            className={`items-in-bag ${
              confirmationScreen ? "conf-screen" : ""
            }`}
          >
            <span>
              <b>
                {itemData.length} {itemData.length > 1 ? "items" : "item"}
              </b>
              &nbsp;in your bag.
            </span>
          </div>
          <hr className={`${confirmationScreen ? "conf-screen" : ""}`} />
          <div className="items-container">
            {itemData.map((item) => (
              <ShippingItem item={item} key={item.id} />
            ))}
          </div>
        </>
      )}
      <hr />
      <div className={`summary ${confirmationScreen ? "conf-screen" : ""}`}>
        <span>Cart Subtotal:</span>
        <span className="a-right dark">{formatter.format(cartSubTotal)}</span>
        <span>Shipping & Handling:</span>
        <span className="a-right dark">
          {cartScreen
            ? "-"
            : confirmationScreen
            ? shippingHandling === 0
              ? "FREE"
              : formatter.format(shippingHandling)
            : formatter.format(shippingHandling)}
        </span>
        <span>Discount:</span>
        <span
          className={`discount-class a-right ${
            discount === 0 ? "make-me-black" : ""
          }`}
        >
          {discount === 0 ? "-" : formatter.format(discount * -1)}
        </span>
        <span className="dark">Cart Total:</span>
        <span className="a-right dark red">
          {formatter.format(cartSubTotal + shippingHandling - discount)}
        </span>
      </div>
      <hr />
      {paymentScreen && (
        <>
          <h3 className="h3-address">SHIPMENT ADDRESS</h3>
          <div className="delivery-address">
            <span>{`${titleInput} ${nameInput}`}</span>
            <span>{`${addressInput}, ${cityInput}`}</span>
            <span>{`${stateInput} ${zipInput} ${countryInput}`}</span>
            <span className="option-text">{`E-Mail: ${email}`}</span>
          </div>
          <hr />
          <h3 className="h3-address">SHIPMENT METHOD</h3>
          <div className="delivery-address">
            <span className="option">{`${shippingOption}`}</span>
            <span className="option-text">
              {shippingOption === "express"
                ? "Delivery in 1-3 working days"
                : "Delivery in 4-6 working days"}
            </span>
          </div>
          <hr />
        </>
      )}
      {confirmationScreen && (
        <div className="summary-confirmation-container">
          <div className="shipping-line">
            <h3>SHIPPING</h3>
            <span
              onClick={() =>
                handleShowScreen("confirmationScreen", "shippingScreen")
              }
            >
              View Shipping details
            </span>
          </div>
          <div className="standard-line">
            <h3>{shippingOption === "standard" ? "STANDARD" : "EXPRESS"}</h3>
            <span>
              {shippingOption === "standard"
                ? "Delivery in 4-6 Business Days"
                : "Delivery in 1-3 Business Days"}
            </span>
          </div>
          <div className="shipping-line payment-line">
            <h3>PAYMENT</h3>
            <span
              onClick={() =>
                handleShowScreen("confirmationScreen", "paymentScreen")
              }
            >
              View Payment details
            </span>
          </div>
          <div className="issuer-line">
            <i className={`fontawesome ${issuerLogo}`}></i>
            <h3 className="h3-class">
              {issuer} ...{last4digits}
            </h3>
            <span className="total-payment-line">
              {`Total payment: ${formatter.format(
                cartSubTotal + shippingHandling - discount
              )}`}
            </span>
          </div>
        </div>
      )}
      {!confirmationScreen && <CheckoutButton />}
    </div>
  );
};

export default SummarySection;
