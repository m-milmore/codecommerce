import React, { useState } from "react";
import "./App.css";
import LoginSignupScreen from "./components/LoginSignupScreen/LoginSignupScreen";
import CartScreen from "./components/CartScreen/CartScreen";
import ShippingScreen from "./components/ShippingScreen/ShippingScreen";

function App() {
  const [showScreen, setShowScreen] = useState({
    startButton: false,
    loginScreen: false,
    cartScreen: false,
    shippingScreen: false,
    username: "",
  });

  React.useEffect(() => {
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
  }, []);

  const handleShowScreen = (closeMe, openMe) => {
    window.scrollTo(0, 0);
    setShowScreen((prevState) => ({
      ...prevState,
      [closeMe]: false,
      [openMe]: true,
    }));
  };

  const handleUsername = (username) => {
    setShowScreen((prevState) => ({
      ...prevState,
      username,
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
        handleShowScreen={handleShowScreen}
        handleUsername={handleUsername}
      />
      <CartScreen showScreen={showScreen} handleShowScreen={handleShowScreen} />
      <ShippingScreen
        showScreen={showScreen}
        handleShowScreen={handleShowScreen}
      />
    </div>
  );
}

export default App;
