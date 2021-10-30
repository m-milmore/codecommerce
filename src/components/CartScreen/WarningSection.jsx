import React from "react";
import "./WarningSection.css";

const WarningSection = () => {
  return (
    <div className="warning-section">
      <div className="warning-x-btn">
        <span>&#x2716;</span>
      </div>
      <div className="warning-text-img">
        <div className="warning-img">
          <img
            src={require("../../assets/warning.png").default}
            alt="warning"
          />
        </div>
        <div className="warning-text">
          <span className="dark">1 out of stock item removed:</span>
          <span className="red">06 youTube Chess Channel</span>
        </div>
      </div>
    </div>
  );
};

export default WarningSection;
