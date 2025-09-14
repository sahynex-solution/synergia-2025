import { useEffect, useState } from "react";
import Title from "./Title";

function HorizontalScroll({ children, reverse }) {
  return (
    <div className="w-full overflow-hidden relative">
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
        Promise.all(
          Object.keys(group).map((key) =>
            group[key]().then((m) => m.default)
          )
        )
      )
    ).then(([row1, row2, row3]) => {
      setImages({ row1, row2, row3 });
    });
  }, []);

  return (
    <div ref={refTag} className="pt-16">
      <Title title="Gallery" />
      <div className="py-2 px-6 flex flex-col gap-6 relative">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />

        <HorizontalScroll>
          {images.row1.map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              alt={`Gallery1-${i}`}
              className="w-96 md:h-56 h-36 rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>

        <HorizontalScroll reverse>
          {images.row2.map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              alt={`Gallery2-${i}`}
              className="w-96 md:h-56 h-36 rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>

        <HorizontalScroll>
          {images.row3.map((src, i) => (
            <img
              key={`row3-${i}`}
              src={src}
              alt={`Gallery3-${i}`}
              className="w-96 md:h-56 h-36 rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}
