import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    // console.log("uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClear=()=>{
    let newText='';
    setText(newText);
  }
const handleinverse=()=>{
  console.log("inverse click is triggered");
  let newText="";
  for(let i=text.length-1; i>=0; i--) {
    newText+=text[i];
  }
  setText(newText);
}

const handleSentence = () => {
 // pass the logic to count the sentences here 
 
};


  

    const handleonChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState('')
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick
    }>convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick
    }>convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClear
    }>clear text</button>

    <button className="btn btn-primary mx-2" onClick={handleSentence
    }>count the sentences</button>
    <button className="btn btn-primary mx-2" onClick={handleinverse
    }>inverse the sentence</button>
    </div>
    <div className="container my-3">
       <h2>Your Text summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008* text.split(" ").length} Minutes to read</p>
       <h2>Preview</h2>
       <p>{text}</p>
      
    </div>
    </>
  );
}
