import React, { useContext } from "react";
import "./ConfirmationScreen.css";
import ProgressBar from "./ProgressBar";
import ConfirmationSide from "./ConfirmationSide";
import SummarySection from "../SummarySection/SummarySection";
import { HandleContext } from "../../App";

const ConfirmationScreen = () => {
  const {
    showScreen: { confirmationScreen },
  } = useContext(HandleContext);

  return (
    <div
      className={`confirmation-screen-container ${
        confirmationScreen ? "open" : ""
      }`}
    >
      <ProgressBar />
      <div className="confirmation-summary-container">
        <ConfirmationSide />
        <SummarySection />
      </div>
    </div>
  );
};

export default ConfirmationScreen;
