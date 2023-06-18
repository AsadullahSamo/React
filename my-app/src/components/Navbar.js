import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
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
          <Link className="nav-link active" aria-current="page" to="/home">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.link}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/UseEffectHook">useEffect</Link>
        </li>
      </ul>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Switch</label>
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