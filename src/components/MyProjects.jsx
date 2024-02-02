import React from "react";
import { projectsData } from "../constants";
import ProjectWrapper from "./ProjectWrapper";
import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <motion.div
    animate={{ opacity: [0, 1], x:[100,0]}}
    transition={{ duration: 0.5 }}
      className="grid relative w-full h-full gap-10 grid-flow-col overflow-x-scroll custom-scroll pb-4"
    >
      {projectsData.map((project, i) => (
        <ProjectWrapper key={i} project={project} />
      ))}
      {/* <div className="h-full absolute w-[20rem] bg-gradient-to-l from-black to-black/0 right-0"></div> */}
    </motion.div>
  );
};

export default MyProjects;
