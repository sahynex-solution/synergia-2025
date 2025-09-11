import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";
import { FaMeta } from "react-icons/fa6";

export default function Footer({ refTag }) {
  return (
    <motion.div
      className="w-full flex md:flex-row flex-col p-16 gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.4 }}
      ref={refTag}
    >
      <motion.div className="w-full flex md:items-start items-center justify-center gap-5 flex-col p-4">
        <img src={Logo} className="max-w-sm" />
        <h2 className="max-w-md text-xl px-2">
          SAHYADRI CAMPUS, ADYAR, MANGALURU, KARNATAKA, INDIA - 575007
        </h2>
      </motion.div>
      <motion.div className="w-full flex flex-col justify-around items-end">
        <div className="flex flex-col justify-start gap-5 max-w-md w-full md:items-end md:text-end items-center text-center">
          <div>
            <h1 className="md:text-xl text-lg font-bold pb-2">
              FOR ALL YOUR QUERIES
            </h1>
            <p>TEJAS : +91 72597 27460</p>
          </div>
          <div>
            <h1 className="md:text-xl text-lg font-bold pb-2">
              OR WRITE TO US
            </h1>
            <p>SYNERGIA@SAHYADRI.EDU.IN</p>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-white text-black font-semibold p-2 text-sm w-10 h-10 rounded-lg inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
              className="bg-white text-black font-semibold p-2 text-sm w-10 h-10 rounded-lg inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
              className="bg-white text-black font-semibold p-2 text-sm w-10 h-10 rounded-lg inline-flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
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
