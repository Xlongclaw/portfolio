import React from "react";
// import SocialLinks from "./SocialLinks";
// import HeroText from "./HeroText";
import ProjectWrapper from "./ProjectWrapper";
import { projectsData } from "../constants";

const MainPanel = () => {
  return (
    <section className="bg-DARK-III w-4/5 p-16">
      {/* <img
        className="pb-8 w-48
        "
        src={require("../images/Profile-Image.png")}
        alt=""
      />
      <HeroText />
      <SocialLinks /> */}
      <div className="grid w-full h-full gap-10 grid-flow-col overflow-x-scroll custom-scroll pb-4">
        {
          projectsData.map((project,i)=>(
            <ProjectWrapper key={i} project={project}/>
          ))
        }
      </div>
    </section>
  );
};

export default MainPanel;
