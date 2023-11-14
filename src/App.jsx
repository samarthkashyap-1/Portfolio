import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { scrollSpy } from 'react-scroll';
import load from './assets/load.json'
import Lottie from 'lottie-react'



function App() {
  const [loader, setloader] = useState(true)
 
const handleScroll = () => {
  scrollSpy.update();
}

window.addEventListener('scroll', handleScroll)

useEffect(() => {
  setTimeout(() => {
    setloader(false)
  }, 3000);
}
, [])


  return (
    <>
      <div className="hidden md:block ">
        <div className="fixed flex-col top-0 left-0 right-0 bottom-0 bg-white z-50 flex justify-center items-center">
          <Lottie animationData={load} className="w-1/3" />
          <h1 className='text-xl'>Under Construction for Mobile/Tablets</h1>
        </div>
      </div>
      {loader ? (
        <div className="fixed md:hidden top-0 left-0 right-0 bottom-0 bg-white z-50 flex justify-center items-center">
          <Lottie animationData={load} className="w-1/3" />
          
        </div>
      ) : (
        <>
          <div className="md:hidden">
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
  );
}

export default App
