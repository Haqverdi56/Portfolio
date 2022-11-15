import React from 'react'
import "./about.scss"
import Type from "../../Typewriter/Typewriter";
import keyboard from '../../assests/images/keyboard.jpg'
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'

const About = () => {
  return (
    <>
    <div id='about'>
      <div className='social-icons'>
        <ul className='social-ul'>
          <li className='social-icon'><BsGithub/></li>
          <li className='social-icon'><AiFillLinkedin/></li>
          <li className='social-icon'><FaTelegram/></li>
        </ul>
        <p>Follow me</p>
      </div>
      <div className='about'>
          <div><Type /></div>
          <div className='keyboardImage'>
            <img src={keyboard} alt="" />
          </div>
      </div>
    </div>
    </>
  )
}

export default About