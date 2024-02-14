import React from "react";
import { BsArrowRight } from "react-icons/bs";

const LetsTalkBtnPhone = ({ setLetsTalk }) => {
  return (
    <div
      onClick={() => setLetsTalk(true)}
      className="relative sm:hidden z-10 flex gap-4 items-center text-lg mt-8 text-ASCENT "
    >
      Let&apos;s Talk <BsArrowRight />
    </div>
  );
};

export default LetsTalkBtnPhone;
