import React, { useState, useRef,useEffect } from "react";
import img from "../assets/Onetap.png";
import img2 from "../assets/Glog.png";
import img3 from "../assets/Feedback app.png";
import img4 from "../assets/Chandrafarms.png";
import { Fade } from "react-awesome-reveal";
import { Context } from "./Context";


const Projects = () => {
  const { theme } = React.useContext(Context);

    const imageUrls = [
      { name: "onetap", img: img, link: "https://onetap-jet.vercel.app/" },
      {
        name: "glog",
        img: img2,
        link: "https://glog.live",
      },
      {
        name: "feedback",
        img: img3,
        link: "https://feedbackapp-r78n-samarthkashyap-1.vercel.app/",
      },
      {
        name: "chandrafarms",
        img: img4,
        link: "https://chandrafarms.in",
      },
    ];
  const myref = {
    onetap: useRef(null),
    glog: useRef(null),
    feedback: useRef(null),
    chandrafarms: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("onetap");
  const [change, setchange] = useState(true);
  const [imgSrc, setImgSrc] = useState();


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            imgtodiplay()
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    Object.values(myref).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    
    return () => {
      Object.values(myref).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);


  const imgtodiplay = () => {
    
     const foundElement = imageUrls.find((element) => element.name === activeSection);

  if (foundElement) {
  
  return foundElement;
  }
    return imageUrls[0];
  }



    useEffect(() => {
        // preloading the image
      const img = new Image();
      img.src = imgtodiplay().img;
      


       

      
      setchange(true);
      setTimeout(() => {
        setchange(false);
        setImgSrc(imgtodiplay().img);
      }, 400);


    }, [activeSection]);


  return (
    <div className=" p-20 flex flex-col gap-10 mt-20 sm:p-10">
      <Fade triggerOnce direction="up" fraction={0.8}>
        <h1
          className={`text-6xl font-semibold h-fit sm:text-5xl ${
            theme ? "invert" : "invert-0"
          }`}
        >
          Here's my Garage
        </h1>
      </Fade>
      <div className="flex min-h-screen md:flex-col">
        {/* Left side */}
        <div className="flex-1 h-screen flex py-10 px-2 sticky z-10 top-0 flex-col">
          {/* Display the image based on the current scroll position */}

          <a target="_blank" href={imgtodiplay().link} className="my-auto ">
            <Fade triggerOnce direction="up">
              <img
                src={imgSrc}
                alt={imgtodiplay().name}
                className={`w-full rounded-lg ring-black ring-4 h-fit sm:ring-2 sm:h-44  ring-offset-4 shadow-2xl grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:-translate-y-2 ${
                  change ? " opacity-0" : "opacity-100"
                }`}
              />
            </Fade>
          </a>
        </div>

        {/* Right side */}
        <div
          className={`flex-1 flex flex-col sm:gap-20 transition-all duration-700 ease-in-out  ${
            theme ? "invert" : "invert-0"
          } `}
        >
          
          {/* onetap */}

          <div
            ref={myref.onetap}
            id="onetap"
            className=" h-screen flex p-10 flex-col gap-12 sm:gap-6 sm:p-0 sm:mb-10 sm:mt-5"
          >
            <Fade triggerOnce direction="up" className="h-screen flex ">
              <div>
                <h1 className="text-5xl font-bold sm:text-3xl">Onetap</h1>
                <h1 className="text-xl mt-10">
                  Onetap - the one-stop solution for creating a personalized
                  landing page for all your important links. With Onetap,
                  Streamlining and Simplifying your online presence is Just One
                  Tap Away!{" "}
                </h1>
              </div>
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-8 w-full place-content-around">
                {/* Features Section */}
                <div className="text-2xl font-semibold">
                  <h1>Features</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>Authentication & Secure</li>
                    <li>Customizable Templates</li>
                    <li>Multiple Link Support</li>
                    <li>User-Friendly</li>
                  </ul>
                </div>

                {/* Tech Stack Section */}
                <div className="text-2xl font-semibold">
                  <h1>Tech Stack</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>

              <div className="flex text-xl gap-10 mt-auto">
                <a
                  target="_blank"
                  className="hover:underline "
                  href="https://onetap-jet.vercel.app/"
                >
                  Live
                </a>
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://github.com/samarthkashyap-1/Onetap"
                >
                  Github Repositary
                </a>
              </div>
            </Fade>
          </div>
            <hr className="border-black mx-10 sm:mx-0" />

          {/* Glog */}

          <div
            ref={myref.glog}
            id="glog"
            className=" h-screen flex p-10 flex-col gap-12 sm:gap-6 sm:p-0 sm:mb-10 "
          >
            <Fade triggerOnce direction="up" className="h-screen flex">
              <div>
                <h1 className="text-5xl font-bold sm:text-3xl">Glog</h1>
                <h1 className="text-xl mt-10">
                  Embark on a journey of expression and creativity with Glog, a
                  full-stack blog website meticulously crafted using React,
                  Tailwind CSS, and Firebase. At the intersection of sleek
                  design and robust functionality, Glog redefines the blogging
                  experience by seamlessly blending modern aesthetics with
                  powerful features.
                </h1>
              </div>
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-8 w-full place-content-around">
                {/* Features Section */}
                <div className="text-2xl font-semibold">
                  <h1>Features</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>Google Authentication</li>
                    <li>Intuitive Blog Management</li>
                    <li>Proficiency Showcase</li>
                    <li>Responsive and Simple UI</li>
                  </ul>
                </div>

                {/* Tech Stack Section */}
                <div className="text-2xl font-semibold">
                  <h1>Tech Stack</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>

              <div className="flex text-xl gap-10 mt-auto">
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://glog.live/"
                >
                  Live
                </a>
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://github.com/samarthkashyap-1/Blogsite"
                >
                  Github Repositary
                </a>
              </div>
            </Fade>
          </div>
             <hr className="border-black mx-10 sm:mx-0" />
          {/* Feedback app */}

          <div
            ref={myref.feedback}
            id="feedback"
            className=" h-screen flex p-10 flex-col gap-12 sm:gap-6 sm:p-0 sm:mb-12 "
          >
            <Fade
              triggerOnce
              direction="up"
              // fraction={1}
              className="h-screen flex"
            >
              <div>
                <h1 className="text-5xl font-bold sm:text-3xl">Feedback App</h1>
                <h1 className="text-xl mt-10">
                  In the dynamic landscape of education and continuous
                  improvement, the Feedback App stands as a testament to
                  innovation and efficiency. Developed with a cutting-edge tech
                  stack featuring MERN (MongoDB, Express.js, React, Node.js) and
                  Tailwind CSS, this web-based application redefines how
                  educational feedback is managed.{" "}
                </h1>
              </div>
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-8 w-full place-content-around">
                {/* Features Section */}
                <div className="text-2xl font-semibold">
                  <h1>Features</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>User-Centric Design</li>
                    <li>Role-Based Authentication</li>
                    <li>Teacher Empowerment</li>
                    <li>Export Functionality</li>
                  </ul>
                </div>

                {/* Tech Stack Section */}
                <div className="text-2xl font-semibold">
                  <h1>Tech Stack</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>AG Grid</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>

              <div className="flex text-xl gap-10 mt-auto">
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://onetap-jet.vercel.app/"
                >
                  Live
                </a>
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://github.com/samarthkashyap-1/Feedbackapp"
                >
                  Github Repositary
                </a>
              </div>
            </Fade>
          </div>
             <hr className="border-black mx-10 sm:mx-0" />
          {/* chandrfarms */}

          <div
            ref={myref.chandrafarms}
            id="chandrafarms"
            className=" h-screen flex p-10 flex-col gap-12 sm:gap-8 sm:p-0 "
          >
            <Fade triggerOnce direction="up" className="h-screen flex">
              <div>
                <h1 className="text-5xl font-bold sm:text-3xl">
                  Chandra Farms
                </h1>
                <h1 className="text-xl mt-10">
                  I orchestrated a seamless online experience for couples
                  seeking the perfect backdrop for their special day. From
                  captivating design to intuitive navigation.
                </h1>
              </div>
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-8 w-full place-content-around">
                {/* Features Section */}
                <div className="text-2xl font-semibold">
                  <h1>Features</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>Elegant Design</li>
                    <li>Seamless Navigation</li>
                    <li>Interactive Galleries</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>

                {/* Tech Stack Section */}
                <div className="text-2xl font-semibold">
                  <h1>Tech Stack</h1>
                  <ul className="mt-6 text-lg list-disc">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Google Sheet</li>
                  </ul>
                </div>
              </div>

              <div className="flex text-xl gap-10 mt-auto">
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://chandrafarms.in/"
                >
                  Live
                </a>
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://github.com/samarthkashyap-1/chandrafarms"
                >
                  Github Repositary
                </a>
              </div>
            </Fade>
          </div>
         <hr className="border-black mx-10 sm:mx-0" />
          
        </div>

      </div>
      <Fade triggerOnce direction="up" delay={500} className="ml-auto">
        <button
          className={`w-fit px-10 py-3 border-2 border-black text-xl font-semibold rounded-lg ml-auto hover:-translate-y-2 transition-all duration-300 ease-in-out ${theme?"invert":"invert-0"}`}
        >
          <a href="https://github.com/samarthkashyap-1" target="_blank">
            See More
          </a>
        </button>
      </Fade>
    </div>
  );
};

export default Projects;
