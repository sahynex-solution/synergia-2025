import { Fragment } from "react";
import Divider from "./Divider";
import DevhostLogo from "./Logos/DevhostLogo";
import { motion } from "framer-motion";
import SSTHLogo from "./Logos/SSTHLogo";
import SRCLogo from "./Logos/SRCLogo";
import SSTHBlob from "./Blobs/SSTHBlob";
import DevhostBlob from "./Blobs/DevhostBlob";
import SRCBlob from "./Blobs/SRCBlob";
import AerophiliaBlob from "./Blobs/AerophiliaBlob";

export default function Events({ refTag }) {
  return (
    <Fragment>
      <motion.div
        className="flex flex-col justify-center w-full min-h-screen px-4 pb-16 md:px-14 lg:px-44"
        ref={refTag}
      >
        <Divider gradientColors={["#ef32d9", "", "#89fffd"]} title={"SSTH"} />
        <SSTHLogo />

        <motion.div className="flex flex-col items-center justify-end md:flex-row">
          <div className="relative flex items-center justify-between w-4/5 max-w-lg pb-12">
            <SSTHBlob />
          </div>
          <div className="flex flex-col items-center w-full text-center md:items-end md:text-end">
            <motion.h1
              className="w-4/5 max-w-3xl text-3xl font-normal md:text-5xl mix-blend-difference"
              style={{ lineHeight: 1.2 }}
            >
              Innovate Today. Lead the future.
            </motion.h1>
            <motion.p className="w-4/5 max-w-xl py-6 text-lg font-light md:text-2xl text-zinc-300 mix-blend-difference">
              A tech-innovation nexus where young visionaries explore and devise
              solutions.
            </motion.p>
            <div>
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-full hover:scale-105 active:scale-95"
                onClick={() =>
                  window.open(
                    "https://ssth.in",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                View More
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col justify-center w-full min-h-screen px-4 py-8 md:px-14 lg:px-44">
        <Divider
          gradientColors={["#FDFC47", "", "#24fe41"]}
          title={"DEVHOST"}
        />
        <DevhostLogo />
        <div className="flex flex-col-reverse items-center justify-end md:flex-row">
          <motion.div className="flex flex-col items-center w-full text-center md:items-start md:text-start bg-g">
            <motion.h1
              className="w-4/5 max-w-3xl text-3xl font-normal md:text-5xl mix-blend-difference"
              style={{ lineHeight: 1.2 }}
            >
              Sparking innovation. Igniting Curiosity.
            </motion.h1>
            <motion.p className="w-4/5 max-w-xl py-6 text-lg font-light md:text-2xl text-zinc-300 mix-blend-difference">
              A technical extravaganza featuring a 24-Hour hackathon and an
              electrifying esports tournament.
            </motion.p>
            <div>
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-full hover:scale-105 active:scale-95"
                onClick={() =>
                  window.open(
                    "https://devhost.sosc.org.in",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                View More
              </button>
            </div>
          </motion.div>
          <div className="flex items-center justify-between w-4/5 max-w-md pb-4">
            <DevhostBlob />
          </div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col justify-center w-full min-h-screen px-4 py-16 md:px-14 lg:px-44">
        <Divider
          gradientColors={["#833ab4", "#fd1d1d", "#fcb045"]}
          title={"SRC"}
        />
        <SRCLogo />
        <div className="flex flex-col items-center justify-end md:flex-row">
          <div className="flex items-center justify-between w-4/5 max-w-md pb-12">
            <SRCBlob />
          </div>
          <motion.div className="flex flex-col items-center w-full text-center md:items-end md:text-end bg-g">
            <motion.h1
              className="w-4/5 max-w-3xl text-3xl font-normal md:text-5xl"
              style={{ lineHeight: 1.2 }}
            >
              Engineer. Compete. Dominate.
            </motion.h1>
            <motion.p className="w-4/5 max-w-lg py-6 text-lg font-light md:text-2xl text-zinc-300">
              Where robots come to life and imagination knows no bounds!
            </motion.p>
            {/* <div>
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-full hover:scale-105 active:scale-95"
                onClick={() =>
                  window.open(
                    "https://ssth.in",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                View More
              </button>
            </div> */}
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col justify-center w-full min-h-screen px-4 py-8 md:px-14 lg:px-44">
        <Divider
          gradientColors={["#833ab4", "#fd1d1d", "#fcb045"]}
          title={"SRC"}
        />
        <SRCLogo />
        <div className="flex flex-col-reverse items-center justify-end md:flex-row">
          <motion.div className="flex flex-col items-center w-full text-center md:items-start md:text-start bg-g">
            <motion.h1
              className="w-4/5 max-w-3xl text-3xl font-normal md:text-5xl mix-blend-difference"
              style={{ lineHeight: 1.2 }}
            >
              Sparking innovation. Igniting Curiosity.
            </motion.h1>
            <motion.p className="w-4/5 max-w-xl py-6 text-lg font-light md:text-2xl text-zinc-300 mix-blend-difference">
              A technical extravaganza featuring a 24-Hour hackathon and an
              electrifying esports tournament.
            </motion.p>
            <div>
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-full hover:scale-105 active:scale-95"
                onClick={() =>
                  window.open(
                    "https://devhost.sosc.org.in",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                View More
              </button>
            </div>
          </motion.div>
          <div className="flex items-center justify-between w-4/5 max-w-md pb-4">
            <DevhostBlob />
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
}
