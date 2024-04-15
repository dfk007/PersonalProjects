import React from 'react'
import Image from 'next/image'
import icon5 from "../../assets/why-us/5.png";
import icon6 from "../../assets/why-us/6.png";
import icon7 from "../../assets/why-us/7.png";

const Goals = () => {
  return (
    <div className="bg-[#102039] text-white md:px-40 py-20">
    <div className="container flex flex-wrap justify-between items-center gap-10">
      <div className="w-72 relative mx-auto">
        <div className="max-w-xs flex items-center justify-center pb-10">
          <Image src={icon5} alt="icon" height={200} width={200} />
        </div>
        <div className="text-center absolute top-28">
          <h2 className="h2">Beat The Odds</h2>
          <p className="text-xs">
            Struggling to get a hike or make a switch in your career?
            Exploring better opportunities in the job market? Is your path
            toward landing the dream job seems to be misleading? Your next
            big jump is closer than you think!
          </p>
        </div>
      </div>
      <div className="w-72 relative mx-auto">
        <div className="max-w-xs flex items-center justify-center pb-10">
          <Image src={icon6} alt="icon" height={200} width={200} />
        </div>
        <div className="text-center absolute top-28">
          <h2 className="h2">Grab Eyeballs</h2>
          <p className="text-xs">
            We craft your career story by incorporating suitable industry
            keywords as per career levels to pass the ATS scan. The
            end-result is a powerful resume that catches recruiter’s
            attention and leaves an everlasting first impression.
          </p>
        </div>
      </div>
      <div className="w-72 relative mx-auto">
        <div className="max-w-xs flex items-center justify-center pb-10">
          <Image src={icon7} alt="icon" height={200} width={200} />
        </div>
        <div className="text-center absolute top-28">
          <h2 className="h2">Achieve Big</h2>
          <p className="text-xs">
            We optimize your resume by turning your Doer status into an
            Achiever acumen ‘dd’oubling your selection chances!
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Goals