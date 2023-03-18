import React from "react";
import "./Modal.scss";

const Modal = ({ children }) => {
  return (
    <div className="blur">
      <div className="modal-wraper">
        <div className="modal-contant">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
