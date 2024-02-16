import React from "react";
import { BsSendCheck } from "react-icons/bs";
import { motion } from "framer-motion";

const Toast = ({ visible }) => {
  return (
    <motion.div
      className={`${
        visible ? "top-[10rem]" : "hidden"
      } bg-ASCENT px-8 py-3 gap-4 items-center flex absolute text-DARK-III right-0 bottom-[-2rem]`}
    >
      <BsSendCheck /> Message sent Successfully
    </motion.div>
  );
};

export default Toast;
