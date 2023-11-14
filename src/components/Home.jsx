import React from "react";
import anima from "../assets/anima.json";
import Lottie from "lottie-react";
import link from "../assets/link.png";
import github from "../assets/git.png";
import x from "../assets/x.png";
import insta from "../assets/insta.svg";
import { Fade} from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <div className="mx-auto h-screen px-20 ">
        <div className="flex gap-5 justify-end mt-2">
          <Fade cascade damping={0.2} triggerOnce delay={1000} direction="down">
            <a
              href="
            https://www.linkedin.com/in/samarth-kashyap-2b1b3a1b2/"
              target="_blank"
            >
              <img src={link} alt="link" className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="
            https://www.instagram.com/samarthkashyap_/"
              target="_blank"
            >
              <img src={insta} alt="insta" className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="

              https://www.github.com/samarthkashyap-1"
              target="_blank"
            >
              <img src={github} alt="github" className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out" />
            </a>

            <a href="https://www.twitter.com/samarthkashyap-0" target="_blank">
              <img src={x} alt="x" className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out" />
            </a>
          </Fade>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="w-1/2 h-full flex justify-center align-middle my-auto flex-col gap-6">
              <Fade triggerOnce direction="down">
                <h1 className="text-8xl font-extrabold">Hey there,</h1>
              </Fade>
              <Fade triggerOnce delay={200}>
                <h1 className="text-xl leading-loose">
                  I'm{" "}
                  <span className="font-semibold text-3xl ">
                    Samarth Kashyap
                  </span>{" "}
                  , your friendly neighborhood <br />
                  <span className="font-semibold text-2xl">
                    Full-Stack Web Developer
                  </span>
                  . I code with passion and transform ideas into seamless
                  digital experiences.{" "}
                </h1>

                <p className="text-xl">
                  {" "}
                  Let's build something amazing together!
                </p>
              </Fade>

              <Fade triggerOnce direction="up" className="mx-auto" delay={300}>
                <button className="px-10 py-4 text-xl mt-10  transition-all duration-300 ease-in-out hover:-translate-y-2 mx-auto border-2 rounded-lg border-black font-semibold w-fit">
                  Let's Chat
                </button>
              </Fade>
            </div>

            <div className="flex-1">
              <Fade direction="up" triggerOnce delay={300}>
                <Lottie animationData={anima} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
