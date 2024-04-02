import React from "react";
import { BsChevronRight, BsDatabase, BsGithub } from "react-icons/bs";
import {motion} from "framer-motion"

const ProjectWrapperNew = ({ project }) => {
  const childVariant = {
    hidden: { opacity: 0, },
    visible: {
      opacity: 1,
    },
  };
  return (
    <motion.div variants={childVariant} className="w-[100%] flex flex-col gap-2  relative">
      {/* <div className="bg-ASCENT w-24 h-16 absolute left-1/2 -translate-x-1/2 top-12 blur-3xl"></div> */}
      <div className="w-full relative z-10 h-auto border border-WHITE/10 overflow-hidden">
      <img
        className=" object-cover object-left-top 
        hover:scale-110 transition-transform duration-300"
        src={project.image}
        alt=""
      />

      </div>
      <div className="w-full flex sm:flex-row flex-col items-center sm:gap-1 gap-2">
        <h3
          className="border border-WHITE/10 sm:w-[18rem] w-full sm:flex-1 sm:h-[3.5rem] h-[3rem] 
        flex justify-center items-center text-xs"
        >
          {project.name.toUpperCase()}
        </h3>
        <div className="flex sm:h-[3.5rem] h-[3rem] w-full sm:w-auto gap-1">
          <a
            className="border border-WHITE/10 hover:bg-ASCENT hover:text-DARK-III transition-all duration-500 flex sm:w-[3.5rem] w-1/3 h-full sm:p-5 p-4 justify-center"
            href={project.githubLink}
          >
            <BsGithub className="" />
          </a>
          <BsDatabase className="border border-WHITE/10 flex hover:bg-ASCENT hover:text-DARK-III transition-all duration-500 sm:w-[3.5rem] w-1/3 h-full sm:p-5 p-4" />
          <a
            className="border border-WHITE/10 hover:bg-ASCENT hover:text-DARK-III transition-all duration-500 flex sm:w-[3.5rem] w-1/3 h-full sm:p-5 p-4 justify-centerl"
            href={project.link}
          >
            <BsChevronRight className="" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectWrapperNew;
