import React from 'react'
// import PropTypes from 'prop-types';

export default function About(props) {


    // const [btntext,setbtntext]=useState("Enable dark mode")
    // const [props.props.Mystyle,setprops.Mystyle]=useState({
    //     color:"black",
    //     backgroundColor:"white",
    // })
  
      // let props.Mystyle={
      //                color:props.mode==="light"?"black":"white",
      //                backgroundColor:props.mode==="light"?"white":"#2e382e",
      //            }
    
    
    // const Darkmode=()=>{
    //     if(btntext==="Enable dark mode")
    //     {
    //         setprops.Mystyle({
    //             color:"white",
    //             backgroundColor:"black",
    //         })
    //         setbtntext("Enable light mode")
    //         document.body.style.backgroundColor="black"
    //     }
    //     else{
    //         setprops.Mystyle({
    //             color:"black",
    //             backgroundColor:"white",
    //         })
    //         setbtntext("Enable dark mode")
    //         document.body.style.backgroundColor="white"
    //     }
        
    // }


  return (
    //i am an idiot for the below mistake
    <div className={`container bg-${props.Mystyle.backgroundColor} text-${props.Mystyle.color}`}>
        <h2 className={`bg-${props.Mystyle.backgroundColor} text-${props.Mystyle.color}`}>About us</h2>
     
<div className="accordion" id="accordionExample" style={{"marginTop": "25px"}} >
  <div className="accordion-item" style={props.Mystyle}>
    <h2 className="accordion-header" id="headingOne" style={props.Mystyle}>
      <button style={props.Mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={props.Mystyle}>
    <h2 className="accordion-header" id="headingTwo" style={props.Mystyle}>
      <button style={props.Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={props.Mystyle}>
    <h2 className="accordion-header" id="headingThree" style={props.Mystyle}>
      <button style={props.Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" className="btn btn-light my-2 " onClick={Darkmode} style={props.Mystyle}>{btntext}</button> */}
    </div>
  )
}
