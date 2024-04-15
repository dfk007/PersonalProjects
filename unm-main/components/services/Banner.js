import React from "react";
import Image from "next/image";
import icon1 from "../../assets/services/1.png";
import icon2 from "../../assets/services/2.png";
import icon3 from "../../assets/services/3.png";

const Banner = () => {
  return (
    <div className="bg-blue-600 text-white py-40 space-y-20">
      <h1 className="h1 font-bold text-3xl sm:text-5xl text-center">
        Our Services
      </h1>
      <div className="flex items-center flex-wrap justify-center gap-4">
        <div className="relative max-w-xs">
          <Image src={icon1} alt="icon" width={250} height={250} />
          <div className="absolute top-32 flex flex-col items-center justify-center">
            <h3 className="h4 font-bold text-center">Value-Added Resume</h3>
            <p className="text-center text-xs">
              We further add value to your resume by infusing years of research
              on subject matters related to the industry and branding you as a
              top-tier professional.
            </p>
          </div>
        </div>
        <div className="relative max-w-xs">
          <Image src={icon2} alt="icon" width={250} height={250} />
          <div className="absolute top-32 flex flex-col items-center justify-center">
            <h3 className="h4 font-bold text-center">Value-Added Resume</h3>
            <p className="text-center text-xs">
              We further add value to your resume by infusing years of research
              on subject matters related to the industry and branding you as a
              top-tier professional.
            </p>
          </div>
        </div>
        <div className="relative max-w-xs">
          <Image src={icon3} alt="icon" width={250} height={250} />
          <div className="absolute top-32 flex flex-col items-center justify-center">
            <h3 className="h4 font-bold text-center">Value-Added Resume</h3>
            <p className="text-center text-xs">
              We further add value to your resume by infusing years of research
              on subject matters related to the industry and branding you as a
              top-tier professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
