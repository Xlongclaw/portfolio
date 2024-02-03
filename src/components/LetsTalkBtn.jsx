import React, { useState } from "react";
import * as Icon from "react-icons/ai";
import * as Icon2 from "react-icons/bs";
import { motion } from "framer-motion";
import letstalklinks from '../constants/letstalklinks'

const LetsTalkBtn = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={` 
       absolute z-10 right-0 top-0  flex items-center gap-3 rounded-tr-3xl`}
    >
      <motion.span 
        className={` ${
          expand && "bg-ASCENT text-black" } flex items-center justify-center gap-3 hover:text-black cursor-pointer hover:bg-ASCENT p-4 transition-all rounded-tr-3xl`}
        onClick={() => setExpand(!expand)}
      >
        Let's Talk
        <Icon.AiOutlineCoffee
          className="p-2 bg-ASCENT rounded-full text-black"
          size={30}
        />
      </motion.span>

      <motion.div drag dragConstraints={{top:-100 ,left:-600,bottom:200,right:25}}
        animate={
          expand
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, pointerEvents: "none", scale: 0.8 }
        }
        transition={{type:"spring"}}
        className={` gap-3 z-20 bg-DARK-III border opacity-0 border-ASCENT w-[20rem] absolute  top-[62px] lef-[-20rem] right-[-2rem] p-8 pt-16 text-WHITE flex flex-col justify-center items-center`}
      >
        <div className="w-full bg-DARK-I p-4 flex justify-center items-center gap-2 rounded-lg">
        <img className="w-6" src={require('../images/resume.png')} alt="" />
        <h3 className="text-sm font-semibold">Download Resume</h3>
        </div>
        <div className="flex flex-wrap gap-2">
        {
          letstalklinks.map((link,i)=>(

        <div className="w-full border-2 border-DARK-I p-2 flex justify-center items-center gap-2 rounded-lg">
        <img className="w-4" src={link.image} alt="" />
        <h3 className="text-xs font-medium">{link.name}</h3>
        </div>
          ))
        }
        </div>
        <div className="flex gap-3 w-full items-center">
          <Icon.AiOutlineMail size={25} />
          <input
            className="bg-DARK-I py-2 text-xs px-3 flex-1 rounded-md"
            type="email"
            placeholder="ENTER YOUR EMAIL"
          />
        </div>
        <textarea
          className="bg-DARK-I w-full h-[8rem] py-2 text-xs px-3 rounded-md mb-2"
          type="text"
          placeholder="YOUR MESSAGE"
        />
        <h3 className="hover:bg-ASCENT text-ASCENT cursor-pointer hover:text-black py-2 px-3 rounded- flex text-sm font-semibold gap-2 ">
          <Icon2.BsSendFill size={20} className="" />
          SEND
        </h3>
        <motion.div onClick={()=>setExpand(false)} whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="absolute top-[-10px] left-[-10px] border-2 border-ASCENT hover:bg-ASCENT hover:text-black bg-DARK-III text-ASCENT  p-3"><Icon.AiOutlineClose size={25}/></motion.div>
      </motion.div>
    </div>
  );
};

export default LetsTalkBtn;
