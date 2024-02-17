import React, { useState } from "react";
import { sociallinks } from "../constants";
import { motion } from "framer-motion";
import * as Icon from "react-icons/bs";

const SocialLinks = () => {
  const [displayLink, setDisplayLink] = useState(null);
  return (
    <div className="relative z-10 sm:font-semibold font-bold  text-sm mt-8 ">
      {sociallinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.link}
          className="flex gap-8 py-1 items-center cursor-pointer "
        >
          <div
            onMouseEnter={() => setDisplayLink(index)}
            onMouseLeave={() => setDisplayLink(null)}
            className="flex gap-2  items-center hover:text-WHITE"
          >
            <img src={link.image} className="w-[1.5rem]" alt="" />
            <span className="">{link.name}</span>
          </div>
          {displayLink === index && (
            <span className="text-ASCENT pointer-events-none sm:flex hidden xs:text-base text-xs sm:font-semibold font-normal items-center gap-2">
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
