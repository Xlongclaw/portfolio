import React from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { motion } from "framer-motion";

const SkillContainer = ({ skillData, expand, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`xxl:w-[30rem] xl:w-[25rem] lg:w-[20rem] w-auto sm:pr-0 pr-6 hover:cursor-pointer
      `}
    >
      <div className="flex justify-between items-center mr-auto ">
        <div className="flex items-center gap-[10px]">
          <img className="w-8" src={skillData.image} alt="" />
          <div className="w-[5px] h-[5px] rounded-full bg-ASCENT/60" />
          <h3 className="text-xs font-medium text-ASCENT">{skillData.title}</h3>
        </div>
        <BsCaretDownFill
          className={`text-ASCENT text-xs ${
            expand ? "rotate-0" : "-rotate-90"
          }`}
        />
      </div>
      <motion.div className={` ${expand ? "block" : "hidden"} pl-2 sm:pl-0`}>
        <div className="sm:ml-12 ml-0 mt-3 text-sm font-semibold w-auto pr-12">
          <h3>{skillData.boldLine}</h3>
        </div>
        <div className="sm:ml-12 ml-0 mt-4 text-xs flex flex-col gap-[6px] text-WHITE/90">
          {skillData.keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-WHITE" />
              <h4>{point}</h4>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillContainer;
