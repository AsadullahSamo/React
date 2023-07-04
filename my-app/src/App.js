import './App.css';
import React, {Component, useState} from 'react'
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {Routes, BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from './components/About';
import UseEffectHook from './components/UseEffectHook';
import UseIdHook from './components/UseIdHook';
import UseTransitionHook from './components/UseTransitionHook';
import UseMemoHook from './components/UseMemoHook';
import UseContext from './components/useContext';
import State from './context/state';

export const ThemeContext = React.createContext();
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
    <State>
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
        <Route exact path="/UseId" element={<UseIdHook />} />
        <Route exact path="/useTransition" element={<UseTransitionHook />} />        
        <Route exact path="/UseMemoHook" element={<UseMemoHook />} />        
        <Route exact path="/useContext" element={<UseContext />} />        
      </Routes>
    </Router>
    </State>
    
  );
}
export default App;


            //  React Class Based Component
// import NavbarC from './Class Based components/NavbarC';
// export default class App extends Component {
//   name = "Asad";
//   render() {
//     return (
//       // <div>
//       //   Hi, My first React class based component: {this.name}
//       // </div>
//       <NavbarC />
//     )
//   }
// }


