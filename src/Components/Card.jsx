import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, button, para, hover="false", padding="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: padding === "true" && "25px"}} className={`bg-zinc-700 p-5 rounded-lg text-white ${width} min-h-[65vh] flex flex-col justify-between`}>
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-between">
          <h3>Up Next: Culture</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-6">Who we are</h1>
      </div>
      <div>
        {button && (
          <>
            <h1 className="text-6xl">Start a Project</h1>
            <button className="rounded-full px-5 py-2 border-[1px] text-sm mt-5">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-zinc-400 text-sm mt-2">
            Lorem ipsum dolor sit, amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
