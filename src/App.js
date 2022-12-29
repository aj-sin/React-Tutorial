import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//lets see wether it will be pushed or what
function App() {
  const [Mystyle,setMystyle]=useState({
    color:"black",
    backgroundColor:"white",
})
  const [mode, setmode] = useState("light");
  const togglemode = (cls) => {
    if (mode === "light") {
      setmode("dark");
      setMystyle({
        color:"white",
        backgroundColor:cls
      })
      document.body.style.backgroundColor = cls;
      showalert("Dark mode is on", "Sucess");
    } else {
      if (document.body.style.backgroundColor === "rgb(46, 56, 46)") {
        if (cls === "#2e382e") {
          setmode("light");
          setMystyle({
            color:"black",
            backgroundColor:"white"
          })
          document.body.style.backgroundColor = "white";
          showalert("light mode is on", "Sucess");
        }
        else{
          document.getElementById("flexSwitchCheckDefault1").click()
          setmode("dark");
          setMystyle({
            color:"white",
            backgroundColor:cls
          })
          document.body.style.backgroundColor = cls;
          showalert("Dark mode is on", "Sucess");
          
        }
      }
      else{
        if (cls === "#222f45") {
          setmode("light");
          setMystyle({
            color:"black",
            backgroundColor:"white"
          })
          document.body.style.backgroundColor = "white";
          showalert("light mode is on", "Sucess");
        }
        else{
          document.getElementById("flexSwitchCheckDefault2").click()
          setmode("dark");
          setMystyle({
            color:"white",
            backgroundColor:cls
          })
          document.body.style.backgroundColor = cls;
          showalert("Dark mode is on", "Sucess");

        }

      }
    }

  };
  // rgb(34, 47, 69)
  // const togglemode= (cls) => {
  //   if (mode === "light") {
  //     setmode("dark");
  //     document.body.style.backgroundColor = cls;
  //     showalert("Green mode is on", "Sucess");
  //     console.log(document.body.style.backgroundColor)
  //   } else {
  //     setmode("light");
  //     document.body.style.backgroundColor = "white";
  //     showalert("light mode is on", "Sucess");
  //   }
  // };

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 900);
  };

  return (
    <>
      <Router>


        <Navbar
          title="Textutils"
          showalert={showalert}
          about="About"
          services="Service"
          mode={mode}
          togglemode={togglemode}

        />
        <Alert alert={alert} id="alerty" />

        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} Mystyle={Mystyle}/>} />



            <Route path="/" element={<TextForm title="Enter text below to be Processed...." mode={mode} showalert={showalert} />} />


          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
