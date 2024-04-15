import React from "react";
import Image from "next/image";
import icon4 from "../../assets/why-us/4.png";

const JobHunting = () => {
  return (
    <div className="bg-white pt-20 lg:pt-0">
      <div className="container flex flex-col lg:flex-row items-center md:px-40">
        <div>
          <h2 className="h2 ">Job Hunting Simplified</h2>
          <p className="text-xs max-w-xs lg:absolute z-10">
            Today’s job search has become complicated on the path to landing
            your dream job, but our expert guidance can help with achieving
            recognition across top recruiters.
          </p>
        </div>
        <div className="relative -bottom-2">
          <Image src={icon4} alt="icon" height={1000} width={1300} />
        </div>
      </div>
    </div>
  );
};

export default JobHunting;
