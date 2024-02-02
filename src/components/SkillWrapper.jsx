import React from "react";
import * as Icon from "react-icons/bs";

const SkillWrapper = ({ skillData }) => {
  return (
    <div className="space-y-4 w-1/2 h-full">
      <div className="flex  items-center gap-8 text-ASCENT h-full">
        <div className=" text-WHITE w-full h-full  bg-cover flex items-center  justify-center text-3xl font-bold relative">
          <img
            className="absolute h-full rounded-tr-3xl rounded-bl-3xl"
            src={skillData.bgImage}
            alt=""
          />
          <h3 className="relative">{skillData.skillName}</h3>
          <div className="bg-ASCENT absolute bottom-[-2rem] right-8 text-black p-4 rounded-br-3xl rounded-tl-3xl border-2 border-ASCENT hover:bg-DARK-III hover:text-ASCENT cursor-pointer">
            <Icon.BsArrowRight className="" size={40} />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-2 justify-center items-center">
        <div className="w-[10px] h-[10px] bg-ASCENT rounded-full"></div>
        <div className="w-[5px] h-[5px] bg-WHITE rounded-full"></div>
        <div className="w-[5px] h-[5px] bg-WHITE rounded-full"></div>
      </div>
    </div>
  );
};

export default SkillWrapper;
