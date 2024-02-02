import React from "react";
import HeroText from "./HeroText";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import ProfileBgPattern from "./ProfileBgPattern";
import LetsTalkBtn from "./LetsTalkBtn";

const AboutMe = () => {
  return (
    <motion.div
      className="w-full relative"
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
    </motion.div>
  );
};

export default AboutMe;
