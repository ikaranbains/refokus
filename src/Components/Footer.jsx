import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-white">
      <div className="max-w-screen-lg mx-auto py-8 flex gap-28">
        <div className="basis-1/2 flex flex-col gap-5">
            <h1 className="text-[9rem] leading-none font-semibold tracking-tight">refokus.</h1>
            <div className="flex gap-10 ml-2">
                {
                    ["privacy policy", "cookie policy", "impressum", "terms"].map((item,idx) => <a className="text-sm text-zinc-600 capitalize " key={idx}>{item}</a>)
                }
            </div>
        </div>
        <div className="basis-1/2 flex gap-7">
            <div className="basis-1/3">
                <h1 className="mb-7 text-xs text-zinc-400">Socials</h1>
                {["instagram", "twitter (x?)", "linkedIn"].map((item,idx) => <a key={idx} className="mt-2 text-xs block text-zinc-600 capitalize">{item}</a>)}
            </div>
            <div className="basis-1/3">
                <h1 className="mb-7 text-xs text-zinc-400">Sitemap</h1>
                {["home", "work", "careers", "contact"].map((item,idx) => <a key={idx} className="mt-2 text-xs block text-slate-200 capitalize">{item}</a>)}
            </div>
            <div className="basis-[30vw] flex flex-col gap-5 items-end">
                <p className="text-sm text-right">Refokus is a pioneering digital <br /> agency driven by design and <br /> empowered by technology.</p>
                <img src="../public/enterprise.png" alt="webflow enterprise" className="w-36 items-end"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
