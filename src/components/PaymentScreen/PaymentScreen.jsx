import React from "react";
import "./PaymentScreen.css";

class PaymentScreen extends React.Component {
  render(props) {
    const { showScreen } = this.props;
    return (
      <div
        className={`payment-screen-container ${
          showScreen.paymentScreen ? "open" : ""
        }`}
      >
        <h4>Payment Screen</h4>
      </div>
    );
  }
}

export default PaymentScreen;
