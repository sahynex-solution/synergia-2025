import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function EntryStrings() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const pathLength = useTransform(
    scrollYProgress,
    [0.05, 0.167, 0.329, 0.571, 0.704, 1],
    [0, 0.2, 0.4, 0.65, 0.8, 1]
  );

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full top-0 overflow-hidden -z-10 items-center justify-center lg:flex hidden"
    >
      <motion.svg
        width="1536"
        height="8860"
        viewBox="0 -100 1536 7860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <motion.path
          d="M1873.5 22.5C1621.5 1299 95.4992 789 -127 1129.5C-261.001 1380 -147.501 1539 127 1500C444.623 1454.87 854.5 1355 1376 1599.5C1732 1789 1943.9 2166.67 1575 2258.5C1229.5 2344.5 1247 2004.5 603.499 2036.5C-92.5011 2104.5 -220.501 2410.5 -211.501 2574.5C-198.749 2806.87 -86.3773 3009.2 107.499 3027.5C483.499 3063 1214.8 2640.15 1676 3048.5C1868 3218.5 1360 3165 1255.5 3330.5C1121.01 3543.49 1778.05 3473.14 1770 3678C1748 4237.5 -74.9487 3660 -277.999 4304C-496.499 4997 601.148 5136.02 1514.5 4904C1918 4801.5 1912.32 5338 1774 5637.5C1474.5 6286 834.998 5899 195.998 5996.5C-303.553 6072.72 -407.002 6449 -407.002 6976C-407.002 7300.5 -331.502 7605.5 -78.5017 7730.5C210.651 7873.36 564.366 7801.72 767.998 7792.5C1202.5 7772.82 925.998 8153.5 730.998 8272"
          stroke="url(#paint0_linear_107_64)"
          strokeWidth="35"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        <defs>
          <linearGradient
            id="paint0_linear_107_64"
            x1="1236.11"
            y1="156.793"
            x2="721.39"
            y2="8154.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53C373" />
            <stop offset="0.128519" stopColor="#69C067" />
            <stop offset="0.183825" stopColor="#F1B01B" />
            <stop offset="0.241436" stopColor="#F1A71C" />
            <stop offset="0.31335" stopColor="#EF5A24" />
            <stop offset="0.372597" stopColor="#EF32D9" />
            <stop offset="0.443822" stopColor="#E546DC" />
            <stop offset="0.483851" stopColor="#89FFFD" />
            <stop offset="0.503523" stopColor="#2CFE50" />
            <stop offset="0.578724" stopColor="#24FE41" />
            <stop offset="0.610434" stopColor="#FDFC47" />
            <stop offset="0.701509" stopColor="#FF1F00" />
            <stop offset="0.756769" stopColor="#CC01FF" />
            <stop offset="0.935301" stopColor="#BC05FF" />
            <stop offset="0.987715" stopColor="#0030FF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
