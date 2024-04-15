import Image from "next/image";
import React from "react";
import icon1 from "../../assets/how-it-works/1.png";
import icon2 from "../../assets/how-it-works/2.png";

const Tiles = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="container md:px-20 lg:px-40 py-40">
          <h2 className="h2 max-w-xs">Drawing Employer’s Attention</h2>
          <p className="text-sm max-w-xs">
            Having enjoyed tremendous success with HR recruiting and career
            coaching, our approach toward preparing ATS-optimized resumes is
            backed by the understanding of what goes behind the hiring process
            and sparks recruiter’s interest.
          </p>
        </div>
        <div className="bg-[url('../assets/how-it-works/1.png')] bg-cover bg-center" />
      </div>
      {/* .... */}
      <div className="bg-[#E3F3FF]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          <div className="flex items-center justify-center relative right-10 md:right-0 mb-40 md:mb-0">
            <Image src={icon2} alt="icon" width={500} height={450} />
          </div>
          <div className="md:pr-40 py-10 md:py-40 absolute md:relative md:top-0 top-64 sm:top-96">
            <h2 className="h2">
              Less Job Search with ‘dd’ouble the response rate..
            </h2>
            <p className="text-sm">
              Our pool of resume experts enliven your career highlights and
              expand your job reach. We reflect on your stellar track- record
              and vital contributions to showcase a powerful resume that stands
              out.
            </p>
          </div>
        </div>
      </div>
      {/* .... */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[url('../assets/how-it-works/3.png')] bg-cover bg-center" />
        <div className="container md:px-20 lg:px-40 py-40">
          <h2 className="h2 font-bold max-w-xs">Perfect Fit For The Job</h2>
          <p className="text-sm max-w-xs">
            Resumes having the right industry keywords trigger the ATS and
            confirm the shortlisting of candidates meeting job requirements.
          </p>
          <p className="text-sm max-w-xs">
            Hiring managers spend 6-8 seconds reviewing each resume, where a
            compelling language does the trick in perfectly picturing a
            potential prospect adding value to the business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
