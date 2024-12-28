import { motion } from "motion/react";
import React from "react";

const Marquee = ({ imagesurls, direction }) => {
  return (
    <div className="flex items-center gap-10 whitespace-nowrap">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 22, repeat: Infinity }}
        className="flex flex-shrink-0 gap-12"
      >
        {imagesurls.map((url, i) => (
          <img key={i} src={url} className="w-32 flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 22, repeat: Infinity }}
        className="flex flex-shrink-0 gap-12"
      >
        {imagesurls.map((url, i) => (
          <img key={i} src={url} className="w-32 flex-shrink-0" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
