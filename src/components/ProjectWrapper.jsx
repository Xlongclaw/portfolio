import React from "react";
import * as Icon from "react-icons/io";
import { motion } from "framer-motion";

const ProjectWrapper = ({ project }) => {
  const childVarient = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 200,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      variants={childVarient}
      className="lg:w-[20rem] h-[100%] lg:h-full "
    >
      <img
        src={project.image}
        className="object-cover object-left h-[85%]"
        alt=""
      />
      <div className="flex mt-2">
        <button
          className="bg-ASCENT border-ASCENT md:rounded-br-[3rem] sm:rounded-br-[2rem] rounded-br-[1.5rem] border-2 sm:mt-[-32px] mt-[-14px] flex justify-center
         items-center text-black md:h-[6rem] md:w-[6rem] sm:h-[5rem] sm:w-[5rem] h-[4rem] w-[4rem] font-bold text-sm"
        >
          {/* <img src={require('../images/GitHub.png')} alt="" /> */}
          <Icon.IoLogoGithub size={30} />
        </button>
        <button className="border-ASCENT text-nowrap flex h-[4rem] border-r-1 border-t-1 border-b-1 text-ASCENT sm:px-12 sm:py-5 xs:py-4 xs:px-8 px-6 py-2 sm:font-bold font-medium text-sm">
          {project.name}
        </button>
        <button className="border-ASCENT flex sm:h-[4rem] h-[3rem] items-center border-r-2 border-t-2 border-b-2 text-ASCENT sm:px-5 sm:py-5 py-2 px-2 font-bold text-sm">
          <Icon.IoMdArrowDropright size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectWrapper;
