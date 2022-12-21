import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="Textutils"  about="About section here"   services="service seciton here"/>
      <div className="container">
      <TextForm title="Enter text below to be Processed...."/>
      </div>
    </>
  );
}

export default App;


