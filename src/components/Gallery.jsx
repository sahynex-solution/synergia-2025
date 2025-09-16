import { useEffect, useState } from "react";
import Title from "./Title";

function HorizontalScroll({ children, reverse }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex gap-4 px-2 animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
}

export default function Gallery({ refTag }) {
  const [images, setImages] = useState({ row1: [], row2: [], row3: [] });

  useEffect(() => {
    const loaders = [
      import.meta.glob("../assets/Synergia2024/H1/*.{jpg,jpeg,png,gif,webp}"),
      import.meta.glob("../assets/Synergia2024/H2/*.{jpg,jpeg,png,gif,webp}"),
      import.meta.glob("../assets/Synergia2024/H3/*.{jpg,jpeg,png,gif,webp}"),
    ];

    Promise.all(
      loaders.map((group) =>
        Promise.all(Object.keys(group).map((key) => group[key]().then((m) => m.default)))
      )
    ).then(([row1, row2, row3]) => {
      setImages({ row1, row2, row3 });
    });
  }, []);

  return (
    <div ref={refTag} className="pt-16">
      <Title title="Gallery" />
      <div className="relative flex flex-col gap-6 px-6 py-2">
        {/* Gradient edges */}
        <div className="absolute top-0 left-0 z-10 w-10 h-full bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 right-0 z-10 w-10 h-full bg-gradient-to-l from-black to-transparent" />

        {/* Row 1 */}
        <HorizontalScroll>
          {images.row1.map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              alt={`Gallery1-${i}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>

        {/* Row 2 (reverse) */}
        <HorizontalScroll reverse>
          {images.row2.map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              alt={`Gallery2-${i}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>

        {/* Row 3 */}
        <HorizontalScroll>
          {images.row3.map((src, i) => (
            <img
              key={`row3-${i}`}
              src={src}
              alt={`Gallery3-${i}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}
