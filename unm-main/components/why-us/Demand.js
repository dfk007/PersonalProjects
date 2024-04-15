import React from "react";
import Image from "next/image";
import icon3 from "../../assets/why-us/3.png";

const Demand = () => {
  return (
    <div className="bg-[#102039] text-white py-20 lg:px-40">
      <div className="container">
        <h2 className="h2 mb-4">Being In Demand</h2>
        <p className="text-xs">
          Let’s face it, job hunting is frustrating! As the ‘DD’ experts deliver
          an interview-winning resume, the likelihood of getting a job rises by
        </p>
        <div className="mb-10">
          <Image src={icon3} alt="icon" />
        </div>
        <p className="text-xs">
          The compelling narration of your career story shall not only boost
          your confidence, but undoubtedly shed light on your underutilized
          amenities. You’re in a better position to demand a salary raise,
          promotion, or most likely target better positions with a professional
          resume of Unmatchedd standing.
        </p>
      </div>
    </div>
  );
};

export default Demand;
