import React, { useState, useEffect } from "react";
import "./App.css";
import LoginSignupScreen from "./components/LoginSignupScreen/LoginSignupScreen";
import CartScreen from "./components/CartScreen/CartScreen";
import ShippingScreen from "./components/ShippingScreen/ShippingScreen";
import PaymentScreen from "./components/PaymentScreen/PaymentScreen";
import { items } from "./constants";

const INIT_SHIPPING_INFO_ERROR = {
  errorMessage: "",
  errorInput: "",
};

const lowestZip = 501;
const highestZip = 99950;
const smallestArea = 201;
const highestArea = 989;

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
    discount: 0,
  });

  const [shippingInfo, setShippingInfo] = useState({
    titleInput: "Miss",
    nameInput: "elanor",
    addressInput: "e street",
    cityInput: "e-city",
    stateInput: "Alabama",
    zipInput: "12345",
    countryInput: "USA",
    cellArea: "321",
    cellInput: "7654321",
    phoneArea: "456",
    phoneInput: "2345678",
    shippingOption: "standard",
  });

  const [shippingInfoError, setShippingInfoError] = useState(
    INIT_SHIPPING_INFO_ERROR
  );

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

  useEffect(() => {
    const { startButton, loginScreen, cartScreen } = showScreen;
    setAccount((prevState) => ({
      ...prevState,
      discount: startButton || loginScreen || cartScreen ? 0 : 4.5,
    }));
  }, [showScreen]);

  useEffect(() => {
    if (Object.values(shippingInfo).some((el) => el === "")) {
      setShippingInfoError(INIT_SHIPPING_INFO_ERROR);
    }
  }, [shippingInfo]);

  useEffect(() => {
    setAccount((prevState) => ({
      ...prevState,
      shippingHandling: shippingInfo.shippingOption === "standard" ? 0 : 5,
    }));
  }, [shippingInfo.shippingOption]);

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

  const handleShippingInputChange = ({ target: { name, value } }) => {
    let re = /.*/;
    let maxlength = 0;
    setShippingInfoError(INIT_SHIPPING_INFO_ERROR);
    setTimeout(() => {
      switch (name) {
        case "nameInput":
        case "cityInput":
          maxlength = 31;
          re = /^([\p{L}]+[,.]?[ ]?|[\p{L}]+['-]?)*$/u;
          break;
        case "addressInput":
          maxlength = 255;
          re = /^([\w',-.#\s])*$/g;
          break;
        case "zipInput":
          maxlength = 5;
          re = /^\d*$/;
          break;
        case "cellArea":
        case "phoneArea":
          maxlength = 3;
          re = /^\d*$/;
          break;
        case "cellInput":
        case "phoneInput":
          maxlength = 8;
          re = /^\d*[\s.-]?\d*$/;
          break;
        default:
          console.log(`${name} is not accounted for...`);
      }
      if (value.length <= maxlength && re.test(value)) {
        setShippingInfo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      } else {
        setShippingInfoError({
          errorMessage: `Character "${value[value.length - 1]}" not accepted`,
          errorInput: "",
        });
      }
    }, 50);
  };

  const handleShippingSelectChange = ({ target: { name, value } }) => {
    setShippingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleShippingForm = () => {
    return !Object.values(shippingInfo).some((el) => el === "");
  };

  const handleShippingSubmit = () => {
    const { zipInput, cellArea, phoneArea, cellInput, phoneInput } =
      shippingInfo;
    setShippingInfoError((prevState) => ({
      ...prevState,
      errorMessage: "",
    }));
    setTimeout(() => {
      if (!(zipInput.length === 5)) {
        setShippingInfoError({
          errorMessage: "5 digits required for zip code",
          errorInput: "zipInput",
        });
      } else if (
        parseInt(zipInput) < lowestZip ||
        parseInt(zipInput) > highestZip
      ) {
        setShippingInfoError({
          errorMessage: `Zip code must be between ${lowestZip} and ${highestZip} inclusively`,
          errorInput: "zipInput",
        });
      } else if (!(cellArea.length === 3)) {
        setShippingInfoError({
          errorMessage: "3 digits required for cell phone area code",
          errorInput: "cellArea",
        });
      } else if (
        parseInt(cellArea) < smallestArea ||
        parseInt(cellArea) > highestArea
      ) {
        setShippingInfoError({
          errorMessage: `Cell Phone area code must be between ${smallestArea} and ${highestArea} inclusively`,
          errorInput: "cellArea",
        });
      } else if (cellInput.replace(/[\s.-]/, "").length < 7) {
        setShippingInfoError({
          errorMessage: `Cell Phone number must have 7 digits`,
          errorInput: "cellInput",
        });
      } else if (
        cellInput.replace(/[\s.-]/, "")[0] === "0" ||
        cellInput.replace(/[\s.-]/, "")[0] === "1"
      ) {
        setShippingInfoError({
          errorMessage: `Cell Phone number cannot start with 0 or 1`,
          errorInput: "cellInput",
        });
      } else if (!(phoneArea.length === 3)) {
        setShippingInfoError({
          errorMessage: "3 digits required for telephone area code",
          errorInput: "phoneArea",
        });
      } else if (
        parseInt(phoneArea) < smallestArea ||
        parseInt(phoneArea) > highestArea
      ) {
        setShippingInfoError({
          errorMessage: `Telephone area code must be between ${smallestArea} and ${highestArea} inclusively`,
          errorInput: "phoneArea",
        });
      } else if (phoneInput.replace(/[\s.-]/, "").length < 7) {
        setShippingInfoError({
          errorMessage: `Phone number must have 7 digits`,
          errorInput: "phoneInput",
        });
      } else if (
        phoneInput.replace(/[\s.-]/, "")[0] === "0" ||
        phoneInput.replace(/[\s.-]/, "")[0] === "1"
      ) {
        setShippingInfoError({
          errorMessage: `Phone number cannot start with 0 or 1`,
          errorInput: "phoneInput",
        });
      } else {
        setShippingInfoError(INIT_SHIPPING_INFO_ERROR);
        handleShowScreen("shippingScreen", "paymentScreen");
      }
    }, 50);
  };

  const handleShippingRadio = ({ target: { value } }) => {
    setShippingInfo((prevState) => ({
      ...prevState,
      shippingOption: value,
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
          handleShippingForm,
          handleShippingSubmit,
        }}
      />
      <ShippingScreen
        showScreen={showScreen}
        account={account}
        shippingInfo={shippingInfo}
        shippingInfoError={shippingInfoError}
        handleProps={{
          handleShowScreen,
          handleShippingInputChange,
          handleShippingSelectChange,
          handleShippingForm,
          handleShippingSubmit,
          handleShippingRadio,
        }}
      />
      <PaymentScreen showScreen={showScreen} />
    </div>
  );
}

export default App;
