import React from "react";
import "./CartScreen.css";
import { items, formatter } from "../../constants";
import Items from "./Items";
import warning from "../../assets/warning.png";

const sh = 0;
const discount = 0;

class CartScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      itemData: items,
      cartSubTotal: 0,
    };
  }

  componentDidMount() {
    this.handleCartSubTotal();
  }

  handleRemoveItem = (id) => {
    this.setState(
      {
        itemData: this.state.itemData.filter((item) => item.id !== id),
      },
      () => this.handleCartSubTotal()
    );
  };

  handleChangeQuantity = (id, num) => {
    this.setState(
      (prevState) => ({
        itemData: prevState.itemData.map((item) =>
          item.id === id
            ? num > 0
              ? item.quantity < 10
                ? { ...item, quantity: item.quantity + 1 }
                : item
              : item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
            : item
        ),
      }),
      () => this.handleCartSubTotal()
    );
  };

  handleCartSubTotal = () => {
    if (this.state.itemData) {
      this.setState({
        cartSubTotal: this.state.itemData.reduce(function (acc, obj) {
          return acc + obj.price * obj.quantity;
        }, 0),
      });
    }
  };

  render(props) {
    const { showScreen, handleShowScreen } = this.props;
    const { itemData, cartSubTotal } = this.state;

    return (
      <div
        className={`cart-screen-container ${
          showScreen.cartScreen ? "open" : ""
        }`}
      >
        <div className="navbar">
          <span>Cart Screen</span>
          <span>Hello {showScreen.username}</span>
          <span
            className="back-button"
            onClick={() => handleShowScreen("cartScreen", "loginScreen")}
          >
            &lt;-back
          </span>
        </div>
        <div className="main-container">
          <div className="left-main">
            <div className="warning-section">
              <div className="warning-x-btn">
                <span>&#x2716;</span>
              </div>
              <div className="warning-text-img">
                <div className="warning-img">
                  <img src={warning} alt="warning" />
                </div>
                <div className="warning-text">
                  <span className="dark">1 out of stock item removed:</span>
                  <span className="red">06 youTube Chess Channel</span>
                </div>
              </div>
            </div>
            <div className="product-container">
              <Items
                items={itemData}
                handleRemoveItem={this.handleRemoveItem}
                handleChangeQuantity={this.handleChangeQuantity}
              />
            </div>
          </div>
          <div className="right-main">
            <div className="summary-container">
              <h3>Summary</h3>
            </div>
            <hr />
            <div className="promo-container">
              <span>Do you have a promo code?</span>
            </div>
            <div className="promo-inputs">
              <div className="promo-code">
                <span>Code</span>
              </div>
              <div className="promo-btn">
                <span>APPLY</span>
              </div>
            </div>
            <hr />
            <div className="summary">
              <span>Cart Subtotal:</span>
              <span className="a-right dark">
                {formatter.format(cartSubTotal)}
              </span>
              <span>Shipping & Handling:</span>
              <span className="a-right dark">-</span>
              <span>Discount:</span>
              <span className="a-right">-</span>
              <span className="dark">Cart Total:</span>
              <span className="a-right dark red">
                {formatter.format(cartSubTotal + sh + discount)}
              </span>
            </div>
            <hr />
            <div className="summary-btn-container">
              <button
                className="summary-btn"
                disabled={!itemData || itemData.length === 0}
                onClick={() => handleShowScreen("cartScreen", "shippingScreen")}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartScreen;
