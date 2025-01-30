import React from "react";
import "./Checkbox.css";
const checkbox = ({ info, checked }) => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" checked={checked} />
      <p className="checkbox__p">{info}</p>
    </div>
  );
};

export default checkbox;
