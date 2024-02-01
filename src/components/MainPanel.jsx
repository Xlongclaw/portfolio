import React from "react";
import SocialLinks from "./SocialLinks";
import HeroText from "./HeroText";

const MainPanel = () => {
  return (
    <section className="bg-DARK-III w-4/5 pl-16 pt-16">
      <img
        className="pb-8 w-48
        "
        src={require("../images/Profile-Image.png")}
        alt=""
      />
      <HeroText />
      <SocialLinks />
    </section>
  );
};

export default MainPanel;
