import React from 'react'
import './projects.scss'
import { Fade } from 'react-reveal'
import crud from '../../assests/images/crud.jpg'
import ecommerce from '../../assests/images/ecommerce.png'
import bubblegame from '../../assests/images/undraw_Gaming_re_cma2.png'

const Projects = () => {
  return (
    <>
    <div className='projects' id='projects'>
      <div className='pro-div'><h1 className='project-header'>PROJECTS</h1></div>
      <Fade left>
        <div className='project-links'>
          <div>
            <a href="https://github.com/Haqverdi56/Crud" >
              <img src={crud} alt="" />
            </a>
            <p>Crud operations</p>
          </div>
          <div>
            <a href="https://github.com/Haqverdi56/Commerse-Project" >
              <img src={ecommerce} alt="" />
            </a>
            <p>E-commerce Project</p>
          </div>
          <div>
            <a href="https://carousel-4mxlgbyx2-haqverdi56.vercel.app/" alt="">
              <img alt="" src="https://codingmasterweb.com/wp-content/uploads/2021/11/Copy-of-Copy-of-for-thumbnail.png" />
            </a>
            <p>Carousel</p>
          </div>
          <div>
            <a href="https://weather-khaki-five.vercel.app/" >
              <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAyF54SL8e2BJKZkce3NTdAuHMsiqjwgojeymJqJxM76Qugc8aoAKiNyDQg5b2e3C6O4&usqp=CAU" />
              </a>
            <p>Weather API</p>
          </div>
          <div>
            <a href="https://currency-convertor-react-dun.vercel.app/ ">
              <img alt="" src="https://cdn.shopify.com/app-store/listing_images/b33f6d876accac12b91af70e42dabbdb/icon/CK-cufzoue8CEAE=.png" />
            </a>
            <p>Currency Converter</p>
          </div>
          <div>
            <a href="https://omdb-api-movies.vercel.app/" rel=''>
              <img alt="" src="https://play-lh.googleusercontent.com/sb30umyAPj9A4ixl4jnPJO15ET-mo4TihKOI0xwFzRbxOfZo6fozeKmAjf8Lhl3mqHY" />
            </a>
            <p>Movies API</p>
          </div>
          <div>
            <a href="https://country-quiz-game.vercel.app/" rel=''>
              <img alt="" src="https://play-lh.googleusercontent.com/jQ3ETPwi-0PLLH6HuUFz13JTKYCf40lZn-TTPccOVPFuZdJA2txX9QKgzn-SZt2uSyLb" />
            </a>
            <p>Country Quiz App</p>
          </div>
          <div>
            <a href="https://bubble-game-js.vercel.app/" rel=''>
              <img alt="" src={bubblegame} />
            </a>
            <p>Bubble Game</p>
          </div>
        </div>
      </Fade>
    </div>
    </>
  )
}

export default Projects