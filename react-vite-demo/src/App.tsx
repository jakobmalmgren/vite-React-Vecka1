import "./App.css";
import Footer from "./components/Footer/Footer";
import Greetings from "./components/Greetings/Greetings";
import Header from "./components/Header/Header";

function App() {
  // här är en inline kommentar för en funktion
  // function name(params:type) {

  // }

  /* här är en multiple rad kommentar för en funktion
dsfakhdghasdgl
function name(params:type) {
    
   }
degsaasg
  */

  return (
    <>
      <Header />
      <main>
        <Greetings />
        <Greetings />
        <Greetings />
        <h2>From the teacher</h2>
      </main>
      <Footer />
    </>
  );
}

export default App;
