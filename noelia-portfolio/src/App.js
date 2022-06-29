import { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

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
      <h2>I am Noelia Parada Castro, a Junior Software Developer, dog lover and gastronomy enthusiast.</h2>
      <h4>Feel free to look around, Moncho the Pug will guide you!</h4>
      <Link to="#"><img display="flex" src="https://i.pinimg.com/originals/f8/97/e2/f897e2e871ed90d572f23b0539397432.gif" width="130" height="100" /></Link>

    </div>
  );
}

export default App;
