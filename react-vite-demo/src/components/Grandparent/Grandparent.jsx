import React from "react";
import ParentTwo from "../ParentTwo/ParentTwo";

const Grandparent = () => {
  return (
    <div>
      <ParentTwo string="hejhej barnbarnet" value={400} />
    </div>
  );
};

export default Grandparent;
