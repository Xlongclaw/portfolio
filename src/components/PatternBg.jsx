import React from "react";
import { motion } from "framer-motion";

const PatternBg = () => {
  const anim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 },
    },
  };
  const child = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      x: [-1000, 0],
      rotate:[90,0],
      transition: { repeat: Infinity, duration: 2 },
    }),
  };

  return (
    <motion.div
      variants={anim}
      initial="hidden"
      animate="visible"
      className="absolute flex flex-col w-48 gap-2 bottom-[0rem] right-0 -rotate-45 "
    >
      {Array.from({length:50},() => (
        <motion.div
          variants={child}
          className="h-[2px] bg-DARK-I/90 w-[100rem] opacity-0"
        ></motion.div>
      ))}
      
    </motion.div>
  );
};

export default PatternBg;
