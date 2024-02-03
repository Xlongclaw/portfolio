import React from "react";
import HeroText from "./HeroText";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import ProfileBgPattern from "./ProfileBgPattern";
import LetsTalkBtn from "./LetsTalkBtn";
import PatternBg from "./PatternBg";

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
        className="relative w-48"
      >
        <img
          className="pb-8 w-48 relative z-10
        "
          src={require("../images/Profile-Image.png")}
          alt=""
        />
        <ProfileBgPattern />
      </motion.div>
      <HeroText />
      <SocialLinks />
      <LetsTalkBtn />
      <PatternBg />
      {/* <div className="absolute text-DARK-I right-0 bottom-[-2rem] leading-[4px]">
        <h1 className="text-9xl font-bold">LONGCLAW</h1>
      </div> */}
    </motion.div>
  );
};

export default AboutMe;
