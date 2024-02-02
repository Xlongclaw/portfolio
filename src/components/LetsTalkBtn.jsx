import React, { useState } from "react";
import * as Icon from "react-icons/ai";
import * as Icon2 from "react-icons/bs";
import { motion } from "framer-motion";

const LetsTalkBtn = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={` ${
        expand && "bg-ASCENT text-black"
      } absolute right-0 top-0  flex items-center gap-3 rounded-br-3xl`}
    >
      <span
        className="flex items-center gap-3 hover:text-black cursor-pointer hover:bg-ASCENT p-4 transition-all rounded-br-3xl"
        onClick={() => setExpand(!expand)}
      >
        Let's Talk
        <Icon.AiOutlineCoffee
          className="p-2 bg-ASCENT rounded-full text-black"
          size={30}
        />
      </span>

      <motion.div
        animate={
          expand
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, pointerEvents: "none", scale: 0.8 }
        }
        className={` gap-3 z-20 bg-DARK-III border-2 border-ASCENT w-[20rem] absolute top-0 left-[-20rem] p-8 pt-16 text-WHITE flex flex-col justify-center items-center`}
      >
        {/* <h1 className="flex gap-2 items-center text-xs">
          <Icon2.BsPhone size={19} className="text-white" /> +91 8299196300
        </h1> */}
        <div className="flex gap-3 w-full items-center">
          <Icon.AiOutlineMail size={25} />
          <input
            className="bg-DARK-II py-2 text-xs px-3 flex-1 rounded-md"
            type="email"
            placeholder="ENTER YOUR EMAIL"
          />
        </div>
        <textarea
          className="bg-DARK-II w-full h-[8rem] py-2 text-xs px-3 rounded-md mb-2"
          type="text"
          placeholder="YOUR MESSAGE"
        />
        <h3 className="hover:bg-ASCENT text-ASCENT cursor-pointer hover:text-black py-2 px-3 rounded- flex text-sm font-semibold gap-2 ">
          <Icon2.BsSendFill size={20} className="" />
          SEND
        </h3>
        <div className="absolute top-[-10px] left-[-10px] border-2 border-ASCENT bg-DARK-III text-ASCENT  p-3"><Icon.AiOutlineClose size={25}/></div>
      </motion.div>
    </div>
  );
};

export default LetsTalkBtn;
