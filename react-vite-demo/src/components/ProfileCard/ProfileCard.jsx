import "./ProfileCard.css";
import img from "../../images/Ada_Lovelace_portrait.jpg";

const ProfileCard = ({ name, title }) => {
  return (
    <section className="profileCard">
      <section className="img-wrapper">
        <img className="profileCard__img" src={img} alt="" />
      </section>

      <h1 className="profileCard__title">{title}</h1>
      <h1 className="profileCard__name">Name: {name}</h1>
      <button className="profileCard__btn">Push me</button>
    </section>
  );
};

export default ProfileCard;
