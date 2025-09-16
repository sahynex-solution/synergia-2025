import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";
import { FaMeta } from "react-icons/fa6";

export default function Footer({ refTag }) {
  return (
    <motion.div
      className="flex flex-col w-full gap-10 p-10 md:flex-row md:justify-between md:items-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.4 }}
      ref={refTag}
    >
      {/* Left Section: Logo + Address */}
      <motion.div className="flex flex-col items-center justify-center w-full gap-5 p-4 md:items-start md:w-1/2">
        <img src={Logo} className="max-w-sm" alt="Synergia Logo" />
        <h2 className="max-w-md px-2 text-base leading-relaxed text-center md:text-left md:text-lg">
          SAHYADRI CAMPUS, ADYAR, <br />
          MANGALURU, KARNATAKA, INDIA - 575007
        </h2>
      </motion.div>

      {/* Right Section: Queries + Email + Socials */}
      <motion.div className="flex flex-col items-center justify-start w-full gap-6 md:items-end md:w-1/2">
        <div className="flex flex-col gap-6 text-center md:text-right">
          <div>
            <h1 className="pb-2 text-lg font-bold md:text-xl">
              FOR ALL YOUR QUERIES
            </h1>
            <p className="text-sm font-medium md:text-base">
              JEEVITHA J S :{" "}
              <span className="font-semibold">+91 74839 23221</span>
            </p>
            <p className="text-sm font-medium md:text-base">
              VAIBHAV SHETTY :{" "}
              <span className="font-semibold">+91 76192 63170</span>
            </p>
          </div>

          <div>
            <h1 className="pb-2 text-lg font-bold md:text-xl">OR WRITE TO US</h1>
            <a
              href="mailto:synergia@sahyadri.edu.in"
              className="text-base font-semibold underline transition-colors hover:text-gray-300"
            >
              SYNERGIA@SAHYADRI.EDU.IN
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <h1 className="text-lg font-bold md:text-xl">FOLLOW US</h1>
            <div className="flex justify-center gap-3">
              <button
                aria-label="Instagram"
                className="inline-flex items-center justify-center p-2 text-black transition-transform duration-300 ease-in-out transform bg-white rounded-lg w-9 h-9 hover:scale-110 active:scale-95"
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
                aria-label="Meta"
                className="inline-flex items-center justify-center p-2 text-black transition-transform duration-300 ease-in-out transform bg-white rounded-lg w-9 h-9 hover:scale-110 active:scale-95"
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
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center p-2 text-black transition-transform duration-300 ease-in-out transform bg-white rounded-lg w-9 h-9 hover:scale-110 active:scale-95"
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
        </div>
      </motion.div>
    </motion.div>
  );
}
