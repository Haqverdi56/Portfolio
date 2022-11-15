import React, { useState } from "react";
import "./App.scss";
import Header from './components/Header/Header'
import Particlies from "./Particlies";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";


function App() {
  const [dontMove, setDontMove] = useState(true)
  
  return (
    <>
      <div className="App">
        <div className="particles-head">
          <Header />
          <Particlies dontMove={dontMove} />
          <About />
        </div>
        <Skills />
        <Projects/>
        {/* <button onClick={()=> {setDontMove(dontMove ? false : true)}}>Don`t hover</button> */}
      </div>
    </>
  );
}

export default App;
