import React, { useState } from "react";
// import * as Icon from "react-icons/bs";
import SkillWrapper from "./SkillWrapper";
import TechStack from "./TechStack";
import skillData from "../constants/skillData";
import experience from "../constants/experience";

const Skills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div className="flex gap-12 w-full h-1/2">
        <SkillWrapper skillData={skillData[currentSkillIndex]} />
        <TechStack techStack={skillData[currentSkillIndex].techStack} />
      </div>
      {/* <div className="flex items-center justify-center">
        {experience.map((org, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <img src={org.logo} alt="" />
            <h3>{org.title}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Skills;
