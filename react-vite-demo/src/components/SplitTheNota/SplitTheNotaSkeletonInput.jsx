import React from "react";
import "./SplitTheNotaSkeletonInput.css";

const SplitTheNotaSkeletonInput = ({ text, onChange }) => {
  return (
    <section className="splitTheNotaSkeletonInput-section">
      <h1 className="splitTheNotaSkeletonInput-section__name">{text}</h1>
      <input
        onChange={onChange}
        type="text"
        className="splitTheNotaSkeletonInput"
      />
    </section>
  );
};

export default SplitTheNotaSkeletonInput;
