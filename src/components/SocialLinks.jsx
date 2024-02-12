import React, { useState } from "react";
import { sociallinks } from "../constants";
import { motion } from "framer-motion";
import * as Icon from "react-icons/bs";

const SocialLinks = () => {
  const [displayLink, setDisplayLink] = useState(null);
  return (
    <div className="relative z-10 sm:font-semibold font-bold  text-sm mt-8 w-48 ">
      {sociallinks.map((link, index) => (
        <motion.a
          onMouseEnter={() => setDisplayLink(index)}
          onMouseLeave={() => setDisplayLink(null)}
          href={link.link}
          className="flex xs:flex-row flex-col gap-2 py-1 cursor-pointer"
        >
          <div className="flex gap-2 items-center">
            <img src={link.image} className="w-[1.5rem]" alt="" />
            <span className="text-WHITE/60 hover:text-WHITE">{link.name}</span>
          </div>
          {displayLink === index && (
            <span className="text-ASCENT xs:text-base text-xs sm:font-semibold font-normal flex items-center gap-2">
              <Icon.BsArrowRight />
              <h4>{link.link}</h4>
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
