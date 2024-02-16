import React from "react";
import { AboutMe, MyProjects, Skills } from "../components";

const MainPanel = ({ selectedOption }) => {
  return (
    <section
      className="bg-DARK-III w-[88%] pr-2 pl-6 py-20 overflow-hidden
     sm:w-4/5 sm:px-8 sm:py-20  
     md:px-10 md:py-24
     lg:px-12
     xl:p-16 lg:py-20 "
    >
      {selectedOption === 0 ? (
        <>
          <MyProjects />
        </>
      ) : selectedOption === 1 ? (
        <AboutMe />
      ) : (
        <Skills />
      )}
    </section>
  );
};

export default MainPanel;
