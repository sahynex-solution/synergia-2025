import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        DAYS: days,
        HOURS: hours,
        MINUTES: minutes,
        SECONDS: seconds,
      });
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};

export default function Countdown() {
  const targetDate = new Date("2024-11-07T08:30:00");
  const timeLeft = useCountdown(targetDate);

  const animateVariants = {
    initial: { y: -70 },
    animate: { y: 0 },
    exit: { y: 70 },
  };

  return (
    <div className="absolute text-2xl md:text-5xl font-semibold text-zinc-300 flex gap-5 font-mono w-4/5 max-w-xl overflow-hidden justify-between bottom-16 z-10">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-20 flex items-center justif relative overflow-hidden">
            {/* <div className="absolute top-0 bg-gradient-to-b w-full h-5 from-black to-transparent z-10" /> */}
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                className="overflow-hidden h-14 w-full flex justify-center items-center relative"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animateVariants}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                {String(value).padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
            {/* <div className="absolute bottom-0 bg-gradient-to-t w-full h-5 from-black to-transparent z-10" /> */}
          </div>
          <span className="md:text-base text-sm -mt-3 md:mt-0 z-20 font-bold">{unit}</span>
        </motion.div>
      ))}
    </div>
  );
}
