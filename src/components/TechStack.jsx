import React from "react";
import * as Icon from "react-icons/ai";
import {motion} from "framer-motion"

const TechStack = ({ techStack }) => {
  return (
    <div className="flex flex-wrap w-1/2 gap-4">
      {techStack.map((tech, i) => (
        <motion.div whileHover={{scale:0.8}} className="flex flex-col items-center space-y-2 cursor-pointer">
          <img src={tech.icon} alt="" />
          <h3 className="text-xs font-bold">{tech.name}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
