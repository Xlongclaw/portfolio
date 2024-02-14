import React, { useState } from "react";
import { BsCaretDown, BsCaretDownFill } from "react-icons/bs";

const SkillContainer = ({ skillData, expand }) => {
  return (
    <div className="w-[35rem]">
      <div className="flex justify-between items-center mr-20">
        <div className="flex items-center gap-2">
          <img className="w-7" src={skillData.image} alt="" />
          <div className="w-[6px] h-[6px] rounded-full bg-ASCENT/40" />
          <h3 className="text-sm text-ASCENT">{skillData.title}</h3>
        </div>
        <BsCaretDownFill className="text-ASCENT text-xs" />
      </div>
      <div className={` ${expand ? "block" : "hidden"}`}>
        <div className="ml-12 mt-3 text- font-semibold w-[25rem]">
          <h3>{skillData.boldLine}</h3>
        </div>
        <div className="ml-12 mt-4 text-sm flex flex-col gap-2">
          {skillData.keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-WHITE" />
              <h4>{point}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
