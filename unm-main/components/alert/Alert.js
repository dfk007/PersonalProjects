import React from "react";
import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Alert = ({ title }) => {
  return (
    <div className="top-32 left-[calc(100vw-80vw)] sm:left-[calc(100vw-75vw)] md:left-[calc(100vw-70vw)] lg:left-[calc(100vw-60vw)] fixed">
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        {title ? (
          <div className="bg-[#FF5252] text-white flex items-center justify-center py-1 px-8 rounded-3xl gap-2">
            <ImCross size={10} />
            <p className="font-bold text-sm">Payment Declined</p>
          </div>
        ) : (
          <div className="bg-[#22AF7C] text-white flex items-center justify-center py-1 px-8 rounded-3xl gap-2">
            <BsCheckLg size={15} />
            <p className="font-bold text-sm">Payment has been processed</p>
          </div>
        )}
      </motion.article>
    </div>
  );
};

export default Alert;
