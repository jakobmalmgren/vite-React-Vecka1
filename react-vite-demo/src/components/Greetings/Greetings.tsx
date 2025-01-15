// export default function Greetings(props) {
export default function Greetings({ user, h2 }) {
  // console.log("props: ", props.h2);
  console.log("props: ", h2);

  // const { name, lastName } = props.user;
  const { name, lastName } = user;

  return (
    <>
      <h1>
        {/* Hello World from {props.name} {props.lastName} */}
        Hello World from {name} {lastName}
      </h1>
      {/* {props.h2} */}
      {h2}
    </>
  );
  // return <h1>Hello World from </h1>;
}
