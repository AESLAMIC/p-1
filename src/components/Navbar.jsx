import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#149eca]">
        <Link to="/">ری‌اکت</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-3  hover:bg-slate-700 rounded-3xl ">
          <Link to="https://react.dev/learn" target="_blank">
            آموزش
          </Link>
        </li>
        <li className="p-3 hover:bg-slate-700 rounded-3xl  ">
          <Link to="https://react.dev/reference/react" target="_blank">
            منبع
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {isOpen ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={20} />
        )}
        {isOpen && (
          <div className="fixed  z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#23272f] ">
            <h1 className="w-full text-3xl font-bold text-[#149eca] m-4 mt-7">
              <Link to="/">React.js</Link>
            </h1>
            <ul className="pt-4">
              <li className="p-4 border-b border-gray-600">
                <Link to="https://react.dev/reference/react" target="_blank">
                  منبع
                </Link>
              </li>
              <li className="p-4 border-b border-gray-600">
                <Link to="https://react.dev/learn" target="_blank">
                  آموزش
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
