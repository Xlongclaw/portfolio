import React from "react";
import HeroText from "./HeroText";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import * as Icon from "react-icons/ai";

const AboutMe = () => {
  return (
    <motion.div
      className="w-full relative"
      animate={{ opacity: [0, 1], x: [100, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img
          className="pb-8 w-48 relative z-10
        "
          src={require("../images/Profile-Image.png")}
          alt=""
        />
        <div className="absolute flex flex-col gap-2 top-0 left-10 rotate-45">
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>
        <div className="h-[4px] bg-ASCENT/70 w-48 rounded-full"></div>

        </div>
      </div>
      <HeroText />
      <SocialLinks />
      <div className="absolute right-0 top-0 hover:text-black cursor-pointer hover:bg-ASCENT p-4 transition-all rounded-br-3xl flex items-center gap-3">
        Let's Talk
        <Icon.AiOutlineCoffee
          className="p-2 bg-ASCENT rounded-full text-black"
          size={30}
        />
        {/* <Icon.AiFillAndroid size={300}/> */}
      </div>
      {/* <div className="absolute top-0 left-1/3 rotate-45 flex flex-col gap-4">
        <div className="h-[3px] bg-ASCENT/20 w-[10rem]"></div>
        <div className="h-[3px] bg-ASCENT/20 w-[20rem]"></div>
        <div className="h-[3px] bg-ASCENT/40 w-[30rem]"></div>
        <div className="h-[3px] bg-ASCENT/60 w-[40rem]"></div>
        <div className="h-[3px] bg-ASCENT/80 w-[30rem]"></div>
        <div className="h-[3px] bg-ASCENT w-[20rem]"></div>
        <div className="h-[3px] bg-ASCENT w-[10rem]"></div>
      </div> */}
    </motion.div>
  );
};

export default AboutMe;
