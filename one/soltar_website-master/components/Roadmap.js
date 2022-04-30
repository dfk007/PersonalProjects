import React from "react";

export default function Roadmap() {
  return (
    <>
      <section id="roadmap" className="py-20 relative block bg-black">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-28">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2
                className="text-4xl font-semibold text-white uppercase"
                style={{ fontFamily: "montserrat", color: "white" }}
              >
                Roadmap
              </h2>
            </div>
          </div>

          {/* <!-- component --> */}
          <div
            className="container mx-auto w-full h-full"
            style={{ fontFamily: "montserrat" }}
          >
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                style={{ left: "50%" }}
              ></div>
              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h1 className="mx-auto font-semibold text-md text-white text-center">
                    Q4 2021
                  </h1>
                </div>
                <div
                  className="order-1 rounded-lg shadow-xl w-5/12  px-6 lg:px-6 py-4"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl"></h3>
                  <p className="text-base leading-snug tracking-wide text-white text-opacity-100">
                    <li>First Series Mint</li>
                    <li>Resource Production</li>
                    <li>Two Partnership Reveal</li>
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#6f247d" }}
                >
                  <h1 className="mx-auto text-white font-semibold text-md text-center">
                    Q1 2022
                  </h1>
                </div>
                <div
                  className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
                  style={{ backgroundColor: "#6f247d" }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl"></h3>
                  <p className="text-base font-medium leading-snug tracking-wide text-white text-opacity-100">
                    <li>Second Series Mint</li>
                    <li>Pairing</li>
                    <li>Resource Market</li>
                    <li>More Partnership Reveal</li>
                  </p>
                </div>
              </div>

              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h1 className="mx-auto font-semibold text-md text-white text-center">
                    Q2 2022
                  </h1>
                </div>
                <div
                  className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl"></h3>
                  <p className="text-base leading-snug tracking-wide text-white text-opacity-100">
                    <li>Third Series Mint</li>
                    <li>Royalties Special Program</li>
                    <li>Resource Market Expansion</li>
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#6f247d" }}
                >
                  <h1 className="mx-auto text-white font-semibold text-md text-center">
                    Q3 2022
                  </h1>
                </div>
                <div
                  className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
                  style={{ backgroundColor: "#6f247d" }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl"></h3>
                  <p className="text-base font-medium leading-snug tracking-wide text-white text-opacity-100">
                    <li>Further Partnership Reveal</li>
                    <li>Revenue Model Expansion</li>
                    <li>Additional Use Cases</li>
                  </p>
                </div>
              </div>

              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div
                  className="z-20 flex items-center order-1 shadow-xl w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h1 className="mx-auto font-semibold text-md text-white text-center">
                    Q4 2022
                  </h1>
                </div>
                <div
                  className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4"
                  style={{ backgroundColor: "#334fbe" }}
                >
                  <h3 className="mb-3 font-bold text-white text-xl"></h3>
                  <p className="text-base leading-snug tracking-wide text-white text-opacity-100">
                    <li>Watch This Space!</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
