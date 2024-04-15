import Image from "next/image";
import React from "react";
import icon1 from "../../assets/why-us/1.png";
import icon2 from "../../assets/why-us/2.png";

const Banner = () => {
  return (
    <div className="flex justify-center bg-[#f9f9f9] pb-28">
      <div className="space-y-16 container">
        <div className="flex flex-wrap justify-between gap-16 lg:px-40 pt-20">
          <div className="w-80 relative mx-auto">
            <div className="max-w-xs flex items-center justify-center pb-10">
              <Image src={icon1} alt="icon" height={200} width={200} />
            </div>
            <div className="text-center absolute top-24">
              <h2 className="h2 font-bold">Industry-Tailored Resumes</h2>
              <p className="text-xs">
                A resume cannot be tailored to fulfill client needs until
                industry-matter experts ought to take responsibility. Which is
                why coaches, recruiters, and industry professionals stir
                preferred keywords, power phrases, and formats into an
                Unmatchedd resume!
              </p>
            </div>
          </div>
          <div className="w-80 relative mx-auto">
            <div className="max-w-xs flex items-center justify-center pb-10">
              <Image src={icon2} alt="icon" height={200} width={200} />
            </div>
            <div className="text-center absolute top-24">
              <h2 className="h2 font-bold">Recruiter-Preferred Verbiage</h2>
              <p className="text-xs">
                A resume cannot be tailored to fulfill client needs until
                industry-matter experts ought to take responsibility. Which is
                why coaches, recruiters, and industry professionals stir
                preferred keywords, power phrases, and formats into an
                Unmatchedd resume!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col space-y-3 lg:mx-40 items-center text-center py-10 rounded">
          <p className="text-blue-600 text-xs">
            Still not enough? Collaborate with our writer till your resume is
            customized to achieve the desired outcome.
          </p>
          <button
            className="btn bg-blue-800 rounded-3xl px-4 py-2 text-white btn-outline-primary w-fit text-sm"
            onClick={() => router.push("/getintouch")}
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
