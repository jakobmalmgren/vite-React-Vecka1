import React from "react";
import "./Formskeleton.css";
import Content from "../ContentCompontent/Content";

const FormSkeleton = () => {
  return (
    <section className="FormSkeleton">
      <header className="FormSkeleton__header">Welcome onboard!</header>
      <Content></Content>
    </section>
  );
};

export default FormSkeleton;
