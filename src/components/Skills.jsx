import React, { useState } from "react";
import * as Icon from "react-icons/bs";
import SkillContainer from "./SkillContainer";
import skillsData from "../constants/skillsData";
import backendDesignData from "../constants/backendDesignData";
import frontendData from "../constants/fronendData";

const Skills = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentFrontendSkillIndex, setCurrentFrontendSkillIndex] = useState(0);
  const [currentBackendDesignSkillIndex, setCurrentBackendDesignSkillIndex] =
    useState(0);
  return (
    <div className=" flex sm:p-4 p-0 tracking-[1px] flex-col relative lg:top-0 top-[-2.8rem] w-full lg:h-[107%] h-[116%]">
      <div className="flex-col flex lg:hidden gap-6 overflow-y-scroll hide-scroll">
        <h4 className="text-ASCENT text-xs font-medium mb-4  ">
          FRONTEND, BACKEND + DESIGN
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
      <div className="lg:flex hidden gap-12 overflow-y-scroll hide-scroll justify-center">
        <div className="flex-col flex gap-6  ">
          <h4 className="text-ASCENT text-sm font-medium mb-4  ">FRONTEND</h4>
          <div className="overflow-y-scroll flex flex-col gap-6 hide-scroll">
            {frontendData.map((skillData, index) => (
              <SkillContainer
                key={index}
                skillData={skillData}
                expand={index === currentFrontendSkillIndex}
                onClick={() => {
                  setCurrentFrontendSkillIndex(index);
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex-col flex gap-6  ">
          <h4 className="text-ASCENT text-sm font-medium mb-4  ">
            BACKEND + DESIGN
          </h4>
          <div className="overflow-y-scroll flex flex-col gap-6 hide-scroll">
            {backendDesignData.map((skillData, index) => (
              <SkillContainer
                key={index}
                skillData={skillData}
                expand={index === currentBackendDesignSkillIndex}
                onClick={() => {
                  setCurrentBackendDesignSkillIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-ASCENT mt-4 lg:mt-12">
        <Icon.BsChevronDoubleDown size={20} />
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
