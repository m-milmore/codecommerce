import React from "react";
import "./CartScreen.css";
import NavbarSection from "./NavbarSection";
import WarningSection from "./WarningSection";
import Items from "./Items";
import SummarySection from "../SummarySection/SummarySection";
class CartScreen extends React.Component {
  render(props) {
    const {
      showScreen,
      account,
      handleProps: {
        handleShowScreen,
        handleRemoveItem,
        handleChangeQuantity,
        handleShippingForm,
        handleShippingSubmit,
      },
    } = this.props;

    return (
      <div
        className={`cart-screen-container ${
          showScreen.cartScreen ? "open" : ""
        }`}
      >
        <NavbarSection
          username={account.username}
          handleShowScreen={handleShowScreen}
        />
        <div className="main-container">
          <div className="left-main">
            <WarningSection />
            <div className="product-container">
              <Items
                items={account.itemData}
                handleRemoveItem={handleRemoveItem}
                handleChangeQuantity={handleChangeQuantity}
              />
            </div>
          </div>
          <SummarySection
            account={account}
            handleShowScreen={handleShowScreen}
            showScreen={showScreen}
            handleShippingForm={handleShippingForm}
            handleShippingSubmit={handleShippingSubmit}
          />
        </div>
      </div>
    );
  }
}

export default CartScreen;
