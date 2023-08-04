import React from "react";
import Botton from "./Botton";

function Guid() {
  return (
    <div className="w-full border-b border-b-gray-700 bg-[#23272f] py-16 px-4 mt-0">
      <div className="max-w-[1024px] mx-auto ">
        <div className="flex flex-col w-full justify-center mx-auto"></div>
        <p className="text-gray-100 text-center sm:text-2xl text-xl">
          حالا اگه آماده‌ای بیا با ری‌اکت بیشتر آشنا شو :)
        </p>
        <div className="flex justify-center items-center flex-col mt-10">
          <Botton
            link="https://react.dev/learn"
            bgColor="bg-[#087ea4]"
            others="text-xl text-black "
          >
            <span className="font-bold">React.dev</span>
          </Botton>
          <Botton
            link="https://www.w3schools.com/REACT/DEFAULT.ASP"
            bgColor="bg-[#04aa6d]"
            others="mt-6 text-xl "
          >
            <span className="font-bold">W3School</span>
          </Botton>
          <Botton
            link="https://www.udemy.com/topic/react/"
            bgColor="bg-[white]"
            others="mt-6  text-xl"
          >
            <span className="font-bold">Udemy</span>
          </Botton>
        </div>
      </div>
    </div>
  );
}

export default Guid;
