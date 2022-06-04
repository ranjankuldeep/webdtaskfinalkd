import React from 'react'
import './Work.css'
import upWork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  const theme = useContext (themeContext);
  
  const darkMode = theme.state.darkMode; 
  return (
    <div className="work" >
              <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>Work for all these</span>
            <span>Brands & Clients</span>
            <span style={{color: darkMode? 'white' : ''}}>Diagnosed and troubleshoot different website of the company's
                <br/>
                critical clients by deploying updated
                <br/>
                knowledge of the modern technologies and technique in the industry
                <br/>
                
            </span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}>
            </div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div 
        intial={{rotate: 45}}y
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}}
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upWork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
        </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  ); }

export default Work