import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Start a Project"}) => {
  return (
    <div className="w-40 rounded-full bg-zinc-100 text-black px-4 py-2 flex items-center justify-between cursor-pointer">
      <span className="text-sm">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
