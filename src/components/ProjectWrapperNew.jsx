import React from "react";
import { BsChevronRight, BsDatabase, BsGithub } from "react-icons/bs";

const ProjectWrapperNew = ({ project }) => {
  return (
    <div className="w-[100%] sm:w-[24rem] flex flex-col gap-2">
      <img
        className="w-full sm:h-[15rem] h-[50vw] object-cover object-left-top border border-WHITE/10"
        src={project.image}
        alt=""
      />
      <div className="w-full flex sm:flex-row flex-col items-center sm:gap-1 gap-2">
        <h3 className="border border-WHITE/10 sm:w-[18rem] w-full sm:flex-1 sm:h-[3.5rem] h-[3rem] flex justify-center items-center text-xs">
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
    </div>
  );
};

export default ProjectWrapperNew;
