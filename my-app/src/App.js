import './App.css';
import React, {useState} from 'react'
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {createBrowserRouter, RouterProvider, Routes, BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './components/About';
import UseEffectHook from './components/UseEffectHook';


function App(props) {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type    
    })                    // same as type: type
    setTimeout(() => {
      setAlert(null) 
    }, 1500)
  }

  


  return (
    
    <Router>
      {/* Props and PropTypes (from Navbar.js) */} 
      {/* <Navbar home="Home" link="myLink"/>      // home and link are properties of props object in Navbar
      <Navbar home="Another Home" link="New Link"/>
      */}
      <Navbar link="About"/> 
      <Alert alert={alert}/>
      {/* State and Handling Events (from TextForm.js) */}
      
        {/* <TextForm showAlert={showAlert} />       */}

      <Routes>
        <Route exact path="/home" element={<TextForm showAlert={showAlert} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/UseEffectHook" element={<UseEffectHook />} />
      </Routes>
    </Router>

    
  );
}


export default App;
