import Image from "next/image";
import React, { useState } from "react";
import icon13 from "../../assets/home/13.png";
import icon14 from "../../assets/home/14.png";

const QuestionItem = ({ click, setClick, name, title, question }) => {
  return (
    <div onClick={() => setClick({ [name]: !click })} className="">
      <div
        className="flex flex-col max-w-lg mx-auto cursor-pointer bg-white px-4 py-3 rounded-lg shadow hover:border-[2px] border-blue-500 space-y-3 hover:scale-105 transition ease-in-out"
        data-bs-toggle="collapse"
        data-bs-target={`#${name}`}
        aria-expanded="false"
        aria-controls={name}
      >
        <div className="d-flex items-center justify-between">
          <p className="font-bold text-lg">{title}</p>
          <div>
            <Image
              src={click ? icon13 : icon14}
              alt="icon"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="collapse" id={name}>
          <div className="text-gray-400 text-sm">
            {/* queston parameter is supposed to be used here */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
