import React from "react";
import * as Icon from 'react-icons/io'
import {motion} from 'framer-motion'

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
    <motion.div variants={childVarient} className="w-[25rem] h-full ">
      <img
        src={project.image}
        className="object-cover object-left h-[85%]"
        alt=""
      />
      <div className="flex mt-2">
        <button className="bg-ASCENT border-ASCENT rounded-br-[3rem] border-2 mt-[-32px] flex justify-center items-center text-black h-[6rem] w-[6rem] font-bold text-sm">
            {/* <img src={require('../images/GitHub.png')} alt="" /> */}
            <Icon.IoLogoGithub size={30}/>
        </button>
        <button className="border-ASCENT flex h-[4rem] border-r-1 border-t-1 border-b-1 text-ASCENT px-12 py-5 font-bold text-sm">
          {project.name}
        </button>
        <button className="border-ASCENT flex h-[4rem] border-r-2 border-t-2 border-b-2 text-ASCENT px-5 py-5 font-bold text-sm">
          <Icon.IoMdArrowDropright size={20}/>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectWrapper;
