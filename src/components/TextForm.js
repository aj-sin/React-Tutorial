import React,{useState} from "react";
// import PropTypes from 'prop-types';


export default function TextForm(props) {

    const handleupclick=()=>{
        // console.log("Button is been clicked" +text)
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showalert("Text converted to Uppercase","Success")
    }
    const handlelcclick=()=>{
        // console.log("Button is been clicked" +text)
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showalert("Text converted to LowerCase","Success")
    }
    const handleonchange=(event)=>{
        setText(event.target.value)//event is an object having an element target which identifies which button called the event
        console.log("onchanged")
    }
    const clear=()=>{
        setText("")
        props.showalert("Text Cleared","Success")
    }
    const copy=()=>{
        let text=document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showalert("Text Copied","Success")
    }
    const removespaces=()=>{
        
        setText(text.replace(/\s+/g, ' ').trim())
        props.showalert("Extra Spaces Removed","Success")
        
    }

    const [text,setText]=useState("");
    // {backgroundColor:props.mode,

  return (
    <>
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`} >
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">
          <h1 >{props.title}</h1>
        </label>
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}
          id="mybox"
          rows="8"
          value={text}
          placeholder="Enter text here...."
          onChange={handleonchange}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={handlelcclick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-info mx-2" onClick={clear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-info mx-2" onClick={copy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-warning mx-2" onClick={removespaces}>Remove extra spaces</button>
    </div>
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{(0.008*(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)).toFixed(2)} Minutes to read</p>
        <h3>Preview</h3>
        <p>{(text.length===0?"Nothing to preveiw":text)}</p>
    </div>
    </>
  );
}
