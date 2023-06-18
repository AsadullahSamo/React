import React, { useState } from 'react'
import Alert from './Alert';

export default function TextForm(props) {
  const [title, setTitle] = useState("Initial")
  const [convertedText, setConvertedText] = useState("");       // useState() returns one variable and one function, and we store both of them using array destructuring
  const [btnText, newBtnText] = useState("Enable Dark Mode");
  const [style, newStyle] = useState({
    color: "black",
    background: "white"
  })
  const [details, setDetails] = useState({
    textarea: "",
    input: ""
  })
  let handleChange = (e) => {
    let{name, value} = e.target;
    setDetails((prev) => ({
      ...prev, [name]: value
    }))  
  };

  const toUpperCase = () => {
  setDetails((prev) => ({
      ...prev,
      textarea: prev.textarea.toUpperCase()
    }));
    props.showAlert("success", "Converted to uppercase")
  };
  let toggleStyle = () => {
    if(style.color === "black"){
        newStyle({
            color: "white",
            background: "black"        
        })
        newBtnText("Enable Light Mode")
    } else {
        newStyle({
            color: "black",
            background: "white"        
        })
        newBtnText("Enable Dark Mode")
    }
  }
  let changeTitle = (e) => {
    setTitle(details.input)
    props.showAlert("success", "Title changed")
  }
  
  return (
    <>
    <div className="container my-5">
    <h1> Textarea </h1>
        <textarea name="textarea" className="form-control" style={style} placeholder="Enter text here" rows="10" onChange={handleChange} value={details.textarea}></textarea>
        <button className='my-2 btn btn-primary' onClick={toUpperCase}> Convert to Uppercase</button>
        <button className='my-2 btn btn-primary mx-4' onClick={toggleStyle}> {btnText}</button>
    </div>
    <input name="input" type="text" onChange={handleChange}/>
    <button className='btn btn-success mx-4' onClick={changeTitle}> Change Title </button>
    <h2>{title}</h2>
    </>
  )

  
}
