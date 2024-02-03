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
      x:[-1000,0],
      transition: { repeat: Infinity, duration: 4 },
    }),
  };

  return (
    <motion.div
      variants={anim}
      initial="hidden"
      animate="visible"
      className="absolute flex flex-col w-48 gap-2 bottom-[0rem] right-0 -rotate-45 "
    >
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>

      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
      <motion.div
        variants={child}
        className="h-[2px] bg-DARK-I/100 w-[100rem]"
      ></motion.div>
    </motion.div>
  );
};

export default PatternBg;
