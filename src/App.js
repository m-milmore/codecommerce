import React, { useState, useEffect } from "react";
import "./App.css";
import LoginSignupScreen from "./components/LoginSignupScreen/LoginSignupScreen";
import CartScreen from "./components/CartScreen/CartScreen";
import ShippingScreen from "./components/ShippingScreen/ShippingScreen";
import { items } from "./constants";

function App() {
  const [showScreen, setShowScreen] = useState({
    startButton: false,
    loginScreen: false,
    cartScreen: false,
    shippingScreen: false,
    paymentScreen: false,
    confirmationScreen: false,
  });

  const [account, setAccount] = useState({
    username: "",
    itemData: [],
    cartSubTotal: 0,
    shippingHandling: 0,
    discount: 4.5,
    shippingFormFilled: false,
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setShowScreen((prevState) => ({
        ...prevState,
        startButton: true,
      }));
    }, 250);
    setShowScreen((prevState) => ({
      ...prevState,
      startButton: false,
    }));
    setAccount((prevState) => ({
      ...prevState,
      itemData: items,
    }));
  }, []);

  useEffect(() => {
    if (account.itemData) {
      setAccount((prevState) => ({
        ...prevState,
        cartSubTotal: prevState.itemData.reduce(function (acc, obj) {
          return acc + obj.price * obj.quantity;
        }, 0),
      }));
    }
  }, [account.itemData]);

  const handleShowScreen = (closeMe, openMe) => {
    window.scrollTo(0, 0);
    setShowScreen((prevState) => ({
      ...prevState,
      [closeMe]: false,
      [openMe]: true,
    }));
  };

  const handleUsername = (username) => {
    setAccount((prevState) => ({
      ...prevState,
      username,
    }));
  };

  const handleRemoveItem = (id) => {
    setAccount((prevState) => ({
      ...prevState,
      itemData: prevState.itemData.filter((item) => item.id !== id),
    }));
  };

  const handleChangeQuantity = (id, num) => {
    setAccount((prevState) => ({
      ...prevState,
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
    }));
  };

  const handleShippingForm = (abs) => {
    setAccount((prevState) => ({
      ...prevState,
      shippingFormFilled: abs,
    }));
  };

  return (
    <div className="App">
      <h3>Welcome to Code Commerce</h3>
      <button
        onClick={() => handleShowScreen("startButton", "loginScreen")}
        className={`start-button ${showScreen.startButton ? "open" : ""}`}
      >
        Click Here to Start
      </button>
      <LoginSignupScreen
        showScreen={showScreen}
        handleProps={{ handleShowScreen, handleUsername }}
      />
      <CartScreen
        showScreen={showScreen}
        account={account}
        handleProps={{
          handleShowScreen,
          handleRemoveItem,
          handleChangeQuantity,
        }}
      />
      <ShippingScreen
        showScreen={showScreen}
        handleProps={{ handleShowScreen, handleShippingForm }}
        account={account}
      />
    </div>
  );
}

export default App;
