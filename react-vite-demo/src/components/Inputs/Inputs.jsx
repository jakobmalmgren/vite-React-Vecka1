import React from "react";
import "./Inputs.css";

const Input = ({ text, placeholder }) => {
  return (
    <section className="input">
      <h3 className="input__header">{text}</h3>
      <input className="input__input" type="text" placeholder={placeholder} />
    </section>
  );
};

export default Input;
