import React from "react";

const Banner = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="container md:px-40 py-40 flex flex-col justify-center items-center text-center space-y-10">
        <div>
          <h2 className="h2">All up to the Hiring Manager</h2>
          <p className="text-sm max-w-3xl">
            Client success with an Unmatche’dd’ Resume is driven by valuable
            insights on hiring managers’ strategy in selecting the right
            candidate. Team ‘DD’’s phenomenal writers leave no stone unturned in
            the strive to getting you the position you deserve!
          </p>
        </div>
        <div className="bg-white text-blue-600 rounded py-10 space-y-5 md:px-40">
          <p className="text-blue-600 text-sm max-w-xs">
            {" "}
            Didn’t get an interview call within 90 days? Get a free rewrite
            instead.
          </p>
          <button
            className="btn bg-blue-800 rounded-3xl px-4 py-2 text-white btn-outline-primary w-fit text-sm"
            // onClick={() => router.push("/getintouch")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
