import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Title from "./Title";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const HorizontalScroll = ({ children, reverse }) => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [scrollStarted, setScrollStarted] = useState(false);

  const startScroll = useCallback(() => {
    if (containerWidth > viewportWidth && !scrollStarted) {
      controls.start({
        x: [
          reverse ? -(containerWidth - viewportWidth) : 0,
          reverse ? 0 : -(containerWidth - viewportWidth),
        ],
        transition: {
          duration: 120,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
      setScrollStarted(true);
    }
  }, [containerWidth, viewportWidth, reverse, scrollStarted, controls]);

  const updateDimensions = useCallback(
    debounce(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
        setViewportWidth(window.innerWidth);
        setScrollStarted(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    startScroll();
  }, [containerWidth, viewportWidth, startScroll]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex flex-row gap-4 px-2"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Gallery({ refTag }) {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);

  useEffect(() => {
    const images1 = import.meta.glob(
      "../assets/Synergia2023/H1/*.{jpg,jpeg,png,gif}"
    );

    Promise.all(
      Object.keys(images1).map((key) =>
        images1[key]().then((module) => module.default)
      )
    ).then((loadedImages) => {
      setImages1(loadedImages);
    });

    const images2 = import.meta.glob(
      "../assets/Synergia2023/H2/*.{jpg,jpeg,png,gif}"
    );

    Promise.all(
      Object.keys(images2).map((key) =>
        images2[key]().then((module) => module.default)
      )
    ).then((loadedImages) => {
      setImages2(loadedImages);
    });

    const images3 = import.meta.glob(
      "../assets/Synergia2023/H3/*.{jpg,jpeg,png,gif}"
    );

    Promise.all(
      Object.keys(images3).map((key) =>
        images3[key]().then((module) => module.default)
      )
    ).then((loadedImages) => {
      setImages3(loadedImages);
    });
  }, []);

  return (
    <div ref={refTag} className="pt-16">
      <Title title={"Gallery"} />
      <div className="relative flex flex-col gap-4 px-6 py-2">
        <div className="absolute top-0 left-0 z-10 w-10 h-full bg-gradient-to-r from-black via-black to-transparent" />
        <div className="absolute top-0 right-0 z-10 w-10 h-full bg-gradient-to-l from-black via-black to-transparent" />
        <HorizontalScroll>
          {images1.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Image1-${index}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>
        <HorizontalScroll reverse={true}>
          {images2.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Image2-${index}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>
        <HorizontalScroll>
          {images3.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Image3-${index}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}
