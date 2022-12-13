// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from "react"
import Alert from './Components/Alert';
import About from './Components/About';
import {Routes, Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alertmsg, setAlertmsg] = useState(null);
  const ShowAlert = (message, type) => {
    setAlertmsg({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertmsg(null)
    }, 1000);
  }
  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
      ShowAlert("Dark mode is enabled!", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      ShowAlert("Light mode is enabled!", "success")
    }
  }


  return (<>

    {/* <Navbar title="TestNav"/> */}
    <Navbar toggle={toggleMode} mode={mode} />
    <Alert alert={alertmsg} />
    
<Routes>
  {/* react partial matching krta hy to exact match k liye exact likhna pry ga path k sath */}
        <Route exact path="/"element={<Textform heading="Enter your text" mode={mode} alert={ShowAlert} />} ></Route>

        <Route exact path="/about" element={<About mode={mode} />}></Route>
      </Routes>
    {/* <BrowserRouter>
      
    </BrowserRouter > */}



  </>
  );
}

export default App;
