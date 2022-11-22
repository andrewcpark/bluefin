import React from "react";
import ReactDOM from "react-dom";
import BluefinLogo from "../../../src/assets/bluefin-logo.png";

import "./Modal.css";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="modalContainer">
          <div>
            <div className="modalHeader">
              <button onClick={onClose} className="btn">
                Close
              </button>
              <img src={BluefinLogo} alt="/" width="75px" height="auto" />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
