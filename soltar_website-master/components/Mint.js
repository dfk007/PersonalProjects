import { React, useEffect, useState } from "react";
import Image from "next/image";

var ether = require("./ethers");

export default function Mint() {
  const [numberofwarrior, setNumberofWarrior] = useState(1);

  var minthandler = async () => {
    ether.mintWarriors(numberofwarrior);
  };

  useEffect(() => {
    ether.listenmetamaskchange();
  }, []);
  return (
    <>
      <section
        id="mint"
        className="relative pb-20 pt-20"
        style={{ backgroundColor: "white" }}
      >
        <div className="container mx-auto px-4 text-white">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Image
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="/img/Vivan-w-3-v1-.png"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3
                  className="text-3xl font-semibold uppercase"
                  style={{ color: "black", fontFamily: "montserrat" }}
                >
                  MINT YOUR WARRIOR TODAY
                </h3>
                <p
                  className="mt-4 text-lg leading-relaxed text-black text-justify"
                  style={{ fontFamily: "montserrat" }}
                >
                  Do not miss out on this drop, 7,000 of these fierce soldiers
                  will be available for minting at 0.06 ETH. You don&apos;t
                  want to tell your kids and grandkids you could have minted
                  your own Metaverse Army at 0.06 ETH and decided not to. Are you ready
                  to build your
                </p>
                {/* <label
                  className="block uppercase text-black text-xs font-bold mt-4 mb-2"
                  style={{ fontFamily: "montserrat" }}
                >
                  Number Of Warrior to Mint
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="text-black border h-14 w-full pl-8 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Max 20"
                    onChange={(e) => {
                      setNumberofWarrior(e.target.value);
                    }}
                    value={numberofwarrior}
                    id="numberofwarrior"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      type="button"
                      className="h-10 w-20 text-white rounded-lg bg-black"
                      style={{ fontFamily: "montserrat" }}
                      onClick={(e) => {
                        setNumberofWarrior(20);
                      }}
                    >
                      Max
                    </button>
                  </div>
                </div>

                <p
                  className="mt-4 text-lg"
                  style={{ fontFamily: "montserrat" }}
                >
                  <button
                    className="uppercase bg-transparent hover:bg-gradient-to-r from-purple-800 to-indigo-400 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent"
                    onClick={() => minthandler()}
                  >
                    Mint
                  </button>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
