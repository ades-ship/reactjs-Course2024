import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick=()=>{
    // console.log("uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleClear=()=>{
    let newText='';
    setText(newText);
    props.showAlert("cleared text","success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
    props.showAlert("Textcopied!", "success");
}

const handleinverse=()=>{
  console.log("inverse click is triggered");
  let newText="";
  for(let i=text.length-1; i>=0; i--) {
    newText+=text[i];
  }
  setText(newText);
  props.showAlert("inversed", "success");
}
const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("handled extra spaces","success");
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
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
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
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces
    }>handle Extra spaces</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>    </div>
    <div className="container my-3" style={{color:props.mode=='dark'?'white':'#042743'}}>
       <h2>Your Text summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008* text.split(" ").length} Minutes to read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview!"}</p>
      
    </div>
    </>
  );
}
