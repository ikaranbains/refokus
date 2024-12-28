import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    { title: "CSSDesignAwards", number: 48 },
    { title: "No-Code Conf 2021", number: 2 },
    { title: "awwwards.", number: 11 },
    { title: "CSSDesignAwards", number: 48 },
    { title: "No-Code Conf 2021", number: 2 },
    { title: "awwwards.", number: 11 },
  ];
  return (
    <div className="w-screen mt-28 flex items-center">
      {data.map((elem,index)=> {
        return <Stripe key={index} text={elem.title} number={elem.number}/>
      })}
    </div>
  );
};

export default Stripes;
