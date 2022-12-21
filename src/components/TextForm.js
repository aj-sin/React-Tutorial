import React,{useState} from "react";
// import PropTypes from 'prop-types';


export default function TextForm(props) {

    const handleupclick=()=>{
        console.log("Button is been clicked" +text)
        let newtext=text.toUpperCase()
        setText(newtext)
    }
    const handlelcclick=()=>{
        console.log("Button is been clicked" +text)
        let newtext=text.toLowerCase()
        setText(newtext)
    }
    const handleonchange=(event)=>{
        setText(event.target.value)//event is an object having an element target which identifies which button called the event
        console.log("onchanged")
    }


    const [text,setText]=useState("");


  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.title}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          placeholder="Enter text here...."
          onChange={handleonchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
      <button className="btn btn-danger mx-2" onClick={handlelcclick}>Convert to Uppercase</button>
    </div>
    <div className="container">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
