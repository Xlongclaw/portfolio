import React from "react";
import { projectsData } from "../constants";
import ProjectWrapper from "./ProjectWrapper";
import { motion } from "framer-motion";

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
      className="grid relative w-full h-full sm:gap-10 gap-14 lg:grid-flow-col lg:overflow-x-scroll lg:overflow-y-hidden
       overflow-y-scroll md:grid-flow-row sm:pr-0 pr-1 custom-scroll pb-4"
    >
      {projectsData.map((project, i) => (
        <ProjectWrapper key={i} project={project} />
      ))}
      {/* <div className="h-full absolute w-[20rem] bg-gradient-to-l from-black to-black/0 right-0"></div> */}
    </motion.div>
  );
};

export default MyProjects;
