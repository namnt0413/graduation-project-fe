import React from "react";
import "./Button.css";

export const Button = ({ setModal }) => {
  return (
    <button
      className="btn btn-primary btn-md view-button"
      onClick={() => setModal(true)}
    >
      <i class="fa-regular fa-file-pdf"></i>
    </button>
  );
};
