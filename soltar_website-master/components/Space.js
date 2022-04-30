import React from "react";

export default function Space() {
  return (
    <>
      <section
        id="space"
        className="py-20 relative block  bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(img/section-bg-4.jpg)" }}
      >
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-28">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:max-w-[calc(2/3*100%)] px-4">
              <h1
                className="text-6xl lg:text-7xl text-white uppercase"
                style={{
                  fontFamily: "montserrat",
                  fontWeight: "900",
                  color: "white",
                }}
              >
                The Soltars Space Crafts
              </h1>
            </div>
          </div>

          <div
            className="flex flex-wrap mt-12 justify-center"
            style={{ fontFamily: "montserrat" }}
          >
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full px-4 mt-2">
                <p
                  className="mt-4 text-3xl rounded"
                  style={{
                    fontFamily: "montserrat",
                    backgroundColor: "#2dfffe",
                  }}
                >
                  <a
                    className="no-underline hover:text-black"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="uppercase text-black font-semibold py-2 px-4"
                      hidden
                    >
                      Watch This Space
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
