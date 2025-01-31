import React from "react";
import "./splitTheNotaSkeleton.css";
import SplitTheNotaSkeletonBtn from "./SplitTheNotaSkeletonBtn";
import SplitTheNotaSkeletonInput from "./SplitTheNotaSkeletonInput";

let people;
let sum;
let tip;

const SplitTheNotaSkeleton = () => {
  const handleSum = (e) => {
    sum = Number(e.target.value);
  };

  const handleFriends = (e) => {
    people = Number(e.target.value);
  };

  const handleTips = (e) => {
    tip = Number(e.target.value);
  };

  const handleTotalAmoundPerPerson = () => {
    const totalTip = sum * tip;
    const totalAmount = sum + totalTip;
    const totalAmountDivided = totalAmount / people;
    console.log(totalAmountDivided);
  };

  return (
    <section className="splitTheNotaSkeleton">
      <h1>Split the nota</h1>
      <SplitTheNotaSkeletonInput onChange={handleSum} text="Summa" />
      <SplitTheNotaSkeletonInput onChange={handleFriends} text="Antal vänner" />
      <SplitTheNotaSkeletonInput onChange={handleTips} text="Dricks" />
      <SplitTheNotaSkeletonBtn onClick={handleTotalAmoundPerPerson} />
    </section>
  );
};

export default SplitTheNotaSkeleton;
