import React, { useState } from "react";
import * as Icon from "react-icons/bs";
import SkillWrapper from "./SkillWrapper";
import TechStack from "./TechStack";
import skillData from "../constants/skillData";
import experience from "../constants/experience";
import {motion} from "framer-motion"

const Skills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="flex gap-12 w-full h-1/2">
        <SkillWrapper skillData={skillData[currentSkillIndex]} />
        <TechStack techStack={skillData[currentSkillIndex].techStack} />
      </div>
      <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="flex items-center justify-center gap-24 pb-6">
        <motion.div whileTap={{scale:[1,0.7,1]}} className="hover:bg-ASCENT hover:text-black p-4 rounded-br-3xl rounded-tl-3xl bg-DARK-III text-ASCENT cursor-pointer">
            <Icon.BsArrowLeft className="" size={40} />
          </motion.div>
        <div>
          <img src={experience[0].logo} alt="" />
          <h3 className="text-xs text-center font-bold">2018 - 2021</h3>
        </div>
        <div className="w-1/3  text-3xl text-ASCENT">
          <span>" </span>
          <span className="text-xl text-WHITE">
            Worked as a cheif executive officer for 3 years. Provides cheap
            solution to the common problems and helped in the company growth
          </span>
          <span> "</span>
        </div>
        <motion.div whileTap={{scale:[1,0.7,1]}} className="hover:bg-ASCENT hover:text-black p-4 rounded-br-3xl rounded-tl-3xl  bg-DARK-III text-ASCENT cursor-pointer">
            <Icon.BsArrowRight className="" size={40} />
          </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
