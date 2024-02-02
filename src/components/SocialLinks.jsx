import React, { useState } from "react";
import { sociallinks } from "../constants";
import { motion } from "framer-motion";
import * as Icon from "react-icons/bs";

const SocialLinks = () => {
  const [displayLink, setDisplayLink] = useState(null);
  return (
    <div className="fle font-semibold text-sm mt-8 w-48 ">
      {sociallinks.map((link, index) => (
        <motion.a
          onMouseEnter={() => setDisplayLink(index)}
          onMouseLeave={() => setDisplayLink(null)}
          href={link.link}
          className="flex gap-2 py-1 items-center cursor-pointer"
        >
          <img src={link.image} className="w-[1.5rem]" alt="" />
          <span className="text-GRAY-I hover:text-WHITE">{link.name}</span>
          {displayLink === index && (
            <span className="text-ASCENT flex items-center gap-2">
              <Icon.BsArrowRight />
              {link.link}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
