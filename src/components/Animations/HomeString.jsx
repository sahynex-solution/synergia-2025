import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomeString() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div className="absolute w-full h-full top-0 justify-center items-center overflow-hidden lg:flex hidden" ref={containerRef}>
      <motion.svg
        width="1100"
        height="784"
        viewBox="0 -100 1100 784"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <motion.path
          d="M493.733 275.754C393.263 405.225 -76.4407 595.875 -437.5 356.5"
          stroke="url(#paint0_linear_96_38)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M512.665 231.5C494.165 68.6666 603.5 -50.5 737 -183.5"
          stroke="url(#paint1_linear_96_38)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M545.677 238.908C660.617 122.094 973.133 -41.5324 1403.68 238.478"
          stroke="url(#paint2_linear_96_38)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M486.428 253.626C323.246 268.744 -21.1062 192.185 -93.0603 -235"
          stroke="url(#paint3_linear_96_38)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M523.449 291.347C562.979 450.389 469 620.5 331.5 719"
          stroke="url(#paint4_linear_96_38)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M549.029 280.384C800.5 345.5 874 534.5 861.5 736"
          stroke="url(#paint5_linear_96_38)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d="M552.726 262.393C712.83 227.411 1186.79 283.837 1310.5 699"
          stroke="url(#paint6_linear_96_38)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_96_38"
            x1="324.153"
            y1="110.308"
            x2="-87.5126"
            y2="532.258"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF1F00" />
            <stop offset="1" stopColor="#CC01FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_96_38"
            x1="749.583"
            y1="231.5"
            x2="749.583"
            y2="-358"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53C373" />
            <stop offset="1" stopColor="#F1B01B" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_96_38"
            x1="773.124"
            y1="51.4183"
            x2="1074.55"
            y2="423.897"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F1B01B" />
            <stop offset="1" stopColor="#EF5A24" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_96_38"
            x1="491.225"
            y1="22.451"
            x2="-97.8385"
            y2="24.1626"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CC01FF" />
            <stop offset="1" stopColor="#0030FF" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_96_38"
            x1="288.546"
            y1="322.173"
            x2="365.248"
            y2="906.662"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0090D5" />
            <stop offset="1" stopColor="#FF1F00" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_96_38"
            x1="813.874"
            y1="409.774"
            x2="599.654"
            y2="838.387"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5555C6" />
            <stop offset="1" stopColor="#0090D5" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_96_38"
            x1="863.246"
            y1="227.935"
            x2="1032.9"
            y2="512.184"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EF5A24" />
            <stop offset="1" stopColor="#5555C6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
