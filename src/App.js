
import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './components/Main';



export default function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
      document.body.className = theme
      if(theme === "dark"){
        document.body.getElementsByTagName("i")[0].className = "bi bi-brightness-high";
        document.body.getElementsByTagName("i")[0].style = "color: white";
      
      }else if(theme === "light"){
        document.body.getElementsByTagName("i")[0].className = "bi bi-moon-fill icon-dark";
        document.body.getElementsByTagName("i")[0].style = "color: black";
      }
  },[theme])

 

  return (
    <div className="App">
    
      <Main theme={theme} setTheme={setTheme} />
    </div>
  );
}


