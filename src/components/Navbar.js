import React from 'react'
import PropTypes from 'prop-types'
// import {Link}  from "react-router-dom";


export default function Navbar(props) {
  const themeDefault = () =>{
    props.theme('blue', 'white', '#eaeaea')
  }
  const themeGreen = () =>{
    props.theme('Green', 'white', '#b1d2b1')
    console.log('theme green');
  }
  const themeRed = () =>{
    props.theme('Red', 'white', '#d2b1b1')
  }
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"  href="/">Home</a>
              </li>
            </ul>
            <div className="color-paletes navbar-nav">
              <div className="form-check form-check-inline nav-item">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="default-theme" value="option1" defaultChecked onClick={themeDefault}/>
                <label className="form-check-label nav-link" htmlFor="default-theme">Default</label>
              </div>
              <div className="form-check form-check-inline nav-item">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="green-theme" value="option1" onClick={themeGreen}/>
                <label className="form-check-label nav-link" htmlFor="green-theme">Green</label>
              </div>
              <div className="form-check form-check-inline nav-item">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="red-theme" value="option1" onClick={themeRed}/>
                <label className="form-check-label nav-link" htmlFor="red-theme">Red</label>
              </div>
            </div>
          </div>
          </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTxt: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title here',
    aboutTxt: 'About text here'
}