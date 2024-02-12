import React from "react";
import { motion } from "framer-motion";
const AnimatedTextSlideDown = () => {
  const textArray = ["UI/UX DESIGN", "WEB DESIGN"];
  const height = [
    {
      xl: [78, 72],
      lg: [46],
    },
  ];

  return (
    <motion.span className=" xl:h-[78px] lg:h-[46px] overflow-hidden inline-flex flex-col items-center ">
      <motion.div
        animate={{
          y: [0, -42, -42, -84, -84],
          transition: { repeat: Infinity, duration: 5 },
        }}
      >
        <motion.div className="">{textArray[0]}</motion.div>
        <motion.div className="">{textArray[1]}</motion.div>
        <motion.div className="">{textArray[0]}</motion.div>
      </motion.div>
    </motion.span>
  );
};

export default AnimatedTextSlideDown;
