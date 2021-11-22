import React, { useState, useEffect } from "react";
import "./App.css";
import LoginSignupScreen from "./components/LoginSignupScreen/LoginSignupScreen";
import CartScreen from "./components/CartScreen/CartScreen";
import ShippingScreen from "./components/ShippingScreen/ShippingScreen";
import PaymentScreen from "./components/PaymentScreen/PaymentScreen";
import ConfirmationScreen from "./components/ConfirmationScreen/ConfirmationScreen";
import { items, months } from "./constants";

export const HandleContext = React.createContext();

const INIT_INFO_ERROR = {
  errorMessage: "",
  errorInput: "",
};

const lowestZip = 501;
const highestZip = 99950;
const smallestArea = 201;
const highestArea = 989;

const App = () => {
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
    email: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    titleInput: "Mrs",
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

  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: "card-holder's-name",
    cardNumber: "4111111111111111",
    expMonth: "December",
    expYear: "2022",
    cvv: "123",
    issuer: "",
    issuerLogo: "",
  });

  const [infoError, setInfoError] = useState(INIT_INFO_ERROR);

  const getterMap = { shippingInfo, paymentInfo };

  const setterMap = { setShippingInfo, setPaymentInfo };

  const setterGetter = {
    setShippingInfo: "shippingInfo",
    setPaymentInfo: "paymentInfo",
  };

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
    setInfoError(INIT_INFO_ERROR);
  }, [showScreen]);

  useEffect(() => {
    setAccount((prevState) => ({
      ...prevState,
      shippingHandling: shippingInfo.shippingOption === "standard" ? 0 : 5,
    }));
  }, [shippingInfo.shippingOption]);

  useEffect(() => {
    if (
      Object.values(shippingInfo).some((el) => el === "") ||
      Object.values(paymentInfo).some((el) => el === "")
    ) {
      setInfoError(INIT_INFO_ERROR);
    }
  }, [shippingInfo, paymentInfo]);

  useEffect(() => {
    cardIssuer(paymentInfo.cardNumber);
  }, [paymentInfo.cardNumber]);

  const handleShowScreen = (closeMe, openMe) => {
    window.scrollTo(0, 0);
    setShowScreen((prevState) => ({
      ...prevState,
      [closeMe]: false,
      [openMe]: true,
    }));
  };

  const handleUsername = (username, email) => {
    setAccount((prevState) => ({
      ...prevState,
      username,
      email,
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

  const getDifference = (value, prevValue) => {
    for (const [i, c] of [...value].entries()) {
      if (c !== [...prevValue][i]) return c;
    }
    return value[value.length - 1];
  };

  const cardIssuer = (cardNumber) => {
    const card = cardNumber.replaceAll(" ", "");
    let issuer = "undefined";
    let issuerLogo = "undefined";
    if (card.charAt(0) === "4" && (card.length === 13 || card.length === 16)) {
      issuer = "Visa";
      issuerLogo = "fab fa-cc-visa";
    } else if (
      card.length === 16 &&
      parseInt(card.substring(0, 2)) >= 51 &&
      parseInt(card.substring(0, 2)) <= 55
    ) {
      issuer = "MasterCard";
      issuerLogo = "fab fa-cc-mastercard";
    } else if (
      card.length === 16 &&
      parseInt(card.substring(0, 4)) >= 2221 &&
      parseInt(card.substring(0, 4)) <= 2720
    ) {
      issuer = "MasterCard";
      issuerLogo = "fab fa-cc-mastercard";
    } else if (
      card.length === 15 &&
      (card.substring(0, 2) === "34" || card.substring(0, 2) === "37")
    ) {
      issuer = "Amex";
      issuerLogo = "fab fa-cc-amex";
    } else if (
      card.length === 14 &&
      parseInt(card.substring(0, 3)) >= 300 &&
      parseInt(card.substring(0, 3)) <= 305
    ) {
      issuer = "Diners Club";
      issuerLogo = "fab fa-cc-diners-club";
    } else if (
      card.length === 14 &&
      (card.substring(0, 2) === "36" || card.substring(0, 2) === "38")
    ) {
      issuer = "Diners Club";
      issuerLogo = "fab fa-cc-diners-club";
    } else if (
      card.length === 16 &&
      (card.substring(0, 4) === "6011" || card.substring(0, 2) === "65")
    ) {
      issuer = "Discover";
      issuerLogo = "fab fa-cc-discover";
    } else if (
      (card.length === 15 || card.length === 16) &&
      (card.substring(0, 4) === "2131" ||
        card.substring(0, 4) === "1800" ||
        card.substring(0, 2) === "35")
    ) {
      issuer = "JCB";
      issuerLogo = "fab fa-cc-jcb";
    }
    setPaymentInfo((prevState) => ({
      ...prevState,
      issuer: issuer,
      issuerLogo: issuerLogo,
    }));
  };

  const handleInputChange =
    (setter) =>
    ({ target: { name, value } }) => {
      let re = /.*/;
      let maxlength = 0;
      let error = false;
      setInfoError(INIT_INFO_ERROR);
      switch (name) {
        case "nameInput":
        case "cityInput":
        case "cardholderName":
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
        case "cardNumber":
          maxlength = 19;
          const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          const digitCount = [...value].filter((c) => digits.includes(c));
          re = digitCount.length > 16 ? /^\s*$/ : /^[\d\s]*$/;
          break;
        case "cvv":
          maxlength = 4;
          re = /^\d*$/;
          break;
        default:
          console.log(`${name} is not accounted for...`);
      }
      if (value.length <= maxlength && re.test(value)) {
        setterMap[setter]((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      } else {
        error = true;
      }
      if (error) {
        const getter = setterGetter[setter];
        const diff = getDifference(value, getterMap[getter][name]);
        setTimeout(() => {
          setInfoError({
            errorMessage:
              value.length > maxlength
                ? "Field maximum length reached (including spaces if any)"
                : `Character "${diff}" not accepted`,
            errorInput: "",
          });
        }, 50);
      }
    };

  const handleSelectRadioChange =
    (setter) =>
    ({ target: { name, value } }) => {
      setterMap[setter]((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  const handleInputBlur =
    (setter) =>
    ({ target: { name, value } }) => {
      switch (name) {
        case "cellInput":
        case "phoneInput":
          if (value.length === 7 && /[^\s.-]/.test(value)) {
            setterMap[setter]((prevState) => ({
              ...prevState,
              [name]: value.slice(0, 3) + "-" + value.slice(3),
            }));
          } else if (value.length === 8 && /[^\s.-]/.test(value.charAt(3))) {
            const special = value.split("").filter((c) => /[^\d]/.test(c));
            const newValue = value.replace(special, "");
            setterMap[setter]((prevState) => ({
              ...prevState,
              [name]: newValue.slice(0, 3) + special + newValue.slice(3),
            }));
          }
          break;
        case "cardNumber":
          const digits = value.replaceAll(" ", "");
          switch (digits.length) {
            case 13:
              setterMap[setter]((prevState) => ({
                ...prevState,
                [name]:
                  digits.slice(0, 4) +
                  " " +
                  digits.slice(4, 7) +
                  " " +
                  digits.slice(7, 10) +
                  " " +
                  digits.slice(10),
              }));
              break;
            case 14:
            case 15:
              setterMap[setter]((prevState) => ({
                ...prevState,
                [name]:
                  digits.slice(0, 4) +
                  " " +
                  digits.slice(4, 10) +
                  " " +
                  digits.slice(10),
              }));
              break;
            case 16:
              setterMap[setter]((prevState) => ({
                ...prevState,
                [name]:
                  digits.slice(0, 4) +
                  " " +
                  digits.slice(4, 8) +
                  " " +
                  digits.slice(8, 12) +
                  " " +
                  digits.slice(12),
              }));
              break;
            default:
              console.log(`Only ${value.length} digit(s)`);
          }
          break;
        default:
          console.log(`HandleBlur function doesn't have a case for ${name}.`);
      }
    };

  const handleForm = (getter) => {
    return !Object.values(getterMap[getter]).some((el) => el === "");
  };

  const isCardExpired = (month, year) => {
    const currentYear = new Date().getFullYear(); // number
    const currentMonth = new Date().getMonth(); // number, 0 based, ie, January = 0
    const monthIndex = months.findIndex((ele) => ele === month);
    return parseInt(year) === currentYear && monthIndex < currentMonth;
  };

  const handleSubmit = () => {
    const { shippingScreen, paymentScreen } = showScreen;
    const { zipInput, cellArea, phoneArea, cellInput, phoneInput } =
      shippingInfo;
    const { cardNumber, expMonth, expYear, cvv, issuer } = paymentInfo;
    const reStr =
      "^4[0-9]{12}(?:[0-9]{3})?$" +
      "|^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$" +
      "|^3[47][0-9]{13}$" +
      "|^3(?:0[0-5]|[68][0-9])[0-9]{11}$" +
      "|^6(?:011|5[0-9]{2})[0-9]{12}$" +
      "|^(?:2131|1800|35[0-9]{3})[0-9]{11}$";
    const ccre = new RegExp(reStr);
    setInfoError((prevState) => ({
      ...prevState,
      errorMessage: "",
    }));
    setTimeout(() => {
      if (!(zipInput.length === 5)) {
        setInfoError({
          errorMessage: "5 digits required for zip code",
          errorInput: "zipInput",
        });
      } else if (
        parseInt(zipInput) < lowestZip ||
        parseInt(zipInput) > highestZip
      ) {
        setInfoError({
          errorMessage: `Zip code must be between ${lowestZip} and ${highestZip} inclusively`,
          errorInput: "zipInput",
        });
      } else if (!(cellArea.length === 3)) {
        setInfoError({
          errorMessage: "3 digits required for cell phone area code",
          errorInput: "cellArea",
        });
      } else if (
        parseInt(cellArea) < smallestArea ||
        parseInt(cellArea) > highestArea
      ) {
        setInfoError({
          errorMessage: `Cell Phone area code must be between ${smallestArea} and ${highestArea} inclusively`,
          errorInput: "cellArea",
        });
      } else if (cellInput.replace(/[\s.-]/, "").length < 7) {
        setInfoError({
          errorMessage: `Cell Phone number must have 7 digits`,
          errorInput: "cellInput",
        });
      } else if (
        cellInput.replace(/[\s.-]/, "")[0] === "0" ||
        cellInput.replace(/[\s.-]/, "")[0] === "1"
      ) {
        setInfoError({
          errorMessage: `Cell Phone number cannot start with 0 or 1`,
          errorInput: "cellInput",
        });
      } else if (!(phoneArea.length === 3)) {
        setInfoError({
          errorMessage: "3 digits required for telephone area code",
          errorInput: "phoneArea",
        });
      } else if (
        parseInt(phoneArea) < smallestArea ||
        parseInt(phoneArea) > highestArea
      ) {
        setInfoError({
          errorMessage: `Telephone area code must be between ${smallestArea} and ${highestArea} inclusively`,
          errorInput: "phoneArea",
        });
      } else if (phoneInput.replace(/[\s.-]/, "").length < 7) {
        setInfoError({
          errorMessage: `Phone number must have 7 digits`,
          errorInput: "phoneInput",
        });
      } else if (
        phoneInput.replace(/[\s.-]/, "")[0] === "0" ||
        phoneInput.replace(/[\s.-]/, "")[0] === "1"
      ) {
        setInfoError({
          errorMessage: `Phone number cannot start with 0 or 1`,
          errorInput: "phoneInput",
        });
      } else if (paymentScreen && cardNumber.replaceAll(" ", "").length < 13) {
        setInfoError({
          errorMessage: `Card number missing digits`,
          errorInput: "cardNumber",
        });
      } else if (paymentScreen && !ccre.test(cardNumber.replaceAll(" ", ""))) {
        setInfoError({
          errorMessage: `Invalid card number`,
          errorInput: "cardNumber",
        });
      } else if (paymentScreen && isCardExpired(expMonth, expYear)) {
        setInfoError({
          errorMessage: `Card expired`,
          errorInput: "",
        });
      } else if (paymentScreen && issuer === "Amex" && cvv.length !== 4) {
        setInfoError({
          errorMessage: `4 digits for Amex cvv`,
          errorInput: "cvv",
        });
      } else if (paymentScreen && issuer !== "Amex" && cvv.length !== 3) {
        setInfoError({
          errorMessage: `3 digits for Visa, MC, Diners Club, Discover and JCB cvv`,
          errorInput: "cvv",
        });
      } else {
        setInfoError(INIT_INFO_ERROR);
        shippingScreen && handleShowScreen("shippingScreen", "paymentScreen");
        paymentScreen &&
          handleShowScreen("paymentScreen", "confirmationScreen");
      }
    }, 50);
  };

  const handles = {
    showScreen,
    account,
    shippingInfo,
    paymentInfo,
    infoError,
    handleShowScreen,
    handleUsername,
    handleRemoveItem,
    handleChangeQuantity,
    handleInputChange,
    handleSelectRadioChange,
    handleInputBlur,
    handleForm,
    handleSubmit,
  };

  return (
    <HandleContext.Provider value={handles}>
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
        <CartScreen />
        <ShippingScreen />
        <PaymentScreen />
        <ConfirmationScreen />
      </div>
    </HandleContext.Provider>
  );
};

export default App;
