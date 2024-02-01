import React, { useState } from "react";

const OptionPanel = () => {
  const [selected,setSelected] = useState(0)
  return (
    <section className=" w-1/5 flex flex-col space-y-1 overflow-hidden text-sm font-semibold">
      <div onClick={()=>setSelected(0)} className={` ${selected===0?"text-ASCENT border-[px]":""} bg-DARK-III w-full h-1/3 flex justify-center items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}>
       ABOUT ME
      </div>
      <div onClick={()=>setSelected(1)} className={` ${selected===1?"text-ASCENT ":""} bg-DARK-III w-full h-1/3 flex justify-center items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}>
        MY PROJECTS
      </div>
      <div onClick={()=>setSelected(2)} className={` ${selected===2?"text-ASCENT ":""} bg-DARK-III w-full h-1/3 flex justify-center items-center border-0 border-ASCENT hover:bg-ASCENT hover:border-[1px] duration-100 transition-all hover:cursor-pointer hover:text-black`}>
        MY HARDCORE SKILLS
      </div>
    </section>
  );
};

export default OptionPanel;
