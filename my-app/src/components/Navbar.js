import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
  const location = useLocation();  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/home" ? "active": ""}`} aria-current="page" to="/home">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} to="/about">{props.link}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/UseEffectHook" ? "active" : ""}`} to="/UseEffectHook">useEffect</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/UseId" ? "active" : ""}`} to="/UseId">useId</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/useTransition" ? "active" : ""}`} to="/useTransition">useTransition</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/UseMemoHook" ? "active" : ""}`} to="/UseMemoHook">useMemo</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/useContext" ? "active" : ""}`} to="/useContext">useContext</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Form" ? "active" : ""}`} to="/Form">Form</Link>
        </li>
      </ul>

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    home: PropTypes.string,
    link: PropTypes.string
}

Navbar.defaultProps = {
    home: "Home",
    link: "default link"
}