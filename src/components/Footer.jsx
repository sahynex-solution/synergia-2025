import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";
import { FaMeta } from "react-icons/fa6";

export default function Footer({ refTag }) {
  return (
    <motion.div
      className="flex flex-col w-full gap-10 p-16 md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.4 }}
      ref={refTag}
    >
<<<<<<< HEAD
      <motion.div className="flex flex-col items-center justify-center w-full gap-5 p-4 md:items-start">
        <img src={Logo} className="max-w-sm" />
        <h2 className="max-w-md px-2 text-xl">
=======
      <motion.div className="w-full flex md:items-start items-center justify-center gap-5 flex-col p-4">
        <img src={Logo} alt="Synergia Logo" className="max-w-sm" />
        <h2 className="max-w-md text-xl px-2">
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
          SAHYADRI CAMPUS, ADYAR, MANGALURU, KARNATAKA, INDIA - 575007
        </h2>
      </motion.div>
      <motion.div className="flex flex-col items-end justify-around w-full">
        <div className="flex flex-col items-center justify-start w-full max-w-md gap-5 text-center md:items-end md:text-end">
          <div>
            <h1 className="pb-2 text-lg font-bold md:text-xl">
              FOR ALL YOUR QUERIES
            </h1>
            <p>JEEVITHA J S : +91 74839 23221</p>
            <p>VAIBHAV SHETTY : +91 76192 63170</p>
          </div>
          <div>
            <h1 className="pb-2 text-lg font-bold md:text-xl">
              OR WRITE TO US
            </h1>
            <p>SYNERGIA@SAHYADRI.EDU.IN</p>
          </div>
          <div className="flex gap-2">
            <button
<<<<<<< HEAD
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-lg hover:scale-105 active:scale-95"
=======
              className="bg-white text-black font-semibold p-2 text-sm w-10 h-10 rounded-lg inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              title="Instagram"
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
              onClick={() =>
                window.open(
                  "https://www.instagram.com/synergia_sahyadri/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <FaInstagram className="w-full h-full" />
            </button>
            <button
<<<<<<< HEAD
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-lg hover:scale-105 active:scale-95"
=======
              className="bg-white text-black font-semibold p-2 text-sm w-10 h-10 rounded-lg inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              title="Facebook"
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
              onClick={() =>
                window.open(
                  "https://www.facebook.com/people/Synergia-Sahyadri/61553365303591/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <FaMeta className="w-full h-full" />
            </button>
            <button
<<<<<<< HEAD
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-lg hover:scale-105 active:scale-95"
=======
              className="bg-white text-black font-semibold p-2 text-sm w-10 h-10 rounded-lg inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              title="LinkedIn"
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/synergia-sahyadri/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <FaLinkedinIn className="w-full h-full" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
