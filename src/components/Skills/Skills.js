import React from 'react'
import '../Skills/skills.scss'
import { SiJavascript, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaSass, FaReact } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { Fade } from 'react-reveal'

const Skills = () => {
  return (
    <>
    <div className='main-skills' id='skills'>
      <div className='skills-header'>
        <h1>SKILLS</h1>
      </div>
      <Fade left>
        <div className="skills">
            <div className='skills-logos'>
              <AiFillHtml5 style={{color:"red"}} />
              <SiJavascript style={{color:"yellow"}} />
              <IoLogoCss3 style={{color:"blue"}} />
              <BsFillBootstrapFill style={{color:"blueviolet"}} />
              <SiTailwindcss style={{color:"cyan"}}/>
              <FaSass style={{color:"blueviolet"}}/>
              <FaReact style={{color:"cyan"}}/>
              <SiRedux style={{color:"blueviolet"}}/>
              <TbApi style={{color:"blueviolet"}}/>
              <SiNodedotjs style={{color:"green"}}/>
              <SiExpress style={{color:"white"}}/>
              <SiMongodb style={{color:"green"}}/>
            </div>
        </div>
      </Fade>
    </div>
    </>
  )
}

export default Skills