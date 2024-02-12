import React, { useState } from "react";
import * as Icon from "react-icons/ai";
import * as Icon2 from "react-icons/bs";
import { motion } from "framer-motion";
import letstalklinks from "../constants/letstalklinks";

const LetsTalkBtn = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={` 
       absolute z-10 right-0 top-0  flex items-center gap-3 rounded-tr-3xl`}
    >
      <motion.span
        className={` ${
          expand && "bg-ASCENT text-black"
        } flex items-center justify-center gap-3 hover:text-black cursor-pointer hover:bg-ASCENT p-4 transition-all rounded-tr-3xl`}
        onClick={() => setExpand(!expand)}
      >
        Let's Talk
        <Icon.AiOutlineCoffee
          className="p-2 bg-ASCENT rounded-full text-black"
          size={30}
        />
      </motion.span>

      <motion.div
        drag
        dragConstraints={{ top: -100, left: -600, bottom: 200, right: 25 }}
        animate={
          expand
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, pointerEvents: "none", scale: 0.8 }
        }
        transition={{ type: "spring" }}
        className={` gap-3 z-20 bg-DARK-III border opacity-0 border-ASCENT w-[44rem] absolute  top-[62px] lef-[-20rem] right-[-2rem] p-8 pt-16 text-WHITE flex justify-center items-center`}
      >
        <div>
          <span>
            <h2 className="text-lg font-semibold">Hello,</h2>
            <h2 className="text-sm font-mediu text-WHITE/50 ">
              As someone who is passionate about User Interface, I thoroughly
              enjoy crafting and building web designs. My creations are not only
              visually appealing but also highly interactive, delivering a
              seamless experience. I hope my work resonates with you.
            </h2>
            <div className="flex gap-2 justify-between">
              <button className="text-sm font-semibold text-ASCENT flex justify-end items-center gap-2 mt-4 hover:text-WHITE hover:gap-4 transition-all hover:bg-DARK-II p-2">
                <span className="text-ASCENT">RESUME</span>
                <Icon2.BsDownload size={25} />
              </button>

              <button className="text-sm font-semibold text-ASCENT flex justify-end items-center gap-2 mt-4 hover:text-WHITE hover:gap-4 transition-all hover:bg-DARK-II p-2">
                <span className="text-ASCENT">PROJECTS</span>
                <Icon2.BsArrowRight size={25} />
              </button>
            </div>
            <div className="flex mt-4 text-WHITE/70">
              <span className="flex text-xs items-center gap-1 hover:bg-ASCENT hover:text-black p-2 cursor-pointer">
                <Icon.AiOutlineDribbble size={25} /> DRIBBLE
              </span>
              <span className="flex text-xs items-center gap-1 hover:bg-ASCENT hover:text-black p-2 cursor-pointer">
                <Icon.AiOutlineFacebook size={25} /> FACEBOOK
              </span>
              <span className="flex text-xs items-center gap-1 hover:bg-ASCENT hover:text-black p-2 cursor-pointer">
                <Icon.AiOutlineInstagram size={25} /> INSTAGRAM
              </span>
            </div>
          </span>
        </div>
        <div className="w-[2px] bg-ASCENT/50 h-[16rem] mx-4"></div>
        <div className="flex flex-col gap-3">
          <div className="flex w-full items-center px-2 gap-2">
            <Icon.AiOutlineMail
              className="p-2 bg-ASCENT text-black rounded-br-xl"
              size={40}
            />
            <input
              className="bg-DARK-III  border border-ASCENT/40 border-dashed  py-2 text-xs px-3 flex-1 rounded-md"
              type="email"
              placeholder="ENTER YOUR EMAIL"
            />
          </div>
          <textarea
            className="bg-DARK-III border border-ASCENT/30 rounded-none w-full h-[12rem] py-2 text-xs px-3 mb-2"
            type="text"
            placeholder="YOUR MESSAGE"
          />
          <h3 className="hover:bg-ASCENT text-ASCENT cursor-pointer hover:text-black py-2 px-3 rounded- flex text-sm font-semibold gap-2 ">
            <Icon2.BsSendFill size={20} className="" />
            SEND
          </h3>
        </div>
        <motion.div
          onClick={() => setExpand(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-[-10px] left-[-10px] border-2 border-ASCENT hover:bg-ASCENT hover:text-black bg-DARK-III text-ASCENT  p-3"
        >
          <Icon.AiOutlineClose size={25} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LetsTalkBtn;
