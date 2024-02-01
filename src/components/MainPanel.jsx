import React from "react";
import { sociallinks } from "../constants";

const MainPanel = () => {
  return (
    <section className="bg-DARK-III w-4/5 pl-16 pt-16">
      <img
        className="pb-8
        "
        src={require("../images/Profile-Image.png")}
        alt=""
      />
      <h2 className=" font-semibold text-6xl">
        <span className="text-GRAY-I">HELLO THERE</span>
        <span className="text-ASCENT">,</span>
      </h2>
      <h3 className="font-semibold text-4xl tracking-wider">
        MY NAME IS LONGCLAW
      </h3>
      <h3 className="font-bold text-6xl tracking-wide mt-6">
        <span className="text-DARK-II">I AM INTO</span>
        <span> WEB DESIGN</span> <br />{" "}
        <span className="text-DARK-II">AND</span> <span>DEVELOPMENT</span>{" "}
        <br /> <span className="text-DARK-II">SINCE 2020</span>
        <span className="text-ASCENT">.</span>
      </h3>
      <div className="fle font-semibold text-lg mt-16">
        {sociallinks.map((link, index) => (
          <div className="flex gap-1 items-center cursor-pointer">
            <img  src={link.image} className="w-[1.5rem]" alt="" />
            <span className="text-GRAY-I hover:text-WHITE">{link.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainPanel;
