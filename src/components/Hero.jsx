import React from "react";
import Botton from "./Botton";
import Image from "../assests/React-icon.svg.png";

function Hero() {
  return (
    <div className=" border-b border-b-gray-700 pb-[4rem]">
      <div className="flex justify-center mt-[5rem] mb-[-3rem]">
        <img
          className="justify-center animate-spin"
          src={Image}
          alt="react logo"
          width="150"
          height="150"
        />
      </div>

      <div className="text-white">
        <div className="max-w-[800px]   mt-[96px] w-full mb-6 mx-auto text-center flex flex-col ">
          <h1 className="mb-1  md:mb-[-1rem]  text-xl sm:text-2xl md:text-3xl">
            کتابخانه‌ی جاواسکریپت برای
          </h1>

          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-0 uppercase">
            طراحی وب و رابط کاربری
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold mb-3 md:pl-4 pl-2"></p>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold mb-3 md:pl-4 pl-2"></p>
          <Botton bgColor="bg-[#087ea4]" link="https://react.dev/learn">
            همین الان شروع کن
          </Botton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
