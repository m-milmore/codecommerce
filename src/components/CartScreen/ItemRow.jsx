import React from "react";
import "./ItemRow.css";
import { formatter } from "../../constants";

const ItemRow = ({
  item: { id, image, title, desc, price, quantity },
  handleRemoveItem,
  handleChangeQuantity,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleShowDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr>
        <td colSpan={6}>
          <hr />
        </td>
      </tr>
      <tr key={id}>
        <td>
          <div className="remove-btn-container">
            <span className="remove-btn" onClick={() => handleRemoveItem(id)}>
              &#10060;
            </span>
          </div>
        </td>
        <td className="img-container">
          <img src={image} onClick={handleShowDialog} alt="item" />
          {isOpen && (
            <div className="modal" onClick={handleShowDialog}>
              <dialog open>
                <img src={image} alt="item" />
              </dialog>
            </div>
          )}
        </td>
        <td className="title-container">
          <h5>{title}</h5>
          <span>{desc}</span>
        </td>
        <td className="price-container">
          <span>{formatter.format(price)}</span>
        </td>
        <td>
          <div className="quantity-container">
            <div className="quantity-wrapper">
              <span>{quantity}</span>
            </div>
            <div className="chevron-container">
              <i
                className={`fa fa-chevron-up ${quantity === 10 && "inactive"}`}
                onClick={() => handleChangeQuantity(id, 1)}
              ></i>
              <i
                className={`fa fa-chevron-down ${quantity === 1 && "inactive"}`}
                onClick={() => handleChangeQuantity(id, -1)}
              ></i>
            </div>
          </div>
        </td>
        <td>
          <div className="total-price-container">
            <span>{formatter.format(quantity * price)}</span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemRow;
