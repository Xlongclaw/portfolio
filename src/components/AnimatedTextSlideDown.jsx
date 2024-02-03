import React from "react";
import { motion } from "framer-motion";
const AnimatedTextSlideDown = () => {
  const textArray = ["UI/UX DESIGN", "WEB DESIGN"];

  return (
    <motion.span className=" h-[78px] overflow-hidden inline-flex flex-col items-center ">
      <motion.div
        animate={{
          y: [0,-72, -72,-144, -144],
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
