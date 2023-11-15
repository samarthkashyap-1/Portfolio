import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Marquee from "react-fast-marquee";
import node from "../assets/node.svg";
import react from "../assets/reactjs.svg";
import mongo from "../assets/mongodb.svg";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import python from "../assets/python.svg";
import postman from "../assets/postman.svg";
import sql from "../assets/sql.svg";
import firebase from "../assets/firebase.svg";
import pug from "../assets/pug.svg";
import vs from "../assets/vs.svg";
import boot from "../assets/boot.svg";
import express from "../assets/express.svg";


const Skills = () => {

  const skills = [
    {
        name: "Bootstrap",
        img: boot,
    },
    {

      name: "React",
      img: react,
    },
    {

      name: "Node",
      img: node,
    },
    {

      name: "MongoDB",
      img: mongo,
    },
    {

      name: "Express",
      img: express,
    },
    {

      name: "Javascript",
      img: js,
    },
    {

      name: "Typescript",
      img: ts,
    },
    {

      name: "HTML",
      img: html,
    },
    {

      name: "CSS",
      img: css,
    },
    {

      name: "Git",
      img: git,
    },
    {

      name: "Python",
      img: python,
    },
    {

      name: "Postman",
      img: postman,
    },
    {

      name: "SQL",
      img: sql,
    },
    {

      name: "Firebase",
      img: firebase,
    },
    {

      name: "Pug",
      img: pug,
    },
    {

      name: "VS Code",
      img: vs,
    }
  ];
  return (
    <div className="px-20 flex flex-col gap-20 sm:px-10 sm:my-28  ">
      <Fade triggerOnce direction="up">
        <h1 className="text-6xl font-semibold sm:text-5xl sm:mt-28  ">My Super{" "}Powers</h1>
      </Fade>

      <Fade triggerOnce delay={500} cascade direction="up">
        <Marquee
          pauseOnHover
          autoFill
          speed={60}
          delay={1.2}
          gradient
          gradientColor="white"
          gradientWidth={80}
          style={{
            marginTop: "4rem",
          }}
        >
          <div className="flex gap-20">
            {skills.map((skill) => (
              <Fade triggerOnce cascade fraction={0.4}>
                <div className="flex flex-col group items-center gap-5">
                  <img
                    src={skill?.img}
                    alt={skill?.name}
                    className="w-36 grayscale group-hover:grayscale-0 group-hover:-translate-y-1 transition-all duration-300 ease-in-out aspect-square sm:w-28 "
                  />
                  <h1 className="text-xl font-semibold">{skill?.name}</h1>
                </div>
              </Fade>
            ))}
          </div>
        </Marquee>
      </Fade>
    </div>
  );
}

export default Skills
