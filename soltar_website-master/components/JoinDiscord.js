import Image from "next/image";

export default function JoinDiscord() {
  return (
    <>
      <section
        id="discord"
        className="relative pb-20 pt-20 bg-gradient-to-br from-sky-300 via-indigo-400 to-purple-800"
      >
        <div className="container mx-auto px-4 text-white">
          <div className="items-center flex flex-wrap">
            <div className="invisible lg:visible w-32 lg:max-w-[calc(1/3*100%)] ml-36 lg:absolute">
              <Image
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="/img/discord-icon.png"
                height="100%"
                width="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="w-full lg:max-w-[calc(2/3*100%)] ml-auto mr-auto px-28 lg:py-20 border-4 border-white">
              <div className="md:pr-12">
                <h3
                  className="text-3xl font-semibold uppercase"
                  style={{ color: "white", fontFamily: "montserrat" }}
                >
                  JOIN OUR DISCORD GROUP
                </h3>
                <p
                  className="mt-4 text-lg leading-relaxed text-white text-left"
                  style={{ fontFamily: "montserrat" }}
                >
                  The Soldiers Of The Metaverse is recruiting all potential
                  commanders to join the discord to stay on top of all news,
                  announcements and objectives. All news regarding the Soldier
                  drop, contests and more will appear here first, do not miss
                  out!
                </p>
                <p
                  className="mt-4 text-lg"
                  style={{ fontFamily: "montserrat" }}
                >
                  <a
                    className="no-underline hover:text-black"
                    href="https://discord.gg/HgECYGk2Ay"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="uppercase bg-white text-black font-semibold py-2 px-4 rounded ">
                      Join Now
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
