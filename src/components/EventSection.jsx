import { motion } from "framer-motion";
import Divider from "./Divider";

function EventSection({
  gradientColors,
  title,
  Logo,
  Blob,
  heading,
  description,
  link,
  reverse = false,
}) {
  return (
    <motion.div className="flex flex-col justify-center w-full min-h-screen px-4 py-16 md:px-14 lg:px-44">
      <Divider gradientColors={gradientColors} title={title} />
      <Logo />

      <div
        className={`flex items-center justify-end ${
          reverse ? "flex-col-reverse md:flex-row" : "flex-col md:flex-row"
        }`}
      >
        {!reverse && (
          <div className="flex items-center justify-between w-4/5 max-w-md pb-12">
            <Blob />
          </div>
        )}

        <motion.div
          className={`flex flex-col items-center w-full text-center ${
            reverse
              ? "md:items-start md:text-start"
              : "md:items-end md:text-end"
          }`}
        >
          {/* <motion.h1
            className="w-4/5 max-w-3xl text-3xl font-normal md:text-5xl mix-blend-difference"
            style={{ lineHeight: 1.2 }}
          >
            {heading}
          </motion.h1>
          */}

          <motion.h1
            className="w-4/5 max-w-3xl text-3xl font-normal md:text-5xl mix-blend-difference"
            style={{ lineHeight: 1.2 }}
          >
            {Array.isArray(heading) ? (
              heading.map((line, idx) => <p key={idx}>{line}</p>)
            ) : (
              <p>{heading}</p>
            )}
          </motion.h1>

          <motion.p className="w-4/5 max-w-xl py-6 text-lg font-light md:text-2xl text-zinc-300">
            {description}
          </motion.p>
          {link && (
            <div>
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 ease-in-out transform bg-white rounded-full hover:scale-105 active:scale-95"
                onClick={() =>
                  window.open(link, "_blank", "noopener,noreferrer")
                }
              >
                View More
              </button>
            </div>
          )}
        </motion.div>

        {reverse && (
          <div className="flex items-center justify-between w-4/5 max-w-md pb-12">
            <Blob />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default EventSection;
