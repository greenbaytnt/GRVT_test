import "./style.scss";
import React from "react";

export const Modal = ({ open, onClose, children }) => {
  if (!open) return (
    <div>
      <h1>Not Found Modals</h1>
    </div>
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation(e)}>
        <button className="close-button" onClick={() => onClose()}>X</button>
        { children }
      </div>
    </div>
  );
};
