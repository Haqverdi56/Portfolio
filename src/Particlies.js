import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import keyboardImg from "../src/assests/images/keyboard.jpg"

const Particlies = ({dontMove}) => {

    const particlesInit = async (main) => {
        await loadFull(main)
      };
    
      const particlesLoaded = (container) => {
      };
  return (
    <div className="particles-animation"  >
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
            fullScreen:{ 
                enable: true,
                zIndex:-10,
            },
            background: {
                color: {
                value: "#141e30",
                },
                image: "url(https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/google_app_engine_development_2e3fa976c7.jpg)",
                position: "70% 70%",
                repeat: "no-repeat",
                size: "cover"
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
                },
                modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 91,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 260,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 55,
                    max: 80,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: "polygon",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
            }}
        />
    </div>
  )
}

export default Particlies