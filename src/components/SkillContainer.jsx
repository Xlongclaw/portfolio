import React, { useState } from "react";
import { BsCaretDown, BsCaretDownFill } from "react-icons/bs";

const SkillContainer = ({ skillData, expand, onClick }) => {
  return (
    <div onClick={onClick} className="sm:w-[35rem] w-auto sm:pr-0 pr-6">
      <div className="flex justify-between items-center sm:mr-20 mr-auto">
        <div className="flex items-center gap-[10px]">
          <img className="w-8" src={skillData.image} alt="" />
          <div className="w-[5px] h-[5px] rounded-full bg-ASCENT/60" />
          <h3 className="text-xs font-medium text-ASCENT">{skillData.title}</h3>
        </div>
        <BsCaretDownFill className="text-ASCENT text-xs" />
      </div>
      <div className={` ${expand ? "block" : "hidden"}`}>
        <div className="sm:ml-12 ml-0 mt-3 text-sm font-semibold sm:w-[25rem] w-auto">
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
      </div>
    </div>
  );
};

export default SkillContainer;
