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
    <div className="w-full flex sm:p-4 p-0 h-full tracking-[1px]">
      <div className="flex-col flex gap-6 overflow-y-scroll">
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
      <div></div>
    </div>
  );
};

export default Skills;
