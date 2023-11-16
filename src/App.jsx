import { useEffect, useState,useLayoutEffect } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { scrollSpy } from 'react-scroll';
import load from './assets/load.json'
import Lottie from 'lottie-react'
import { Context } from './components/Context';
import { Switch } from 'antd';
import night from './assets/night.png'
import light from './assets/light.png'
import { Fade } from 'react-awesome-reveal';


function App() {
  const [loader, setloader] = useState(true)
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : false)
 
const handleScroll = () => {
  scrollSpy.update();
}

window.addEventListener('scroll', handleScroll)
useLayoutEffect(() => {
  theme
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");

});

useEffect(() => {
 
  setTimeout(() => {
    setloader(false)
  }, 2700);
}
, [])
useEffect(() => {
   if (
     !localStorage.getItem("theme") ||
     theme != JSON.parse(localStorage.getItem("theme"))
   ) {
     localStorage.setItem("theme", JSON.stringify(theme));}

}
, [theme])



  return (
    <Context.Provider value={{ theme, setTheme }}>
      <>
        {loader ? (
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center transition-all duration-300 ease-in-out ${
              theme ? "invert" : "invert-0"
            }}`}
          >
            <Lottie
              animationData={load}
              className={`w-1/3 md:w-1/2 ${theme ? "invert" : "invert-0"}`}
            />
          </div>
        ) : (
          <>
            <div className={` transition-all duration-300 ease-in-out`}>
              <Fade
                direction="down"
                delay={500}
                triggerOnce
                className="absolute w-20 left-20 z-50 transition-all duration-300 ease-in-out cursor-pointer sm:left-10 sm:w-12 top-0"
              >
                <div
                  onClick={() => {
                    setTheme(!theme);
                  }}
                  className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  {theme ? (
                    <img src={night} alt="" className="invert" />
                  ) : (
                    <img src={light} alt="" />
                  )}
                </div>
              </Fade>

              <Navbar />

              <div name="home">
                <Home />
              </div>
              <div name="about">
                <About />
              </div>
              <div name="skills">
                <Skills />
              </div>
              <div name="projects">
                <Projects />
              </div>
              <div name="contact">
                <Contact />
              </div>
            </div>
          </>
        )}
      </>
    </Context.Provider>
  );
}

export default App
