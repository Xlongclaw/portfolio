import React from "react";
import * as Icon from "react-icons/bs";

const SkillWrapper = () => {
  return (
    <div className="space-y-4 w-1/2">
      <div className="flex  items-center gap-8 text-ASCENT">
        <Icon.BsArrowLeft size={30} />

        <div className=' text-WHITE w-full h-[20rem] bg-[url("images/webdbg.jpg")] bg-cover flex items-center  justify-center text-3xl font-bold'>
          WEB DEVELOPMENT
        </div>
        <Icon.BsArrowRight size={30} />
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
