import './App.css';
import Navbar from './components/Navbar';
import Textform  from './components/Textform';
import Alert from './components/Alert'
import About from './components/About';
import React,{useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route
// } from "react-router-dom";


function App() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    // backgroundColor: '#eaeaea'
  })

  const darkMode = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
      })
      showAlert("Dark mode has been enabled","success")
      document.body.style.backgroundColor = 'rgb(47 64 96)'
    } else {
      setMyStyle({
        color: 'black',
      })
      showAlert("Light mode has been enabled","success")
      document.body.style.backgroundColor = '#eaeaea'
    }
  }
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const[theme, setTheme] =   useState({
    backgroundColor : 'blue',
    color: 'white',
  })
  const themeSelector = (bgColor, color, bodyBG) =>{
    setTheme({
      backgroundColor : bgColor,
      color: color
    })
    document.body.style.backgroundColor = bodyBG
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutTxt="about TextUtils" mode={myStyle.color==='black'?'light':'dark'} theme={themeSelector}/>
    <Alert alert={alert}/>
    <div className="container-fluid" style={myStyle} >
      <div className="container text-form-container">
          <div id='dark-mode-switch' className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="dark-mode-switcher" onClick={darkMode} aria-checked='false'/>
            <label className="form-check-label" htmlFor="dark-mode-switcher">Dark Mode</label>
          </div>
          {/* <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route> */}
          {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text Below"  mode={myStyle.color} theme={theme}/>}> */}
          <Textform showAlert={showAlert} heading="Enter Your Text Below"  mode={myStyle.color} theme={theme}/>
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
