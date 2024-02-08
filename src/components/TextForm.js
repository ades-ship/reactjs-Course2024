import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }
    const handleonChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState('enter text here')
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick
    }>convert to uppercase</button>
    </div>
  );
}
