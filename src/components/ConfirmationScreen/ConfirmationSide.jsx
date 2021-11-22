import React from "react";
import "./ConfirmationSide.css";
import BackButtonAndErrorMessage from "../BackButtonAndErrorMessage/BackButtonAndErrorMessage";

const ConfirmationSide = () => {
  return (
    <div className="confirmation-side-container">
      <h4>Confirmation</h4>
      <hr />
      <div className="checkmark-container">
        <i class="fas fa-check conf-screen"></i>
      </div>
      <h3>Congratulations.</h3>
      <h3>Your order is accepted.</h3>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum hic
        corrupti possimus.
      </span>
      <h4 className="track-order">TRACK ORDER</h4>
      <BackButtonAndErrorMessage/>
    </div>
  );
};

export default ConfirmationSide;
