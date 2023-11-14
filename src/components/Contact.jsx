import React,{useState} from 'react'
import { Fade } from 'react-awesome-reveal'
import contact from '../assets/contact.json'
import link from "../assets/link.png";
import github from "../assets/git.png";
import x from "../assets/x.png";
import insta from "../assets/insta.svg";
import Lottie from 'lottie-react'

import {db} from '../config/firebase'
import { collection, addDoc } from "firebase/firestore";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [submit, setSubmit] = useState(false)
  const contactref = collection(db, "Contacts");
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [message , setMessage] = useState('')

   

const notify = () =>
  toast.success("Got it!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    
    
  });

  const handleSubmit = async(e) => {
  try {
      setSubmit(true)
      e.preventDefault();
      const data = {
        name: name,
        email: email,
        message: message,
      };
      await addDoc(contactref, data);
      notify();
      setEmail("");
      setName("");
      setMessage("");
      setSubmit(false)
    
  } catch (error) {
    setSubmit(false)
    toast.error("Something went wrong!");
  }


  }

  
  return (
    <div className="px-20 my-10 ">
      <ToastContainer />
      <Fade triggerOnce direction="up" fraction={0.6}>
        <h1 className="text-6xl font-semibold mb-10">Let's Connect!</h1>
      </Fade>
      <div className="flex ">
        <div className="flex flex-1 flex-col gap-12">
          <Fade triggerOnce direction="up">
            <h1 className="text-xl">
              Got a project in mind or just want to geek out about coding? I'm
              all ears!{" "}
              <span className="font-semibold text-2xl">Shoot me a message</span>
              .
            </h1>
            <h1 className="text-xl">
              let's create something awesome together.
            </h1>
          </Fade>
          <Fade triggerOnce direction="up">
            <Lottie animationData={contact} className="w-1/2 mx-auto" />
          </Fade>
        </div>
        <div className="flex-1">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                <Fade triggerOnce direction="up">
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="px-5 py-3 border-2 border-black w-full rounded-lg"
                  />
                </Fade>
                <Fade triggerOnce direction="up">
                  <input
                    value={email}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-5 py-3 border-2 border-black w-full rounded-lg"
                  />
                </Fade>

                <Fade triggerOnce direction="up">
                  <textarea
                    value={message}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="px-5 py-3 border-2 border-black w-full rounded-lg"
                  ></textarea>
                </Fade>
                <Fade
                  triggerOnce
                  direction="up"
                  delay={300}
                  className="ml-auto"
                >
                  <input
                    type="submit"
                    value="Peww!"
                    className="px-10 py-4 text-xl transition-all duration-300 ease-in-out hover:-translate-y-2 mx-auto border-2 rounded-lg border-black font-semibold w-fit" disabled={submit}
                  />
                  
                </Fade>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center">
        <Fade cascade damping={0.2} triggerOnce delay={400} direction="up">
          <a
            href="
            https://www.linkedin.com/in/samarth-kashyap-2b1b3a1b2/"
            target="_blank"
          >
            <img
              src={link}
              alt="link"
              className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
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
              className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
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
              className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
            />
          </a>

          <a href="https://www.twitter.com/samarthkashyap0" target="_blank">
            <img
              src={x}
              alt="x"
              className="w-7 aspect-square hover:-translate-y-1 transition-all duration-300 ease-in-out"
            />
          </a>
        </Fade>
      </div>
    
    </div>
  );
}

export default Contact
