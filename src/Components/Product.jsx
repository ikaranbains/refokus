import React from "react";
import Button from "../Components/Button";

const Product = ({ data, mover, index, hover }) => {
  const [isHovered, setIsHovered] = hover;
  const handleHover = () => {
    mover(index);
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-full h-[20rem] py-28">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="text-white max-w-screen-xl mx-auto flex items-center justify-between px-36"
      >
        <h1 className="font-semibold text-6xl">{data.title}</h1>
        <div className="dets w-1/3">
          <p className="text-sm mb-8">{data.description}</p>
          <div className="flex items-center gap-5">
            {data.live && <Button title="Live Website" />}
            {data.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
