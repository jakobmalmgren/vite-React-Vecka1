import React from "react";
import Child from "../Child/Child";

const ParentTwo = ({ string, value }) => {
  return (
    <div>
      <Child string={string} value={value} />
    </div>
  );
};

export default ParentTwo;
