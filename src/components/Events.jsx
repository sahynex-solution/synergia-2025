import { Fragment } from "react";
import Divider from "./Divider";
import DevhostLogo from "./Logos/DevhostLogo";
import { motion } from "framer-motion";
import SSTHLogo from "./Logos/SSTHLogo";
import SRCLogo from "./Logos/SRCLogo";
import SSTHBlob from "./Blobs/SSTHBlob";
import DevhostBlob from "./Blobs/DevhostBlob";
import SRCBlob from "./Blobs/SRCBlob";

export default function Events({ refTag }) {
  return (
    <Fragment>
      <motion.div
        className="w-full md:px-14 lg:px-44 px-4 pb-16 min-h-screen flex flex-col justify-center"
        ref={refTag}
      >
        <Divider gradientColors={["#ef32d9", "", "#89fffd"]} title={"SSTH"} />
        <SSTHLogo />

        <motion.div className="flex items-center justify-end flex-col md:flex-row">
          <div className="max-w-lg pb-12 flex items-center justify-between w-4/5 relative">
            <SSTHBlob />
          </div>
          <div className="flex flex-col md:items-end md:text-end items-center text-center w-full">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal mix-blend-difference"
              style={{ lineHeight: 1.2 }}
            >
              Innovate Today. Lead the future.
            </motion.h1>
            <motion.p className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300 mix-blend-difference">
              A tech-innovation nexus where young visionaries explore and devise
              solutions.
            </motion.p>
            <div>
              <button
                className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-full inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-8 min-h-screen flex flex-col justify-center">
        <Divider
          gradientColors={["#FDFC47", "", "#24fe41"]}
          title={"DEVHOST"}
        />
        <DevhostLogo />
        <div className="flex items-center justify-end flex-col-reverse md:flex-row">
          <motion.div className="flex flex-col md:items-start md:text-start items-center text-center w-full bg-g">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal mix-blend-difference"
              style={{ lineHeight: 1.2 }}
            >
              Sparking innovation. Igniting Curiosity.
            </motion.h1>
            <motion.p className="md:text-2xl max-w-xl w-4/5 text-lg py-6 font-light text-zinc-300 mix-blend-difference">
              A technical extravaganza featuring a 24-Hour hackathon and an
              electrifying esports tournament.
            </motion.p>
            <div>
              <button
                className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-full inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
          <div className="max-w-md pb-4 flex items-center justify-between w-4/5">
            <DevhostBlob />
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full md:px-14 lg:px-44 px-4 py-16 min-h-screen flex flex-col justify-center">
        <Divider
          gradientColors={["#833ab4", "#fd1d1d", "#fcb045"]}
          title={"SRC"}
        />
        <SRCLogo />
        <div className="flex items-center justify-end flex-col md:flex-row">
          <div className="max-w-md pb-12  flex items-center justify-between w-4/5">
            <SRCBlob />
          </div>
          <motion.div className="flex flex-col md:items-end md:text-end items-center text-center w-full bg-g">
            <motion.h1
              className="md:text-5xl max-w-3xl w-4/5 text-3xl font-normal"
              style={{ lineHeight: 1.2 }}
            >
              Engineer. Compete. Dominate.
            </motion.h1>
            <motion.p className="md:text-2xl max-w-lg w-4/5 text-lg py-6 font-light text-zinc-300">
              Where robots come to life and imagination knows no bounds!
            </motion.p>
            {/* <div>
              <button
                className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-full inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
    </Fragment>
  );
}
