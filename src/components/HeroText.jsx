import React from "react";
import AnimatedTextWord from "./AnimatedTextWord";
import AnimatedTextSlideDown from "./AnimatedTextSlideDown";

const HeroText = () => {
  return (
    <div className="cursor-default  relative z-10">
      <h2 className=" font-semibold  xl:text-5xl lg:text-4xl md:text-4xl text-2xl sm:text-3xl">
        <span className="xs:text-GRAY-I text-WHITE/50">HELLO THERE</span>
        <span className="text-ASCENT">,</span>
      </h2>
      <h3 className="font-semibold xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl text-lg tracking-wider">
        <AnimatedTextWord text={"MY NAME IS MADHURESH"} />
      </h3>
      <h3 className="font-bold xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-xl tracking-[1px] mt-6">
        <span className="xs:text-DARK-II text-WHITE/20">I AM INTO</span>{" "}
        <span className="text-WHITE text-nowrap">UI/UX DESIGN</span>{" "}
        {/* <AnimatedTextSlideDown /> */}
        <br />
        <span className="xs:text-DARK-II text-WHITE/20">AND </span>
        <span>DEVELOPMENT</span>
        <br /> <span className="xs:text-DARK-II text-WHITE/20">SINCE 2022</span>
        <span className="text-ASCENT">.</span>
      </h3>
    </div>
  );
};

export default HeroText;
