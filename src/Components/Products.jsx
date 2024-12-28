import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: false,
    },
    {
      title: "Weglot Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="mt-24 relative">
      {products.map((elem, i) => {
        return (
          <Product
            key={i}
            data={elem}
            mover={mover}
            index={i}
            hover={[isHovered, setIsHovered]}
          />
        );
      })}

      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.6 }}
          className={`window ${
            isHovered ? "block" : "hidden"
          } w-[28rem] h-[20rem] absolute left-[28%] overflow-hidden`}
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="scene w-full h-full"
          >
            <video
              src="./videos/1.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="scene w-full h-full"
          >
            <video
              src="../videos/2.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="scene w-full h-full"
          >
            <video
              src="../videos/3.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="scene w-full h-full"
          >
            <video
              src="../videos/4.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="scene w-full h-full"
          >
            <video
              src="../videos/5.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;