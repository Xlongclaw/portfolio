import React from 'react'
import HeroText from './HeroText'
import SocialLinks from './SocialLinks'

const AboutMe = () => {
  return (
    <div className='w-full'>
        <img
        className="pb-8 w-48
        "
        src={require("../images/Profile-Image.png")}
        alt=""
      />
      <HeroText />
      <SocialLinks />
    </div>
  )
}

export default AboutMe