import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

const HeroText = () => {
  return (
    <div className="cursor-default  relative z-10">
      <h2 className=" font-semibold text-5xl">
        <span className="text-GRAY-I">HELLO THERE</span>
        <span className="text-ASCENT">,</span>
      </h2>
      <h3 className="font-semibold text-3xl tracking-wider">
        <AnimatedTextWord text={"MY NAME IS MADHURESH"} />
      </h3>
      <h3 className="font-bold text-7xl tracking-[1px] mt-6">
        <span className="text-DARK-II">I AM INTO</span>{" "}
        <span>UI/UX DESIGN</span> <br /> <span className="text-DARK-II">AND </span>
          <span>DEVELOPMENT</span>
        <br /> <span className="text-DARK-II">SINCE 2022</span>
        <span className="text-ASCENT">.</span>
      </h3>
    </div>
  );
};

export default HeroText;
