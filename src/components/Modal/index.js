import "./style.scss";
import React from "react";

export const Modal = ({ open, onClose, children, zindex, offset = 0 }) => {
  if (!open) return (
    <div>
      <h1>Not Found Modals</h1>
    </div>
  );

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: zindex }}>
      <div className="modal" onClick={(e) => e.stopPropagation(e)} style={{ transform: `translateY(${offset}px)` }}>
        <button className="close-button" onClick={() => onClose()}>X</button>
        { children }
      </div>
    </div>
  );
};
