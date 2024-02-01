import React from "react";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

const MainPanel = ({ selectedOption }) => {
  return (
    <section className="bg-DARK-III w-4/5 p-16">
      {selectedOption === 0 ? (
        <MyProjects />
      ) : selectedOption === 1 ? (
        <AboutMe />
      ) : (
        <Skills />
      )}
    </section>
  );
};

export default MainPanel;
