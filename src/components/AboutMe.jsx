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
      <motion.div whileHover={{scale:1.3,x:30}} transition={{type:"spring",stiffness:80}} className="relative w-48">
        <img
          className="pb-8 w-48 relative z-10
        "
          src={require("../images/Profile-Image.png")}
          alt=""
        />
        <motion.div className="absolute flex flex-col w-48 gap-2 top-0 left-10 rotate-45">
          
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
          <div className="h-[2px] bg-ASCENT/70 w-full"></div>
        </motion.div>
      </motion.div>
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
    </motion.div>
  );
};

export default AboutMe;
