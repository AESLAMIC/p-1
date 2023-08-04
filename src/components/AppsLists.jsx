import React from "react";

import Facebook from "../assests/facebook.png";
import Instagram from "../assests/instagram-black-logo-on-transparent-background-free-vector.jpg";
import Cl from "../assests/clfl.png";
import Air from "../assests/airbnb.png";
import As from "../assests/asana.png";
import Db from "../assests/5842a768a6515b1e0ad75afd.png";
import Atls from "../assests/atlassian.png";

function AppsLists() {
  return (
    <div className="w-full  bg-[#191c22] py-16  px-4 mt-0">
      <div className=" max-w-[1024px] mx-auto ">
        <div className="flex flex-col w-full justify-center mx-auto"></div>
        <div>
          <p className="text-white text-xl text-center">
            نمونه برنامه هایی که با ری اکت توسعه داده شده‌اند:
          </p>

          <div className="flex flex-wrap gap-x-9 justify-center">
            <img
              className=" w-[80px] h-[80px] rounded-xl mt-10"
              src={Facebook}
              alt="facebookIcon"
            />
            <img
              className="w-[80px] h-[80px] rounded-xl mt-10"
              src={Instagram}
              alt="InstagramIcon"
            />
            <img
              className="w-[100px] h-[80px] rounded-xl mt-10"
              src={Cl}
              alt="ClIcon"
            />
            <img
              className="w-[90px] h-[80px] bg-white rounded-xl mt-10"
              src={Air}
              alt="AirIcon"
            />
            <img
              className="w-[120px] h-[80px] rounded-xl mt-10"
              src={As}
              alt="AsIcon"
            />
            <img
              className="w-[90px] bg-slate-900  h-[90px]] rounded-xl mt-10"
              src={Db}
              alt="DbIcon"
            />
            <img
              className="w-[130px] h-[80px] rounded-xl mt-10"
              src={Atls}
              alt="AtlsIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppsLists;
