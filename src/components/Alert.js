import React from 'react'
import "./Alert.css"
// style=""
export default function Alert(props) {
  return (
   props.alert && <div className="alert alert-success" role="alert" id="alert" >
        <strong>{props.alert.type}</strong>: {props.alert.msg} 
    </div>
  )
}

//this syntax of && is used because the fuction Alert() will first compute props.alert and if its true i.e if it has any value than only it will compile the next element that is our JSX
