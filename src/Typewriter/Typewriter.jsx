import React from "react";
import Typewriter from 'typewriter-effect'
import "../Typewriter/typewriter.scss"

const TypewriterJS = () => {
  return (
    <>
      <div className="Typewriters">
        <p>I`m</p>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ["Frontend Developer", "React Developer", "MERN Developer"],
          }}
        />
      </div>
    </>
  );
};

export default TypewriterJS;
