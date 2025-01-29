import React from "react";
import "./Checkbox.css";
const checkbox = ({ info }) => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" />
      <p>{info}</p>
    </div>
  );
};

export default checkbox;
