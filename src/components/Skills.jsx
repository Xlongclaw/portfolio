import React, { useState } from "react";
// import * as Icon from "react-icons/bs";
import SkillWrapper from "./SkillWrapper";
import TechStack from "./TechStack";
import skillData from "../constants/skillData";

const Skills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  return (
    <div className="w-full">
      <div className="flex gap-12 w-full">
        <SkillWrapper skillData={skillData[currentSkillIndex]} />
        <TechStack techStack={skillData[currentSkillIndex].techStack} />
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
