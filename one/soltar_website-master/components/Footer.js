import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-white pt-8 pb-6 text-white" >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                <img
                      alt="LOGO"
                      src="/img/logo.png"
                      className="w-28"
                />
              </a>
            </Link>
             
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  
                </div>
                
                <div className="w-full lg:w-4/12 px-4">
                  <a href="https://twitter.com/SoltarsOfficial" target="_blank" rel="noreferrer">  
                    <button
                      className="h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                      style={{color:"black"}}
                    >
                      <i className="text-bluegrey-400 fab fa-twitter fa-3x"></i>
                    </button>
                  </a>
                  <a href="https://opensea.io/collection/soltars" target="_blank" rel="noreferrer">  
                    <button
                      className="h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                      style={{color:"black"}}
                    >
                    <img 
                    alt="..."
                    src="/img/opensea_black.svg"
                    className="align-middle rounded-lg"
                    height={35}
                    width={35}
                    />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-black text-whitefont-semibold py-1">
                Copyright © {new Date().getFullYear()} Soltar{" "}.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
