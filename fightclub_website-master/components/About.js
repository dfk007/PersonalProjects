import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section id="aboutus" className="relative py-20 bg-black">
        <div className="container mx-auto px-4 text-white">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:max-w-[calc(2/3*100%)] ml-auto mr-auto px-4 text-center">
              <div className="md:pr-12">
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: "white", fontFamily: "montserrat" }}
                >
                  MINT PAGE OF Fight Club NFT
                </h3>
                <p
                  className="mt-4 text-lg leading-relaxed text-white"
                  style={{ fontFamily: "montserrat" }}
                >
                  Fight Club NFT Mint Details <br />
                  First 1000 mints to be free <br />
                  Max 5 NFT&apos;s per wallet <br />
                  After free mint is over each wallet will have limit of 7 mint per wallet
                  0.06666 ETH + Gas per Fight Club NFT <br />
                  NFT&apos;s reveal 24 hours after Public sale has concluded <br />
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
