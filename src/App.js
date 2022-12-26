import React,{ useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2d3047";
      showalert("Dark mode is on", "Sucess");
    } else {
      setmode("light");

      document.body.style.backgroundColor = "white";
      showalert("light mode is on", "Sucess");
    }
  };
  const togglemode1 = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e382e";
      showalert("Green mode is on", "Sucess");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode is on", "Sucess");
    }
  };

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
    {/* <Router> */}

    
      <Navbar
        title="Textutils"
        showalert={showalert}
        about="About"
        services="Service"
        mode={mode}
        togglemode={togglemode}
        togglemode1={togglemode1}
        />
      <Alert alert={alert} id="alerty" />
      
      <div className="container">
      {/* <Routes>
          <Route path="/about" element= {<About />}/>
          
          
          
          <Route path="/" element= {<TextForm title="Enter text below to be Processed...." mode={mode} showalert={showalert}/>}/>
          
          
        </Routes> */}
      <TextForm title="Enter text below to be Processed...." mode={mode} showalert={showalert}/>
        
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
