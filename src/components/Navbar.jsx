import React from 'react'
import home from '../assets/home.svg'
import about from '../assets/about.svg'
import contact from '../assets/contact.png'
import skill from '../assets/skills2.png'
import projects from '../assets/projects.png'
import { Tooltip } from 'antd'
import { useState, useEffect } from "react";
import { Fade } from 'react-awesome-reveal'

import {
  Link,
  
  animateScroll as scroll,
} from "react-scroll";

const Navbar = () => {


   const [prevScrollPos, setPrevScrollPos] = useState(0);
   const [visible, setVisible] = useState(true);
   useEffect(() => {
     const handleScroll = () => {
       const currentScrollPos = window.scrollY;
       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
       setPrevScrollPos(currentScrollPos);
        
     
    
     };

     window.addEventListener("scroll", handleScroll);
   }, [prevScrollPos]);


  return (
    <div
      className={`flex justify-center fixed bottom-16 left-0 right-0 z-50 ${
        visible ? "translate-y-0" : "translate-y-56"
      } transition-all duration-300 ease-in-out`}
    >
     
      <ul className="flex gap-10 sm:gap-5 bg-white w-fit border-2 border-black px-7 py-3 rounded-lg  justify-center drop-shadow-2xl sm:p-3">
        <li className="group cursor-pointer">
          <Tooltip title="Home">
            <Link to="home" smooth={true} duration={1000} offset={-10}>
              <img src={home} alt="home" className={`w-10 aspect-square group-hover:-translate-y-2 transition-all duration-300 ease-in-out hover:drop-shadow-2xl`} />
            </Link>
          </Tooltip>
        </li>
        <li className="group cursor-pointer">
          <Tooltip title="About">
            <Link to="about" smooth={true} duration={1000} offset={-40}>
              <img src={about} alt="about" className="w-10 aspect-square group-hover:-translate-y-2 transition-all duration-300 ease-in-out hover:drop-shadow-2xl" />
            </Link>
          </Tooltip>
        </li>
        <li className="group cursor-pointer">
          <Tooltip title="Skills">
            <Link to="skills" smooth={true} duration={1000} offset={-200}>
              <img src={skill} alt="skills" className="w-10 aspect-square group-hover:-translate-y-2 transition-all duration-300 ease-in-out hover:drop-shadow-2xl" />
            </Link>
          </Tooltip>
        </li>
        <li className="group cursor-pointer">
          <Tooltip title="Projects">
            <Link to="projects" smooth={true} duration={1000} offset={40}>
              <img
                src={projects}
                alt="projects"
                className="w-10 aspect-square group-hover:-translate-y-2 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
              />
            </Link>
          </Tooltip>
        </li>
        <li className="group cursor-pointer">
          <Tooltip title="Contact Me">
            <Link to="contact" smooth={true} duration={1000}>
              <img
                src={contact}
                alt="contactme"
                className="w-10 aspect-square group-hover:-translate-y-2 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
              />
            </Link>
          </Tooltip>
        </li>
      </ul>
    </div>
      
  );
}

export default Navbar
