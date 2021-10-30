import React from "react";
import "./ShippingItem.css";
import { formatter } from "../../constants";
import ModalScreen from "../ModalScreen/ModalScreen";

const ShippingItem = ({ item: { image, price, quantity, title, desc } }) => {
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
      <div className="shipping-info-container">
        <h4>{title}</h4>
        <span>{desc}</span>
        <div className="item-cost-container">
          <span>Qty.: {quantity}</span>
          <span className="shipping-item-total-price">
            {formatter.format(quantity * price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShippingItem;
