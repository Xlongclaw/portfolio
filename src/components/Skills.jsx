import React, { useState } from "react";
import * as Icon from "react-icons/bs";
import SkillWrapper from "./SkillWrapper";
import TechStack from "./TechStack";
import skillData from "../constants/skillData";
import experience from "../constants/experience";
import { motion } from "framer-motion";
import SkillContainer from "./SkillContainer";
import skillsData from "../constants/skillsData";

const Skills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  return (
    <div className=" flex sm:p-4 p-0 tracking-[1px] flex-col relative sm:top-0 top-[-2.8rem] w-full sm:h-full h-[116%]">
      <div className="flex-col flex gap-6 overflow-y-scroll hide-scroll">
        <h4 className="text-ASCENT text-xs font-medium mb-4">
          FRONTEND DEVELOPMENT
        </h4>
        {skillsData.map((skillData, index) => (
          <SkillContainer
            key={index}
            skillData={skillData}
            expand={index === currentSkillIndex}
            onClick={() => {
              setCurrentSkillIndex(index);
            }}
          />
        ))}
      </div>
      <div className="flex justify-center items-center text-ASCENT pt-4">
        <Icon.BsChevronDoubleDown size={20} />
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
