import React from "react";
import Link from "next/link";
import Image from "next/image";
var ether = require("./ethers");

var btn_val = "Connect";

var handleClick = async () => {
  ether.connect();
};

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        style={{ backgroundColor: "white" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                <img alt="LOGO" src="/img/Logo.png" className="w-28" />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            style={{ backgroundColor: "white" }}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#home"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#aboutus"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  About Us
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#mintvanguard"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Mint
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#feature"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Feature
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#discord"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Discord
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                  href="#roadmap"
                >
                  <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                  Roadmap
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">{/* <IndexDropdown /> */}</li>
              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://opensea.io/collection/soltars"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="..."
                    src="/img/opensea_black.svg"
                    className="align-middle rounded-lg"
                    height={25}
                    width={25}
                  />
                  {/* <i className="text-bluegrey-400 fab fa-discord text-lg leading-lg " /> */}
                  <span className="lg:hidden inline-block ml-2">Opensea</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/SoltarsOfficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-bluegrey-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Twitter</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className=" active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  id="connetbtn"
                  onClick={() => handleClick()}
                >
                  <i className="fas fa-link"></i> {btn_val}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
