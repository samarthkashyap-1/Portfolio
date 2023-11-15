import React from "react";
import anima from "../assets/anima.json";
import Lottie from "lottie-react";
import link from "../assets/link.png";
import github from "../assets/git.png";
import x from "../assets/x.png";
import insta from "../assets/insta.svg";
import { Fade} from "react-awesome-reveal";
import { Link } from "react-scroll";
import { Context } from "./Context";

const Home = () => {
  const { theme } = React.useContext(Context);
  return (
    <div>
      <div
        className={`mx-auto h-screen px-20 sm:px-10 transition-all duration-700 ease-in-out ${
          theme ? "invert" : "invert-0"
        } `}
      >
        <div className="flex gap-5  justify-end mt-2 sm:justify-center">
          <Fade cascade damping={0.2} triggerOnce delay={800} direction="down">
            <a
              href="
            https://www.linkedin.com/in/samarth-kash/"
              target="_blank"
            >
              <img
                src={link}
                alt="link"
                className="sm:w-7 w-9 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="
            https://www.instagram.com/samarthkashyap_/"
              target="_blank"
            >
              <img
                src={insta}
                alt="insta"
                className="sm:w-7 w-9 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
              />
            </a>
            <a
              href="

              https://www.github.com/samarthkashyap-1"
              target="_blank"
            >
              <img
                src={github}
                alt="github"
                className="sm:w-7 w-9 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
              />
            </a>

            <a href="https://www.twitter.com/samarthkashyap0" target="_blank">
              <img
                src={x}
                alt="x"
                className="sm:w-7 w-9 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
              />
            </a>
          </Fade>
        </div>
        <div className="flex justify-between ">
          <div className="flex sm:flex-col md:flex-col md:mt-10 ">
            <div className="w-1/2 h-full md:w-full flex justify-center align-middle my-auto flex-col gap-6 sm:mt-10">
              <Fade triggerOnce direction="down">
                <h1 className="text-8xl font-extrabold sm:text-6xl">
                  Hey there,
                </h1>
              </Fade>
              <Fade triggerOnce delay={200}>
                <h1 className="text-xl leading-loose sm:leading-relaxed ">
                  I'm{" "}
                  <span className="font-semibold text-3xl sm:text-2xl ">
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
                <Link to="contact" smooth={true} duration={1000} offset={-10}>
                  <button className="px-10 py-4 text-xl mt-10 sm:mt-10 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 mx-auto border-2 rounded-lg border-black font-semibold w-fit">
                    Let's Chat
                  </button>
                </Link>
              </Fade>
            </div>

            <div className="flex-1 sm:hidden ">
              <Fade direction="up" triggerOnce delay={300}>
                <Lottie
                  animationData={anima}
                  className="md:w-[75%] mx-auto invert"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
