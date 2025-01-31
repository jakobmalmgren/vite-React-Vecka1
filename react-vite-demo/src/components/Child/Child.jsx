import React from "react";
import "./Child.css";

const Child = ({ string, value }) => {
  const mening = value < 300 ? "Low" : "It's over 9000";
  return (
    <div className="child">
      <h2>Energi = {mening}</h2>
      <h1>{string}</h1>
    </div>
  );
};

export default Child;
