import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// components :
// navbar
function App() {
  return (
    <>
    <Navbar title="Textutils" aboutText="about textutils"/>
    <div className="container">

    <TextForm heading="enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
