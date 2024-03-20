import { useState } from "react";
import './App.css';
import Navbar from "./component/Navbar"
import TodoWrapper from './component/TodoWrapper';

function App() {
  const [darkMode, setDarkMode]=useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode=>!prevMode)  
  }
  return ( 
    <div className="App">
      
      {/* <Navbar 
            />  */}

      <TodoWrapper darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode} />
      
      
    </div>
  );
}

export default App;
