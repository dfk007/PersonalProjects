import Image from "next/image";
import React from "react";
import item1 from "../../assets/home/7.png";
import item2 from "../../assets/home/8.png";
import item3 from "../../assets/home/9.png";
import item4 from "../../assets/home/10.png";

const Offers = () => {
  return (
    <div className="flex justify-center items-center flex-wrap py-28 space-x-2 bg-[#F6F6F6]">
      <div className="relative">
        <Image src={item1} alt="icon" width={200} height={200} />
        <p className="text-2xl font-bold w-44 text-center absolute top-28 left-2">
          Customised Resumes
        </p>
      </div>
      <div className="relative">
        <Image src={item2} alt="icon" width={200} height={200} />
        <p className="text-2xl font-bold w-44 text-center absolute top-28 left-4">
          Unlimited Revisions
        </p>
      </div>
      <div className="relative">
        <Image src={item3} alt="icon" width={200} height={200} />
        <p className="text-2xl font-bold w-44 text-center absolute top-28 left-4">
          Collaborate With Writers
        </p>
      </div>
      <div className="relative">
        <Image src={item4} alt="icon" width={200} height={200} />
        <p className="text-2xl font-bold w-48 text-center absolute top-28 left-4">
          Tips & Tricks in the Industry
        </p>
      </div>
    </div>
  );
};

export default Offers;
