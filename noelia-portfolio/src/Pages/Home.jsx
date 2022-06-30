import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="homepage">
        <h1>Hey you! Welcome to my Portfolio!</h1>
      <h3>Feel free to look around, Moncho the Pug will guide you!</h3>
      <Link to="/aboutme"><img className="moncho" display="flex" src="https://i.pinimg.com/originals/f8/97/e2/f897e2e871ed90d572f23b0539397432.gif" width="130" height="100" /></Link>
    </div>
  )
}

export default Home