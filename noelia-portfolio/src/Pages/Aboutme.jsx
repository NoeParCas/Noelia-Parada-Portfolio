import React, { useState } from 'react'
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import WorkExperience from '../Components/WorkExperience';

function Aboutme() {
    const[showExperience, setShowExperience] = useState(false)
    const[showAboutme, setShowAboutme] = useState(true)

  return (
    
<div className="container">
 
<div className="aboutme">

    <h1>About me</h1>
    <p>My name is Noelia Parada Castro, a galician girl who is passionate about coding and learning.</p>
    <p>If you are wondering about my background, I have more than 10 years of experience in different areas of the Tourism sector.<br/>
    The last years have been crazy and I decided to take a 180 degree turn to my professional career and embark myself in this GREAT adventure with the best training school.<br/>
    <p>I could not be more grateful.</p>

    <p>If you want to know more about me do not hesitate to reach me!</p> 
    <p>Moncho will guide you to my contact info</p>
    </p>

    </div>

 
<div>
    <span className="workexp">Want to see my professional background?</span>
    <Button
         color='success'
        variant='contained'
        onClick={() => (setShowExperience(!showExperience) && setShowAboutme(!showAboutme)) }
    >
{showExperience? "Hide me" : "Click me"}

    </Button>
    <Collapse in={showExperience}>
        <WorkExperience/>
    </Collapse>

</div>

    </div>
  )
}

export default Aboutme