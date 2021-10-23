import React from "react";
import "./ShippingScreen.css";
import { formatter } from "../../constants";

class ShippingScreen extends React.Component {
  render(props) {
    const { showScreen, handleShowScreen } = this.props;
    return (
      <div
        className={`shipping-screen-container ${
          showScreen.shippingScreen ? "open" : ""
        }`}
      >
        <div className="left-side">
          <div className="progress-bullets">
            <h4>Progress Bullets</h4>
          </div>
          <div className="shipping-info">
            <h4>Shipping Information</h4>
          </div>
        </div>
        <div className="right-side">
          <div className="summary-container">
            <h3>Summary</h3>
          </div>
          <hr />
          <div className="items-in-bag">
            <span>X items in your bag.</span>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default ShippingScreen;
