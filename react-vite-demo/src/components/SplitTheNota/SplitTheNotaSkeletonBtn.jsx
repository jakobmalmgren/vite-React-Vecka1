import React from "react";
import "./SplitTheNotaSkeletonBtn.css";

const SplitTheNotaSkeletonBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="splitTheNotaSkeletonBtn">
      RÄKNA
    </button>
  );
};

export default SplitTheNotaSkeletonBtn;
