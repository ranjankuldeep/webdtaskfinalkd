import React from 'react'
import './Experince.css'
// import {themeContext} from '../../Context'
// import {useContext} from 'react'
const Experince = () => {
  // const theme = useContext (themeContext);
  
  // const darkMode = theme.state.darkMode; 
  return (
    <div className="experince" id='Experience'>
        <div className="achievement">
        <div className="circle">8+</div>
        <span>years</span>
        <span>Experience</span>
        </div>
        <div className="achievement">
        <div className="circle">20+</div>
        <span>Completed</span>
        <span>projects</span>
        </div>
        <div className="achievement">
        <div className="circle">5+</div>
        <span>Companies</span>
        <span>work</span>
        </div>
    </div>
  )
}

export default Experince