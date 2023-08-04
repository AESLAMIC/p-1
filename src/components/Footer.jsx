import React from "react";
import Meta from "../assests/meta.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full  bg-[#191c22] py-16 px-4 mt-0">
      <div className=" max-w-[1024px] mt-[6rem] mx-4 md:mx-[10rem] ">
        <div>
          <img className="bg-black ml-12 w-[30px] " src={Meta} alt="metaIcon" />
        </div>
        <div className="grid rtl grid-cols-2 mt-[-20px]">
          <div className="flex flex-col ml-[7rem]">
            <Link
              className="text-white font-bold mb-4 hover:underline underline-offset-8 text-m"
              to="https://react.dev/learn"
            >
              آموزش ری‌اکت
            </Link>
            <Link
              className="text-white mb-2 hover:underline underline-offset-8  text-sm"
              to="https://react.dev/learn"
            >
              شروع
            </Link>
            <Link
              className="text-white mb-2 hover:underline  underline-offset-8 text-sm"
              to="https://react.dev/learn/installation"
            >
              نصب
            </Link>
            <Link
              className="text-white mb-2 hover:underline underline-offset-8  text-sm"
              to="https://react.dev/learn/describing-the-ui"
            >
              درباره‌ی UI
            </Link>
          </div>
          <div className="flex flex-col ml-[7rem]">
            <p
              className="text-white font-bold mb-4  text-m"
              to="https://react.dev/learn"
            >
              بیشتر
            </p>
            <Link
              className="text-white mb-2  hover:underline underline-offset-8 text-sm"
              to="https://react.dev/blog"
            >
              بلاگ
            </Link>
            <Link
              className="text-white mb-2 hover:underline underline-offset-8 text-sm"
              to="https://reactnative.dev/"
            >
              ری‌اکت نیتیو
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mb-0 border-b-0 pb-0 mt-12">
          <p> AESLAMI &copy;</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
