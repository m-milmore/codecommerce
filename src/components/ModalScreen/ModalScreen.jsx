import React from "react";
import "./ModalScreen.css";

const ModalScreen = ({image, handleShowDialog}) => {
  return (
    <div className="modal" onClick={handleShowDialog}>
      <dialog open>
        <img src={image} alt="item" />
      </dialog>
    </div>
  );
};

export default ModalScreen;
