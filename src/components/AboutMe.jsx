import React, { useState } from "react";
import HeroText from "./HeroText";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import ProfileBgPattern from "./ProfileBgPattern";
import LetsTalkBtn from "./LetsTalkBtn";
import PatternBg from "./PatternBg";
import LetsTalkBtnPhone from "./LetsTalkBtnPhone";
import emailjs from "emailjs-com";

import {
  BsArrowLeft,
  BsArrowRight,
  BsDownload,
  BsSendFill,
} from "react-icons/bs";
import {
  AiOutlineDribbble,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import Toast from "./Toast";

const AboutMe = () => {
  const [letsTalk, setLetsTalk] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSentToast, setMessageSentToast] = useState(false);
  const showToast = () => {
    setMessageSentToast(true);

    return setTimeout(() => setMessageSentToast(false), 3000);
  };
  return (
    <motion.div
      className="w-full relative h-full"
      animate={{ opacity: [0, 1], x: [100, 0] }}
      transition={{ duration: 0.5 }}
    >
      {!letsTalk ? (
        <>
          <motion.div
            whileHover={{ scale: 1.3, x: 30 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="relative sm:w-48 w-44 z-10"
          >
            <img
              className="pb-8 sm:w-48 w-44 relative z-20
        "
              src={require("../images/Profile-Image.png")}
              alt=""
            />
            <ProfileBgPattern />
          </motion.div>
          <HeroText />
          <SocialLinks />
          <LetsTalkBtn />
          <LetsTalkBtnPhone setLetsTalk={setLetsTalk} />
          <PatternBg />
        </>
      ) : (
        <>
          <div>
            <BsArrowLeft
              onClick={() => setLetsTalk(false)}
              className="mb-4 text-black p-2 bg-ASCENT "
              size={35}
            />
            <span>
              <h2 className="text-lg font-semibold">Hello,</h2>
              <h2 className="text-xs font-mediu text-WHITE/70 ">
                As someone who is passionate about User Interface, I thoroughly
                enjoy crafting and building web designs. My creations are not
                only visually appealing but also highly interactive, delivering
                a seamless experience. I hope my work resonates with you.
              </h2>
              <div className="flex gap-2 justify-between">
                <button className="text-sm font-semibold text-ASCENT flex justify-end items-center gap-2 mt-4 hover:text-WHITE hover:gap-4 transition-all hover:bg-DARK-II p-2">
                  <span className="text-ASCENT">RESUME</span>
                  <BsDownload size={20} />
                </button>

                <button className="text-sm font-semibold text-ASCENT flex justify-end items-center gap-2 mt-4 hover:text-WHITE hover:gap-4 transition-all hover:bg-DARK-II p-2">
                  <span className="text-ASCENT">PROJECTS</span>
                  <BsArrowRight size={20} />
                </button>
              </div>
              <div className="flex mt-4 text-WHITE/70 flex-wrap">
                <span className="flex text-xs items-center gap-1 hover:bg-ASCENT hover:text-black p-2 cursor-pointer">
                  <AiOutlineDribbble size={25} /> DRIBBLE
                </span>
                <span className="flex text-xs items-center gap-1 hover:bg-ASCENT hover:text-black p-2 cursor-pointer">
                  <AiOutlineFacebook size={25} /> FACEBOOK
                </span>
                <span className="flex text-xs items-center gap-1 hover:bg-ASCENT hover:text-black p-2 cursor-pointer">
                  <AiOutlineInstagram size={25} /> INSTAGRAM
                </span>
              </div>
              <div className="flex mt-6 flex-col gap-3">
                <div className="flex w-full items-center px-2 gap-2">
                  <AiOutlineMail
                    className="p-2 bg-ASCENT text-black rounded-br-xl"
                    size={40}
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-DARK-III  border border-ASCENT/40 border-dashed  py-2 text-xs px-3 flex-1 rounded-md"
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                  />
                </div>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-DARK-III border border-ASCENT/30 rounded-none w-full h-[8rem] py-2 text-xs px-3 mb-2"
                  type="text"
                  placeholder="YOUR MESSAGE"
                />
                <div
                  onClick={() => {
                    emailjs.send(
                      process.env.REACT_APP_EMAIL_SERVICE_ID,
                      process.env.REACT_APP_TEMPLATE_ID,
                      { email: email, message: message },
                      process.env.REACT_APP_USER_ID
                    );
                    showToast();
                  }}
                  className=" relative z-50 hover:bg-ASCENT text-ASCENT cursor-pointer hover:text-black py-2 px-3 rounded- flex text-sm font-semibold gap-2 "
                >
                  <BsSendFill size={20} className="" />
                  SEND
                </div>
              </div>
            </span>
          </div>
        </>
      )}
      <Toast visible={messageSentToast} />
      {/* <div className="absolute text-DARK-I right-0 bottom-[-2rem] leading-[4px]">
        <h1 className="text-9xl font-bold">LONGCLAW</h1>
      </div> */}
    </motion.div>
  );
};

export default AboutMe;
