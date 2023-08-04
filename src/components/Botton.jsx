import React from "react";
import { Link } from "react-router-dom";

function Botton(props) {
  return (
    <div className="w-[220px] flex justify-center">
      <botton
        className={` ${props.bgColor} ${props.others} w-[200px] rounded-3xl item-center text-center font-medium  mx-auto py-4 hover:opacity-90`}
      >
        <Link className="p-8" to={props.link}>
          {props.children}
        </Link>
      </botton>
    </div>
  );
}

export default Botton;
