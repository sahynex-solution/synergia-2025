import Title from "./Title";
import Banner from "../assets/banner.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="relative pt-28">
      <Title title={"About"} />
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 flex flex-col overflow-hidden gap-10 pb-60">
        <div>
          <img
            src={Banner}
            alt="Banner"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between py-4 px-4">
          <h1 className="text-4xl pb-4 ">Empowering All-Round Excellence</h1>
          <p className="text-lg pb-4 text-justify text-zinc-300">
            At{" "}
            <span className="font-bold">
              Sahyadri College of Engineering & Management
            </span>
            , we’re crafting a unique platform where brilliant minds meet to
            redefine the future. This event isn’t just about competition; it’s
            about collaboration, creativity, and the collective pursuit of
            groundbreaking ideas. Experience the thrill of innovation, the
            spirit of entrepreneurship, and the joy of discovery at Synergia,
            where every participant is a pioneer shaping tomorrow.
          </p>
          <div>
            <button
              className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-full inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://www.sahyadri.edu.in",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
