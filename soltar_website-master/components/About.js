import Image from "next/image";
import { React, useEffect, useState } from "react";

var ether = require("./ethers");

export default function About() {
  const [numberofvanguard, setNumberofVanguard] = useState(1);
  const [partyTime, setPartyTime] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [disable, setDisable] = useState(true);

  var minthandler = async () => {
    ether.mintVanguards(numberofvanguard);
  };

  useEffect(() => {
    ether.listenmetamaskchange();

    const target = new Date("12/20/2021 19:00:00 UTC");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime("We Are Live!");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setDisable(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section
        id="aboutus"
        className="relative py-20"
        style={{
          backgroundImage: "url(img/section-bg-3.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:max-w-[calc(2/3*100%)] ml-auto mr-auto px-4 py-6 bg-white rounded-lg">
              <div className="md:pr-12">
                <h3
                  className="text-3xl text-center font-semibold uppercase"
                  style={{ color: "black", fontFamily: "montserrat" }}
                >
                  About Soltars
                </h3>
                <p
                  className="mt-4 text-lg leading-relaxed text-black text-center"
                  style={{ fontFamily: "montserrat" }}
                >
                  SolTars are a 3 Series blockchain NFT project on the Ethereum
                  Blockchain. The SolTars collection is designed to represent
                  various space crafts that will be used in a special game
                  project lined up to be released in the near future. The
                  SolTars Warriors are Lords and protectors of their solar
                  systems, they are warriors worshiped by colonies and they
                  protect their citizens and provide them with abundance of
                  resources as a reward for their loyalty and dedication to
                  order in the solar systems they protect. They generate
                  resources from their respective solar systems, the more
                  powerful the trooper, the more resources it gets as reward
                  from its area. All of which will be convertible through
                  Soltars.io in the future. Only 10 000 Warriors exist, and even
                  less ships are available to transport them around the galaxy,
                  which limits their area of operations presently.
                </p>
                <p
                  className="mt-4 leading-relaxed text-white text-center"
                  style={{ fontFamily: "montserrat" }}
                >
                  <a
                    className="no-underline hover:text-white"
                    href="https://twitter.com/SoltarsOfficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="bg-gradient-to-r from-purple-800 to-indigo-300 text-2xl font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                      id="joinustodaybtn"
                    >
                      Join Us Today
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id="mintvanguard">
          <h3
            className="text-3xl text-center font-bold uppercase my-8"
            style={{ color: "white", fontFamily: "montserrat" }}
          >
            Mint Your Vanguard
          </h3>
          <div className="container mx-auto px-4 text-white">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:max-w-[calc(1/2*100%)] ml-auto mr-auto px-4">
                <Image
                  alt="..."
                  className="max-w-full max-h-full rounded-lg shadow-lg"
                  src="/img/character-2-1.png"
                  height="100%"
                  width="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="w-full md:max-w-[calc(1/2*100%)] ml-auto mr-auto px-4 py-6 bg-black rounded border-4 border-yellow-600">
                <div className="md:pr-12">
                  <div className="flex flex-wrap">
                    <div className="w-3/12 px-4">
                      <p className="text-sm block my-4 p-3 text-black">
                        <Image
                          alt="..."
                          className="max-w-full rounded-lg shadow-lg"
                          src="/img/treasure-icon.png"
                          height="100%"
                          width="100%"
                          layout="responsive"
                          objectFit="contain"
                        />
                      </p>
                    </div>
                    <div className="w-8/12 px-4">
                      <p
                        className="text-sm block my-4 p-3 text-white"
                        style={{ fontFamily: "montserrat" }}
                      >
                        Registered participants of SolTar are given the once in
                        a lifetime opportunity to mint their own vanguards at a
                        reasonably affordable fee of 0.08 ETH. Only 3000
                        vanguards will exist, and even less ships are available
                        to transport them around the galaxy.
                      </p>
                    </div>
                  </div>
                  <hr className="my-6 border-blueGray-300" />
                  <div className="flex flex-wrap">
                    <div className="w-3/12 px-4">
                      <p className="text-sm block my-4 p-3 text-black">
                        <Image
                          alt="..."
                          className="max-w-full rounded-lg shadow-lg"
                          src="/img/treasure-icon.png"
                          height="100%"
                          width="100%"
                          layout="responsive"
                          objectFit="contain"
                        />
                      </p>
                    </div>
                    <div className="w-8/12 px-4">
                      <p
                        className="text-sm block my-4 p-3 text-white"
                        style={{ fontFamily: "montserrat" }}
                      >
                        Do not miss out of this once in a lifetime opportunity!
                        It will be a sad tale to tell years down the road to
                        your children and grandchildren that you had the
                        opportunity to but failed to seize it!
                      </p>
                    </div>
                  </div>
                  <hr className="my-6 border-blueGray-300" />

                  <div className="flex flex-wrap">
                    <h1
                      className="text-3xl ml-auto mr-auto mb-3 font-extralight text-white uppercase "
                      style={{ fontFamily: "montserrat" }}
                    >
                      {partyTime}
                    </h1>
                    <div
                      className="text-2xl text-center flex w-full items-center justify-center"
                      style={{ fontFamily: "montserrat" }}
                    >
                      <div className="w-24 mx-1 p-2 ">
                        <div className="leading-relax">{days}</div>
                        <div className="text-sm leading-relax">DD</div>
                      </div>
                      <div className="w-24 mx-1 p-2 ">
                        <div className="leading-relax">{hours}</div>
                        <div className="text-sm leading-relax">HH</div>
                      </div>
                      <div className="w-24 mx-1 p-2 ">
                        <div className="leading-relax">{minutes}</div>
                        <div className="text-sm leading-relax">MM</div>
                      </div>
                      <div className="w-24 mx-1 p-2">
                        <div className="leading-relax">{seconds}</div>
                        <div className="text-sm leading-relax">SS</div>
                      </div>
                    </div>
                    <div className="w-full ml-3 mt-4">
                      <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        style={{ fontFamily: "montserrat" }}
                      >
                        Number Of Vanguard to Mint
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="text-black border-0 h-14 w-full pl-8 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                          placeholder="Max 5"
                          onChange={(e) => {
                            setNumberofVanguard(e.target.value);
                          }}
                          value={numberofvanguard}
                          id="numberofvanguard"
                        />
                        <div className="absolute top-2 right-2">
                          <button
                            type="button"
                            className="h-10 w-20 text-white rounded-lg bg-gradient-to-r from-purple-800 to-sky-300"
                            style={{ fontFamily: "montserrat" }}
                            onClick={(e) => {
                              setNumberofVanguard(5);
                            }}
                          >
                            Max
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p
                    className="mt-4 leading-relaxed text-white text-center"
                    style={{ fontFamily: "montserrat" }}
                  >
                    <button
                      className="w-full bg-gradient-to-r from-purple-800 to-sky-300 text-2xl font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                      id="joinustodaybtn"
                      disabled={disable}
                      onClick={() => minthandler()}
                    >
                      Mint Your Vanguard!
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
