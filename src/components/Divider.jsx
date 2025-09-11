import React, { Fragment } from "react";
import { motion } from "framer-motion";

export default function Divider({ gradientColors, title }) {
  const [startColor, midColor, endColor] = gradientColors;

  return (
    <motion.div className="flex flex-col items-center mb-10">
      {/* <motion.svg
        viewBox="0 0 213 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-6 w-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient
            id={`dynamicGradient-${title}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: startColor, stopOpacity: 1 }}
            />
            {midColor && (
              <stop
                offset="50%"
                style={{ stopColor: midColor, stopOpacity: 1 }}
              />
            )}
            <stop
              offset="100%"
              style={{ stopColor: endColor, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M104.526 307.139C103.608 297.333 102.185 285.706 101.45 281.223C91.8563 224.488 61.4211 180.291 23.8707 168.524C21.9886 167.963 15.8373 166.422 10.1909 165.232C4.59052 163.971 0 162.78 0 162.5C0 162.29 4.08556 161.239 9.08922 160.119C26.2119 156.406 33.3731 153.675 43.3345 147.161C55.3616 139.246 65.1394 129.089 74.8254 114.24C84.6491 99.181 90.9841 85.1724 96.2172 66.7511C100.67 51.2015 102.46 40.2748 104.939 13.8685C105.628 6.23384 106.362 0 106.5 0C106.638 0 107.51 7.98491 108.474 17.7209C110.769 41.6056 112.835 53.4429 117.288 68.6422C122.337 85.8728 128.764 99.8114 138.175 114.17C147.998 129.159 157.179 138.825 169.252 146.81C179.443 153.605 186.559 156.336 203.957 160.119C208.914 161.239 213 162.29 213 162.5C213 162.78 208.409 163.971 202.809 165.232C190.828 167.823 187.293 168.874 181.05 171.606C154.609 183.303 131.656 212.511 119.17 250.404C113.202 268.545 110.769 281.994 108.061 311.202C107.372 318.766 106.638 325 106.5 325C106.362 325 105.49 316.945 104.526 307.139Z"
          fill={`url(#dynamicGradient-${title})`}
        />
      </motion.svg> */}
      <motion.div
        className="flex flex-row w-full items-center justify-center relative"
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full h-1 bg-clip-border border-0 border-b-2 border-transparent mt-8 rounded-full opacity-70 -z-20"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, ${startColor}, ${
              midColor ? midColor + "," : ""
            } ${endColor}, transparent)`,
          }}
        />
        <motion.div className="absolute mt-8 p-4 flex items-center justify-center">
          {/* <motion.h1
            className="text-2xl md:text-4xl bg-clip-text text-transparent py-3 px-6"
            style={{
              backgroundImage: `linear-gradient(90deg, ${startColor}, ${
                midColor && midColor + ","
              } ${endColor})`,
            }}
          >
            {title}
          </motion.h1> */}
          <div className="bg-black h-1 w-full absolute -z-20" />
          <motion.svg
            viewBox="0 0 213 325"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-8 w-6 z-10"
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
          >
            <defs>
              <linearGradient
                id={`dynamicGradient-${title}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: startColor, stopOpacity: 1 }}
                />
                {midColor && (
                  <stop
                    offset="50%"
                    style={{ stopColor: midColor, stopOpacity: 1 }}
                  />
                )}
                <stop
                  offset="100%"
                  style={{ stopColor: endColor, stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M104.526 307.139C103.608 297.333 102.185 285.706 101.45 281.223C91.8563 224.488 61.4211 180.291 23.8707 168.524C21.9886 167.963 15.8373 166.422 10.1909 165.232C4.59052 163.971 0 162.78 0 162.5C0 162.29 4.08556 161.239 9.08922 160.119C26.2119 156.406 33.3731 153.675 43.3345 147.161C55.3616 139.246 65.1394 129.089 74.8254 114.24C84.6491 99.181 90.9841 85.1724 96.2172 66.7511C100.67 51.2015 102.46 40.2748 104.939 13.8685C105.628 6.23384 106.362 0 106.5 0C106.638 0 107.51 7.98491 108.474 17.7209C110.769 41.6056 112.835 53.4429 117.288 68.6422C122.337 85.8728 128.764 99.8114 138.175 114.17C147.998 129.159 157.179 138.825 169.252 146.81C179.443 153.605 186.559 156.336 203.957 160.119C208.914 161.239 213 162.29 213 162.5C213 162.78 208.409 163.971 202.809 165.232C190.828 167.823 187.293 168.874 181.05 171.606C154.609 183.303 131.656 212.511 119.17 250.404C113.202 268.545 110.769 281.994 108.061 311.202C107.372 318.766 106.638 325 106.5 325C106.362 325 105.49 316.945 104.526 307.139Z"
              fill={`url(#dynamicGradient-${title})`}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
