import React from "react";
import { projectsData } from "../constants";
import { motion } from "framer-motion";
import ProjectWrapperNew from "./ProjectWrapperNew";

const MyProjects = () => {
  const parentVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15},
    },
  };

  return (
    <motion.div
      variants={parentVarient}
      initial="hidden"
      animate="visible"
      className=" flex flex-col items-cente relative -top-3"
    >
      <h5 className="mb-2 font-semibold text-xl">PROJECTS</h5>
      <h5 className="mb-4 text-xs text-zinc-600 font-medium">{`Explore my diverse array of projects showcasing creativity, innovation, and a passion for problem-solving.`.toUpperCase()}</h5>
      <motion.div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 w-full overflow-y-auto justify-center custom-scroll overflow-x-hidden">
        {projectsData.map((project, i) => (
          <ProjectWrapperNew key={i} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MyProjects;
