import Lottie from 'lottie-react'
import React from 'react'
import load from '../assets/offline1.json'


const Offline = () => {
  return (
    <>
      <div className=" flex w-screen h-screen justify-center flex-col items-center md:gap-10">
        <h1 className="sm:text-2xl md:text-3xl text-6xl leading-loose font-bold sm:leading-relaxed ">
          You are offline buddy!!!
        </h1>
        <Lottie animationData={load} className={`w-1/3 md:w-3/4 `} />
      </div>
    </>
  );
}

export default Offline
