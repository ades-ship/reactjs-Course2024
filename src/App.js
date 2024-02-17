import "./App.css";
import Hooks from "./components/Hooks";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// components :
// navbar
function App() {
  // set the dark and light mode use the state in the application
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

// make the dark enable toggle function
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.background='#042743';
    showAlert("Dark mode has been enabled","success");
  }else {
    setMode('light');
    document.body.style.background='white';
    showAlert("white mode has been enabled","success");
  }
}

  return (
    <>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} aboutText="about textutils"/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <About/> */}
    <TextForm showAlert={showAlert} heading="enter the text to analyze" mode={mode}/>

    {/* <Hooks/> */}
    </div>
    </>
  );
}

export default App;
