import React from "react";
import * as Icon from "react-icons/ai";

const TechStack = ({ techStack }) => {
  return (
    <div className="flex flex-wrap w-1/2 gap-4">
      {techStack.map((tech, i) => (
        <div className="flex flex-col items-center space-y-2">
          <img src={tech.icon} alt="" />
          <h3 className="text-xs font-bold">{tech.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
