import React from "react";
import { BsSendCheck } from "react-icons/bs";
import { motion } from "framer-motion";

const Toast = ({ visible }) => {
  if (!visible) return <></>;
  return (
    <motion.div
      className={`  bg-ASCENT px-8 py-3 gap-4 items-center flex absolute text-DARK-III right-2 bottom-[-2rem]`}
    >
      <BsSendCheck /> Message sent Successfully
    </motion.div>
  );
};

export default Toast;
