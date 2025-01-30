import "./Content.css";
import Inputs from "../Inputs/Inputs";
import Button from "../Button/Button";
import Checkbox from "../Inputs/checkbox";

const Content = () => {
  return (
    <section className="content">
      <Inputs text="NAME" placeholder="Sixten von brusselkohl" />

      <Inputs text="EMAIL" placeholder="Sixten@gmail.com" />
      <p>wrong format</p>

      <Inputs text="PASSWORD" placeholder="* * * * * *" />
      <div className="content-checkbox-wrapper">
        <Checkbox info="8 + chars" checked={true} />
        <Checkbox info="capital" checked={true} />
        <Checkbox info="number" checked={false} />
        <Checkbox info="symbol" checked={false} />
      </div>

      <Button />
    </section>
  );
};

export default Content;
