import React, { useContext } from "react";
import "./PaymentScreen.css";
import ProgressBullets from "../ProgressBullets/ProgressBullets";
import PaymentInfo from "./PaymentInfo";
import SummarySection from "../SummarySection/SummarySection";
import { HandleContext } from "../../App";

const PaymentScreen = () => {
  const {
    showScreen: { paymentScreen },
  } = useContext(HandleContext);

  return (
    <div className={`payment-screen-container ${paymentScreen ? "open" : ""}`}>
      <div>
        <ProgressBullets />
        <PaymentInfo />
      </div>
      <SummarySection />
    </div>
  );
};

export default PaymentScreen;
