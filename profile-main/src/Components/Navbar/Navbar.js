// import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll/modules'
const Navbar = () => {
  return (
    <div className='n-wrapper' >
       <div className="n-left">
           <div className="n-name">kuldeep</div>
            <Toggle />

       </div>
       <div className="n-right">
           <div className="n-list">
               <ul style={{listStyleType: 'none'}}>
                   <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' >
                   <li>Home</li>
                   </Link>
                   <Link spy={true} to='Services' smooth={true}  >

                   <li>Services</li>
                   </Link>
                   <Link spy={true} to='Experience' smooth={true}  >

                   <li>Experience</li>
                   </Link>
                   <Link spy={true} to='portfolio' smooth={true}  >

                   <li>Portfolio</li>
                   </Link>
                   <Link spy={true} to='Testinomial' smooth={true}  >

                   <li>Testinomial</li>
                   </Link>
               </ul>             
           </div>
           <button className="button n-button">
               Contact
           </button>
       </div>


    </div>
  )
}

export default Navbar