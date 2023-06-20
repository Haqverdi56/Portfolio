import React from 'react'
import '../Skills/skills.scss'
import { SiJavascript, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiTypescript } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaSass, FaReact } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { Fade } from 'react-reveal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>HTML</Tooltip>}>
              <span className="d-inline-block">
                <AiFillHtml5 style={{color:"red"}} />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>Javascript</Tooltip>}>
              <span className="d-inline-block">
                <SiJavascript style={{color:"yellow"}} />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>Typescript</Tooltip>}>
              <span className="d-inline-block">
                <SiTypescript style={{color:"blue"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>CSS</Tooltip>}>
              <span className="d-inline-block">
                <IoLogoCss3 style={{color:"blue"}} />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>Bootstrap</Tooltip>}>
              <span className="d-inline-block">
                <BsFillBootstrapFill style={{color:"blueviolet"}} />
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>Tailwind</Tooltip>}>
              <span className="d-inline-block">
                <SiTailwindcss style={{color:"cyan"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>Sass</Tooltip>}>
              <span className="d-inline-block">
                <FaSass style={{color:"blueviolet"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>React</Tooltip>}>
              <span className="d-inline-block">
                <FaReact style={{color:"cyan"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>Redux</Tooltip>}>
              <span className="d-inline-block">
                <SiRedux style={{color:"blueviolet"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>API</Tooltip>}>
              <span className="d-inline-block">
                <TbApi style={{color:"blueviolet"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>NodeJS</Tooltip>}>
              <span className="d-inline-block">
                <SiNodedotjs style={{color:"green"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>Express</Tooltip>}>
              <span className="d-inline-block">
                <SiExpress style={{color:"white"}}/>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" style={{color: "aquamarine"}}>MongoDB</Tooltip>}>
              <span className="d-inline-block">
                <SiMongodb style={{color:"green"}}/>
              </span>
            </OverlayTrigger>
            </div>
        </div>
      </Fade>
    </div>
    </>
  )
}

export default Skills