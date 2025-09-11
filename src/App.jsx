import React, { Fragment, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import Logo from "./components/Logo";
import Scroller from "./components/Scroller";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import EntryCard from "./components/EntryCard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import EntryStrings from "./components/Animations/EntryStrings";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  return (
    <Fragment>
      <main>
        <Navbar opacity={opacity} refs={refs}/>
        <motion.div
          className="h-screen relative flex justify-center items-center -z-50 overflow-hidden"
          ref={containerRef}
        >
          {/* <LargeHeader /> */}
          <Logo containerRef={containerRef} />
          <Countdown />
          <div className="absolute bottom-0 h-56 w-full bg-gradient-to-t from-black to-transparent" />
        </motion.div>
        <div className="relative overflow-y-visible">
          <EntryStrings />
          <EntryCard />
          <motion.div
            className="w-full md:px-14 lg:px-44 px-4 pt-32 min-h-screen"
            ref={refs[0]}
          >
            <About />
          </motion.div>
          <Events refTag={refs[1]} />
          <Gallery refTag={refs[2]} />
          <Scroller />
        </div>
      </main>
      <Footer refTag={refs[3]} />
    </Fragment>
  );
}
