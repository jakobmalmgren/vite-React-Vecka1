import "./App.css";
import Image from "./components/ImageComponent/Image";
import FormSkeleton from "./components/FormSkeleton/FormSkeleton";
import About from "./components/About/About";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Parent from "./components/Parent/Parent";

import Grandparent from "./components/Grandparent/Grandparent";
import SplitTheNotaSkeleton from "./components/SplitTheNota/SplitTheNotaSkeleton";

export function App() {
  return (
    <>
      <FormSkeleton></FormSkeleton>
    </>
  );
}

export function Apptwo() {
  const name = "Ada Lovelace";
  return (
    <>
      <Image />
      <About name={name} />
    </>
  );
}

export function Appthree() {
  return (
    <>
      <ProfileCard name="jakob" title="my card" />
    </>
  );
}

export function Appfour() {
  return (
    <>
      <Parent />
    </>
  );
}

export function Appfive() {
  return (
    <>
      <Grandparent />
    </>
  );
}

export function Appsix() {
  return (
    <>
      <SplitTheNotaSkeleton />
    </>
  );
}
