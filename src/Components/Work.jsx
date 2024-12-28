import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Work = () => {

  const [images,setImages] = useState([
    {
      url: "https://plus.unsplash.com/premium_photo-1730133770236-934c381e4684?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      top: "38%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1663933534029-5e2a11960db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
      top: "52%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1689769385637-bba34686d493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwM3xlbnwwfHwwfHx8MA%3D%3D",
      top: "43%",
      left: "32%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMDN8ZW58MHx8MHx8fDA%3D",
      top: "67%",
      left: "41%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1670269069776-a1337c703669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwM3xlbnwwfHwwfHx8MA%3D%3D",
      top: "50%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D",
      top: "75%",
      left: "48%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  
  scrollYProgress.on("change", (data) => {
    function imagesShow(arr){
      setImages(prev => (
        prev.map((item,index) => 
        arr.indexOf(index) === -1 ? {...item,isActive:false} : {...item,isActive:true}
        )
      ))
    }


    switch(Math.floor(data*100)){
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0,1]);
        break;
      case 5:
        imagesShow([0,1,2]);
        break;
      case 7:
        imagesShow([0,1,2,3]);
        break;
      case 8:
        imagesShow([0,1,2,3,4]);
        break;
      case 9:
        imagesShow([0,1,2,3,4,5]);
        break;
    }
  })

  return (
    <div className="w-screen mt-5">
      <div className="relative max-w-screen-lg text-white mx-auto">
        <h1 className="text-[25vw] font-medium select-none leading-none tracking-tight text-center">
          work
        </h1>
        <div className="w-full top-0 h-full absolute">
          {images.map((elem, index) => {
            return (
              elem.isActive && (
                <img
                  key={index}
                  loading="lazy"
                  className="w-60 rounded-lg -translate-x-[30%] -translate-y-[20%] absolute"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
