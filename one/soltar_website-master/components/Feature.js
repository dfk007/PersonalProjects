import React from "react";

export default function Feature() {
  return (
    <>
      <section
        id="feature"
        className="py-20 relative block bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(img/section-bg-5.jpg)" }}
      >
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-28">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2
                className="text-4xl font-semibold text-white uppercase"
                style={{ fontFamily: "montserrat", color: "white" }}
              >
                Feature Soltars
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4 mt-5">
              <h2
                className="text-2xl font-semibold text-white uppercase"
                style={{ fontFamily: "montserrat", color: "#2dfffe" }}
              >
                Series Releases
              </h2>
            </div>
          </div>
          <div
            className="flex flex-wrap mt-12 justify-center"
            style={{ fontFamily: "montserrat" }}
          >
            <div className="w-full lg:w-4/12 px-4 text-center">
              <div className="container">
                <div
                  className="p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center"
                  style={{ backgroundColor: "#2dfffe" }}
                >
                  <i className="font-bold text-lg"> 1 </i>
                </div>
                <p className="mt-2 mb-4 text-white">
                  The first of the three series of the SolTars that will be
                  released will present you with the revered heroes of the
                  various solar systems.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 text-center">
              <div className="container">
                <div
                  className="p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center"
                  style={{ backgroundColor: "#2dfffe" }}
                >
                  <i className="font-bold text-lg"> 2</i>
                </div>
                <p className="mt-2 mb-4 text-white">
                  Stay tuned to see what the second of the three series of the
                  SolTars that will be released will present you with...
                </p>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 text-center">
              <div className="container">
                <div
                  className="p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center"
                  style={{ backgroundColor: "#2dfffe" }}
                >
                  <i className="font-bold text-lg"> 3</i>
                </div>
                <p className="mt-2 mb-4 text-white">
                  Stay tuned to see what the second of the three series of the
                  SolTars that will be released will present you with...
                </p>
              </div>
            </div>

            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full px-4 mt-5">
                <p
                  className="mt-4 text-2xl"
                  style={{ fontFamily: "montserrat" }}
                >
                  <a
                    className="no-underline hover:text-white"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="uppercase bg-white hover:bg-gradient-to-r from-purple-800 to-sky-300 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent" hidden>
                      Get Started Now
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
