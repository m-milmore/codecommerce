import React from "react";
import "./ShippingScreen.css";
import SummarySection from "../SummarySection/SummarySection";
import ProgressBullets from "../ProgressBullets/ProgressBullets";
import ShippingInfo from "./ShippingInfo";
class ShippingScreen extends React.Component {
  render(props) {
    const { account, showScreen, handleProps: {handleShowScreen, handleShippingForm} } = this.props;
    return (
      <div
        className={`shipping-screen-container ${
          showScreen.shippingScreen ? "open" : ""
        }`}
      >
        <div>
          <ProgressBullets showScreen={showScreen} />
          <ShippingInfo handleShippingForm={handleShippingForm}/>
        </div>
        <SummarySection
          account={account}
          handleShowScreen={handleShowScreen}
          showScreen={showScreen}
        />
      </div>
    );
  }
}

export default ShippingScreen;
