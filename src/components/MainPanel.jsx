import React from "react";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Skills from "./Skills";
import {
  BsArrowBarDown,
  BsArrowDown,
  BsArrowDownShort,
  BsArrowDownSquare,
  BsBoxArrowDown,
  BsCaretDown,
  BsMenuDown,
} from "react-icons/bs";

const MainPanel = ({ selectedOption }) => {
  return (
    <section className="bg-DARK-III sm:w-4/5 w-[88%] xl:p-16 lg:px-12 lg:py-20 md:px-10 md:py-24 sm:px-8 sm:py-20 pr-2 pl-6 py-20 overflow-hidden">
      {selectedOption === 0 ? (
        <>
          <MyProjects />

          {/* <BsCaretDown
            className="text-xl mt-8 p-1 ml-auto text-ASCENT"
            size={25}
          /> */}
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
