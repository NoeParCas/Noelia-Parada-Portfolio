import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ButtonAppBar from './Components/Navbar.jsx'
import Aboutme from './Pages/Aboutme';
import WorkExperience from './Components/WorkExperience';
import Projects from './Pages/Projects.jsx'


function App() {

  const [lightTheme, setLightTheme] = useState(true)
  const [navColor, setNavColor] = useState("#EDF5F0")
  
  const darkStyles = {
    backgroundColor: "#212F3D ",
    color: "white"
  }

  const lightStyles = {
    backgroundColor: "#F4F6F6",
    color: "black"
  }

  const handleToggle= () => {
   setLightTheme(!lightTheme)
   if(!lightTheme){
     setNavColor("#D6EAF8")
   }else{
    setNavColor("#EDF5F0")
   }
  }

  return (
    <div className="App" style={lightTheme ? lightStyles:darkStyles }>
    {/* <button onClick={handleToggle} className="lightThemeBtn">{lightTheme ? "🌚" : "🌝"}</button>
     */}

    <ButtonAppBar handleToggle={handleToggle} lightTheme={lightTheme} navColor={navColor}/>

    <Routes>
    <Route>
    <Route path='/' element={<Home/>} />
    </Route>

    <Route>
    <Route path='/aboutme' element={<Aboutme/>} />
    </Route>

    <Route>
    <Route path='/projects' element={<Projects/>} />
    </Route>

    <Route>
    <Route path='/workexperience' element={<WorkExperience/>} />
    </Route>
    </Routes>
    
      

    </div>
  );
}

export default App;
