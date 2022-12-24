import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    const alertfunction=()=>{
        if(props.mode==="dark")
        {

            props.showalert("Dark mode is on","Success")
        }
        else{
            props.showalert("light mode is on","Success")
        }

    }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
      <div className={`container-fluid `}>
        <a className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode==='dark'?'light':'dark'}`} aria-current="page" href="/">
                {props.about}
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} href="/">
                {props.services}
              </a>
            </li>
           
          </ul>
          
          
          {/* <div className={`form-check form-switch mx-2 text-${props.mode==='dark'?'light':'dark'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode()}
             
            />
            <label className="form-check-label m" htmlFor="flexSwitchCheckDefault">
             Blue mode
            </label>
          </div> */}
          <div className={`form-check mx-2 form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode1}
             
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
             Green mode
            </label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
              //now one thing that i understood was i was trying to call the alert function here with the togglefunction(which enables dark mode ) but somehow it is not possible i dont know why so instead of calling the alert function here only what i did was to call the function in the toggle function itself because i didn't had any choice to be precise
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
             Dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string,
//   services: PropTypes.string,
// };

// Navbar.defaultProps={
//     title:"Title here",
//     about:"About here",
//     services:"services here"
// }
