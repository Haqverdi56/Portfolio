import React from 'react'
import "./about.scss"
import Type from "../../Typewriter/Typewriter";
import photo from '../../assests/images/profile photo.jfif.jfif'
import { BsGithub } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTelegram } from 'react-icons/fa'

const About = () => {
  return (
    <>
    <div id='about'>
      <div className='social-icons'>
        <ul className='social-ul'>
          <li className='social-icon'>
            <a target='_blank' rel="noreferrer" href="https://github.com/Haqverdi56"><BsGithub/></a>
          </li>
          <li className='social-icon'>
            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/haqverdi-quliyev-65b1ab202/"><AiFillLinkedin/></a>
          </li>
          <li className='social-icon'>
            <a target='_blank' rel="noreferrer" href="https://t.me/qlyff"><FaTelegram/></a>
          </li>
        </ul>
        <p>Follow me</p>
      </div>
      <div className='about'>
          <div><Type /></div>
          <div className='keyboardImage'>
            <img src={photo} alt="" />
          </div>
      </div>
    </div>
    </>
  )
}

export default About