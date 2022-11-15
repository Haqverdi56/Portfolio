import React from 'react'
import './projects.scss'
import { Fade } from 'react-reveal'
import crud from '../../assests/images/crud.jpg'
import ecommerce from '../../assests/images/ecommerce.png'

const Projects = () => {
  return (
    <>
    <div className='projects' id='projects'>
      <div className='pro-div'><h1 className='project-header'>PROJECTS</h1></div>
      <Fade left>
        <div className='project-links'>
          <div>
            <a href="https://github.com/Haqverdi56/Crud" target="_blank"><img src={crud} /></a>
            <p>Crud operations</p>
          </div>
          <div>
            <a href="https://github.com/Haqverdi56/Commerse-Project" target="_blank"><img src={ecommerce} /></a>
            <p>E-commerce Project</p>
          </div>
          <div>
            <a href="https://carousel-4mxlgbyx2-haqverdi56.vercel.app/" target="_blank"><img src="https://codingmasterweb.com/wp-content/uploads/2021/11/Copy-of-Copy-of-for-thumbnail.png" /></a>
            <p>Carousel</p>
          </div>
        </div>
      </Fade>
    </div>
    </>
  )
}

export default Projects