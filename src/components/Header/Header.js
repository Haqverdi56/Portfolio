import React from 'react'
import "../Header/header.scss"
import { Link } from "react-scroll"



const Header = () => {
  
  return (
    <>
    <div className='header'>
      <nav>
        <ul>
          <li>
            <Link spy={true} smooth={true} offset={0} duration={1000} to="about">About</Link>
          </li>
          <li>
            <Link spy={true} smooth={true} offset={-50} duration={900} to="skills">Skills</Link>
          </li>
          <li>
            <Link spy={true} smooth={true} offset={50} duration={900} to="projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Header