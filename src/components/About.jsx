import React from 'react'
import resume from '../assets/Samarth_Kashyap_Resume.pdf'
import { Fade } from 'react-awesome-reveal';
import { Context } from './Context';


const About = () => {
  const { theme } = React.useContext(Context);
  return (
    <div
      className={`mx-auto h-screen px-20 flex flex-col gap-16 sm:px-10 md:mt-20 transition-all duration-700 ease-in-out ${
        theme ? "invert" : " invert-0"
      }`}
    >
      <Fade triggerOnce cascade damping={0.4} direction="up" fraction={0.4}>
        <div className="w-1/2 md:w-full">
          <h1 className="text-5xl font-semibold">Who am I?</h1>
          <h1 className="text-xl mt-6 sm:text-lg">
            Just a passionate coder who loves turning coffee into code. Whether
            it's crafting sleek front-end interfaces or optimizing server-side
            operations, I'm all about making the web a better place.
          </h1>
        </div>

        <div className="w-1/2 ml-auto md:w-full md:ml-0">
          <h1 className="text-5xl font-semibold">When I'm Not Coding</h1>
          <h1 className="text-xl mt-6 sm:text-lg">
            You can find me exploring new tech trends, sipping on coffee, and
            occasionally pretending to be a stand-up comedian. Oh, and I'm
            always up for a good game of ping pong!
          </h1>
        </div>
      </Fade>

      <Fade
        triggerOnce
        direction="up"
        delay={200}
        fraction={0.4}
        className="mx-auto mt-6 sm:mt-0"
      >
        <button className="px-10 py-4  text-xl transition-all duration-300 ease-in-out hover:-translate-y-2 mx-auto border-2 rounded-lg border-black font-semibold w-fit">
          <a href={resume} target="_blank">
            Resume
          </a>
        </button>
      </Fade>
    </div>
  );
}

export default About
