import { useState } from 'react';
import './App.css';


function App() {

  const [lightTheme, setLightTheme] = useState(true)

  const darkStyles = {
    backgroundColor: "black",
    color: "white"
  }

  const lightStyles = {
    backgroundColor: "white",
    color: "black"
  }

  const handleToggle= () => {
   setLightTheme(!lightTheme)
  }
  
  return (
    <div className="App" style={lightTheme ? lightStyles:darkStyles }>
    <button onClick={handleToggle} className="lightThemeBtn">{lightTheme ? "🌚" : "🌝"}</button>
      <h1>Hey you! Welcome to my Portfolio!</h1>
    </div>
  );
}

export default App;
