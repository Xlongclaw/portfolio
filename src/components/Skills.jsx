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
    <div className="w-full flex  h-full">
      <div className="flex-col flex gap-8 flex-wrap">
        <h4 className="text-ASCENT text-sm mb-8">FRONTEND DEVELOPMENT</h4>
        {skillsData.map((skillData, index) => (
          <SkillContainer
            key={index}
            skillData={skillData}
            expand={index === currentSkillIndex}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
