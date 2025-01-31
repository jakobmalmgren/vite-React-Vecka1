import ProfileCardTwo from "../ProfileCard/ProfileCardTwo";

const Parent = () => {
  const user = {
    name: "Nicodemus Naveltuta",
    age: "47",
    title: "vice ninja",
    email: "nicokick@theoffice.net",
  };
  return (
    <div>
      <ProfileCardTwo user={user} />
    </div>
  );
};

export default Parent;
