import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import {themeContext} from '../../Context'
import {useContext} from 'react'
import { motion } from 'framer-motion'

const Services = () => {
    const theme = useContext (themeContext);
    const darkMode = theme.state.darkMode; 
    const transition = {duration: 2, type: 'spring'}
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
            <span>Services</span>
            <span style={{color: darkMode? 'white' : ''}}>Establishing an interactive and dynamic website that gurantees high traffic, page views, <br/> and maximum user experince, generating high optimal pages.
                <br/>
                page views, and maximum user experince, generating high optimal pages.
            </span>
            <button className="button s-button">Download Cv</button>
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}>

            </div>
        </div>
        {/* First Card */}
        <div className="cards">
            <motion.div
            whileInView={{left: '14rem'}}
            initial={{left: '25%'}}
            transition={transition}
            style={{left: '14rem'}}>
                < Card
                
                emoji={HeartEmoji} heading={'Design'} detail={'Figma Adobe, Adobe XD, sketch, Photoshop'} />
            </motion.div 
            >
            {/* second Card */}
            <motion.div 
            whileInView={{left: '-3rem'}}
            initial={{left: '25%'}}
            transition={transition}
            style={{top: '12rem', left: '-4rem'}}>
                <Card emoji={Glasses} heading={'Developer'} detail={'Ht,  adobe, photoshop, css, javascript, React'} />
            </motion.div>
            {/* third Card */}
            <motion.div 
            whileInView={{left: '18rem'}}
            initial={{left: '-25%'}}
            transition={transition}
            style={{top: '19rem', left: '12rem'}}>
                <Card emoji={Humble} heading={'UI/UX'} detail={'Can  to make in a and most beautiful design '} />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple'}}></div>
        </div>

    </div>
  )
}

export default Services