import React from "react";
import { projectsData } from "../constants";
import { motion } from "framer-motion";
import ProjectWrapperNew from "./ProjectWrapperNew";

const MyProjects = () => {
  const parentVarient = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
    }),
  };

  return (
    <motion.div
      variants={parentVarient}
      initial="hidden"
      animate="visible"
      className="grid relative gap-10 top-[-3.5rem] sm:top-0 hide-scroll w-full
       sm:gap-10 overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden lg:overflow-x-scroll 
        h-[116%] sm:h-full pr-1 sm:pr-0 pb-4 md:grid-flow-row lg:grid-flow-col "
    >
      <div className="flex flex-wrap gap-6 w-full overflow-y-scroll justify-center hide-scroll overflow-hidden">
        {projectsData.map((project, i) => (
          <ProjectWrapperNew key={i} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default MyProjects;
