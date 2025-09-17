import { Fragment, useRef } from "react";
import Navbar from "./components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
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
        <Navbar opacity={opacity} refs={refs} />
        <motion.div
          className="relative flex items-center justify-center h-screen overflow-hidden -z-50"
          ref={containerRef}
        >
          {/* <LargeHeader /> */}
          <Logo containerRef={containerRef} />
          <Countdown />
          <div className="absolute bottom-0 w-full h-56 bg-gradient-to-t from-black to-transparent" />
        </motion.div>
        <div className="relative overflow-y-visible">
          <EntryStrings />
          <EntryCard />
          <motion.div
            className="w-full min-h-screen px-4 pt-32 md:px-14 lg:px-44"
            ref={refs[0]}
          >
            <About />
          </motion.div>

          <div ref={refs[1]}>
            <Events />
          </div>

          {/*<Events refTag={refs[1]} />*/}
          <Gallery refTag={refs[2]} />
          <Scroller />
        </div>
      </main>
      <Footer refTag={refs[3]} />
    </Fragment>
  );
}
