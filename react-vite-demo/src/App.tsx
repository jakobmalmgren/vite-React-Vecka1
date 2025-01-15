// import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Greetings from "./components/Greetings/Greetings";
// import Header from "./components/Header/Header";

// function App() {
//   // här är en inline kommentar för en funktion
//   // function name(params:type) {

//   // }

//   /* här är en multiple rad kommentar för en funktion
// dsfakhdghasdgl
// function name(params:type) {

//    }
// degsaasg
//   */
//   const user = { name: "Mandus" };

//   const isLoggedIn = true;

//   // const element = <h3>Hej, {user.name}</h3>;

//   // const element = isLoggedIn ? (
//   //   <h3>Hej Välkommen, {user.name}</h3>
//   // ) : (
//   //   <h3>Logga in!</h3>
//   // );

//   const items = ["item1", "item2", "item3"];

//   function handleClick(e) {
//     // alert("Button clicked");
//     e.preventDefault();
//     console.log("Button clicked:", e.target.value);
//   }

//   return (
//     <>
//       <Header />
//       <main>
//         <Greetings />
//         <h2>From the teacher</h2>
//         {/* {element} */}

//         {/* hur man gör det inline: */}
//         {isLoggedIn ? <h3>Hej Välkommen, {user.name}</h3> : <h3>Logga in!</h3>}

//         <ul>
//           {items.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>

//         <button value={items} onClick={handleClick}>
//           {/* hur man gör det inline: */}
//           {/* <button value={items} onClick={() => console.log("object")}> */}
//           Click me!
//         </button>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Greetings from "./components/Greetings/Greetings";
import Header from "./components/Header/Header";

function App() {
  const user = {
    name: "Mandus",
    lastName: "Lindström",
  };
  const h2 = <h2>From the teacher</h2>;

  return (
    <>
      <Header />
      <main>
        <Greetings user={user} h2={h2} />
      </main>
      <Footer />
    </>
  );
}

export default App;
