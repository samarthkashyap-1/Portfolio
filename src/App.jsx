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
import Offline from './components/Offline';
import { Analytics } from "@vercel/analytics/react";
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  const [isOnline , setisOnline] = useState(navigator.onLine)
  const [loader, setloader] = useState(false)
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
  window.addEventListener('online', () => {
    setisOnline(true)
  })
  window.addEventListener('offline', () => {
    setisOnline(false)
  })
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

useEffect(() => {
 
  setTimeout(() => {
    setloader(false)
  }, 2700);  
}  
, [])



  return (
    <Context.Provider value={{ theme, setTheme }}>
      <Helmet>
        <title>Samarth Kashyap | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Samarth Kashyap's portfolio. Showcasing projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Samarth Kashyap, portfolio, web developer, projects, contact, skills"
        />
        <meta name="author" content="Samarth Kashyap" />
        <meta property="og:title" content="Samarth Kashyap | Portfolio" />
        <meta
          property="og:description"
          content="Welcome to Samarth Kashyap's portfolio. Showcasing projects, skills, and contact information."
        />
        <meta property="og:url" content="https://samarthkashyap.me" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://samarthkashyap.me" />
      </Helmet>
      <Analytics />
      {!isOnline ? (
        <Offline />
      ) : (
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
                      <img
                        src={night}
                        width={200}
                        height={200}
                        alt=""
                        className="invert"
                      />
                    ) : (
                      <img src={light} width={200} height={200} alt="" />
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
      )}
    </Context.Provider>
  );
}

export default App
