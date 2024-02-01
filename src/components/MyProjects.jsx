import React from "react";
import { projectsData } from "../constants";
import ProjectWrapper from "./ProjectWrapper";

const MyProjects = () => {
  return (
    <div className="grid w-full h-full gap-10 grid-flow-col overflow-x-scroll custom-scroll pb-4">
      {projectsData.map((project, i) => (
        <ProjectWrapper key={i} project={project} />
      ))}
    </div>
  );
};

export default MyProjects;
