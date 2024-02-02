import React from "react";
import * as Icon from "react-icons/bs";
import {motion} from 'framer-motion'

const SkillWrapper = ({ skillData }) => {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} className="space-y-4 w-1/2 h-full">
      <div className="flex  items-center gap-8 text-ASCENT h-full">
        <div className=" text-WHITE w-full h-full  bg-cover flex items-center  justify-center text-3xl font-bold relative">
          <img
            className="absolute h-full rounded-tr-3xl rounded-bl-3xl"
            src={skillData.bgImage}
            alt=""
          />
          <h3 className="relative">{skillData.skillName}</h3>
          <motion.div whileTap={{scale:[1,0.7,1]}} className="hover:bg-ASCENT absolute bottom-[-2rem] right-8 hover:text-black p-4 rounded-br-3xl rounded-tl-3xl border-2 border-ASCENT bg-DARK-III text-ASCENT cursor-pointer">
            <Icon.BsArrowRight className="" size={40} />
          </motion.div>
        </div>
      </div>
      <div className="flex w-full gap-2 justify-center items-center">
        <div className="w-[10px] h-[10px] bg-ASCENT rounded-full"></div>
        <div className="w-[5px] h-[5px] bg-WHITE rounded-full"></div>
        <div className="w-[5px] h-[5px] bg-WHITE rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default SkillWrapper;
