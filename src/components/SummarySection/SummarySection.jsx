import React from "react";
import "./SummarySection.css";
import { formatter } from "../../constants";
import ShippingItem from "./ShippingItem";

const SummarySection = ({
  account: { itemData, cartSubTotal, shippingHandling, discount },
  showScreen,
  handleShowScreen,
  handleShippingInfo,
  handleShippingForm,
  handleShippingSubmit,
}) => {
  return (
    <div className="summary-section">
      <div className="summary-container">
        <h3>Summary</h3>
      </div>
      <hr />
      {showScreen.cartScreen && (
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
      {showScreen.shippingScreen && (
        <>
          <div className="items-in-bag">
            <span>
              <b>
                {itemData.length} {itemData.length > 1 ? "items" : "item"}
              </b>
              &nbsp;in your bag.
            </span>
          </div>
          <hr />
          <div className="items-container">
            {itemData.map((item) => (
              <ShippingItem item={item} key={item.id} />
            ))}
          </div>
        </>
      )}
      <hr />
      <div className="summary">
        <span>Cart Subtotal:</span>
        <span className="a-right dark">{formatter.format(cartSubTotal)}</span>
        <span>Shipping & Handling:</span>
        <span className="a-right dark">
          {shippingHandling === 0 ? "-" : formatter.format(shippingHandling)}
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
      <div className="summary-btn-container">
        <button
          className="summary-btn"
          disabled={
            (showScreen.cartScreen && (!itemData || itemData.length === 0)) ||
            (showScreen.shippingScreen && !handleShippingForm())
          }
          onClick={() => {
            showScreen.cartScreen &&
              handleShowScreen("cartScreen", "shippingScreen");
            showScreen.shippingScreen && handleShippingSubmit();
            showScreen.paymentScreen &&
              handleShowScreen("paymentScreen", "confirmationScreen");
          }}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default SummarySection;
