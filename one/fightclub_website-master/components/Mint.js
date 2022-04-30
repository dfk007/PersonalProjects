import { React, useEffect, useState } from "react";

var ether = require("./ethers");

export default function Mint() {
  const [numberofnfts, setNumberofNFT] = useState(1);

  const increment = (event) => {
    if (numberofnfts < 7) {
      setNumberofNFT(numberofnfts+1);
      console.log(numberofnfts);
    } else {
      setNumberofNFT(7);
      console.log(numberofnfts);
    }
  };

  const derement = () => {
    if (numberofnfts <= 1) {
      setNumberofNFT(1);
      console.log(numberofnfts);
    } else {
      setNumberofNFT(numberofnfts-1);
      console.log(numberofnfts);
    }
  };

  var minthandler = async () => {
    ether.mintFC(numberofnfts);
  };

  useEffect(() => {
    ether.listenmetamaskchange();
  }, []);

  return (
    <>
      <section
        id="minting"
        className="relative pb-4"
        style={{ backgroundColor: "black" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap"></div>

          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full lg:max-w-[calc(2/3*100%)] px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-lg border-0"
              style={{backgroundColor:"#d7235b"}}>
                <div className="rounded-t mb-0 px-6 py-6"></div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold"></div>
                  <form>
                    <div className="flex w-full mb-3 mt-2">
                      <div className="w-full lg:max-w-[calc(1/3*100%)] px-4 mr-auto ml-auto">
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button
                            type="button"
                            className="text-white rounded-lg font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-20 ease-linear transition-all duration-150"
                            style={{ backgroundColor:"#cb227b",fontFamily: "montserrat" }}
                            onClick={(e) => {
                              derement();
                            }}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black"
                            style={{ fontFamily: "montserrat" }}
                            onChange={(e) => {
                              setNumberofNFT(e.target.value);
                            }}
                            value={numberofnfts}
                          ></input>
                          <button
                            type="button"
                            className="text-white rounded-lg font-bold uppercase shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-20 ease-linear transition-all duration-150"
                            style={{ backgroundColor:"#cb227b",fontFamily: "montserrat" }}
                            onClick={(e) => {
                              increment();
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="w-full lg:max-w-[calc(2/3*100%)] px-4 mr-auto ml-auto">
                        <button
                          className="text-white rounded-lg font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                          id="mint"
                          style={{ backgroundColor:"#cb227b",fontFamily: "montserrat" }}
                          onClick={() => minthandler()}
                        >
                          Mint
                        </button>
                      </div>
                    </div>

                    <div className="flex w-full mb-3 mt-2">
                      <div className="w-full lg:max-w-[calc(1/3*100%)] px-4 mr-auto ml-auto text-center">
                        <h6
                          className="text-white text-lg"
                          id="total"
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "0.75rem",
                          }}
                        >
                          MAX you can mint 7
                        </h6>
                      </div>
                      <div className="w-full lg:max-w-[calc(2/3*100%)] px-4 mr-auto ml-auto text-center">
                        <h6
                          className="text-white text-lg"
                          style={{
                            fontFamily: "montserrat",
                            fontSize: "0.75rem",
                          }}
                        >
                          You&apos;re about to mint 1 Fight Club for 0.06666 ETH +
                          gas fee
                        </h6>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
