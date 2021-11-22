import React, { useContext } from "react";
import "./ShippingItem.css";
import ModalScreen from "../ModalScreen/ModalScreen";
import { formatter } from "../../constants";
import { HandleContext } from "../../App";

const ShippingItem = ({ item: { image, price, quantity, title, desc } }) => {
  const {
    showScreen: { confirmationScreen },
  } = useContext(HandleContext);

  const [isOpen, setIsOpen] = React.useState(false);

  const handleShowDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shipping-item-container">
      <div className="shipping-item-img-container">
        <img src={image} onClick={handleShowDialog} alt="item" />
      </div>
      {isOpen && (
        <ModalScreen image={image} handleShowDialog={handleShowDialog} />
      )}
      <div className={`shipping-info-container ${confirmationScreen ? "conf-screen" : ""}`}>
        <h4 className={`${confirmationScreen ? "conf-screen" : ""}`}>{title}</h4>
        <div className="desc-price-container">
          <span>{desc}</span>
          <div className="item-cost-container">
            <span>Qty.: {quantity}</span>
            <span className="shipping-item-total-price">
              {formatter.format(quantity * price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingItem;
