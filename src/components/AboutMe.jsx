import React from "react";
import HeroText from "./HeroText";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import ProfileBgPattern from "./ProfileBgPattern";
import LetsTalkBtn from "./LetsTalkBtn";
import PatternBg from "./PatternBg";
import LetsTalkBtnPhone from "./LetsTalkBtnPhone";

const AboutMe = () => {
  return (
    <motion.div
      className="w-full relative h-full"
      animate={{ opacity: [0, 1], x: [100, 0] }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.3, x: 30 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="relative sm:w-48 w-44 z-10"
      >
        <img
          className="pb-8 sm:w-48 w-44 relative z-20
        "
          src={require("../images/Profile-Image.png")}
          alt=""
        />
        <ProfileBgPattern />
      </motion.div>
      <HeroText />
      <SocialLinks />
      <LetsTalkBtn />
      <LetsTalkBtnPhone />
      <PatternBg />
      {/* <div className="absolute text-DARK-I right-0 bottom-[-2rem] leading-[4px]">
        <h1 className="text-9xl font-bold">LONGCLAW</h1>
      </div> */}
    </motion.div>
  );
};

export default AboutMe;
