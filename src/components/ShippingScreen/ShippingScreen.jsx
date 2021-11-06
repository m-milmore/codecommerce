import React from "react";
import "./ShippingScreen.css";
import SummarySection from "../SummarySection/SummarySection";
import ProgressBullets from "../ProgressBullets/ProgressBullets";
import ShippingInfo from "./ShippingInfo";

class ShippingScreen extends React.Component {

  render(props) {
    const {
      account,
      showScreen,
      shippingInfo,
      shippingInfoError,
      handleProps: {
        handleShowScreen,
        handleShippingInputChange,
        handleShippingSelectChange,
        handleShippingForm,
        handleShippingSubmit,
        handleShippingRadio,
      },
    } = this.props;
    return (
      <div
        className={`shipping-screen-container ${
          showScreen.shippingScreen ? "open" : ""
        }`}
      >
        <div>
          <ProgressBullets showScreen={showScreen} />
          <ShippingInfo
            shippingInfo={shippingInfo}
            shippingInfoError={shippingInfoError}
            handleShippingInputChange={handleShippingInputChange}
            handleShippingSelectChange={handleShippingSelectChange}
            handleShippingRadio={handleShippingRadio}
            handleShowScreen={handleShowScreen}
          />
        </div>
        <SummarySection
          account={account}
          showScreen={showScreen}
          handleShowScreen={handleShowScreen}
          handleShippingForm={handleShippingForm}
          handleShippingSubmit={handleShippingSubmit}
        />
      </div>
    );
  }
}

export default ShippingScreen;
