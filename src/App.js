import "./App.css";
import Hooks from "./components/Hooks";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
// components :
// navbar
function App() {
  return (
    <>
    <Navbar title="Textutils" aboutText="about textutils"/>
    <div className="container">
    <About/>
    {/* <TextForm heading="enter the text to analyze"/> */}

    {/* <Hooks/> */}
    </div>
    </>
  );
}

export default App;
