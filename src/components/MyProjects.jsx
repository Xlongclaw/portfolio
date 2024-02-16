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
      className="grid relative gap-10 overflow-y-scroll overflow-x-hidden top-[-3.5rem] w-full h-[116%] pr-1 pb-4 hide-scroll
      sm:top-0 sm:h-full sm:gap-10 sm:pr-0
      md:grid-flow-row
      lg:grid-flow-col lg:overflow-x-scroll lg:overflow-y-hidden"
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
