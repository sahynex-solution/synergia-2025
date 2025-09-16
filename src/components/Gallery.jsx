import { useEffect, useState } from "react";
import Title from "./Title";

function HorizontalScroll({ children, reverse }) {
  return (
<<<<<<< HEAD
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex flex-row gap-4 px-2"
        animate={controls}
=======
    <div className="w-full overflow-hidden relative">
      <div
        className={`flex gap-4 px-2 animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
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
<<<<<<< HEAD
      <Title title={"Gallery"} />
      <div className="relative flex flex-col gap-4 px-6 py-2">
        <div className="absolute top-0 left-0 z-10 w-10 h-full bg-gradient-to-r from-black via-black to-transparent" />
        <div className="absolute top-0 right-0 z-10 w-10 h-full bg-gradient-to-l from-black via-black to-transparent" />
=======
      <Title title="Gallery" />
      <div className="py-2 px-6 flex flex-col gap-6 relative">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />

>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
        <HorizontalScroll>
          {images.row1.map((src, i) => (
            <img
<<<<<<< HEAD
              key={index}
              src={imageSrc}
              alt={`Image1-${index}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
=======
              key={`row1-${i}`}
              src={src}
              alt={`Gallery1-${i}`}
              className="w-96 md:h-56 h-36 rounded-lg object-cover"
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
              loading="lazy"
            />
          ))}
        </HorizontalScroll>

        <HorizontalScroll reverse>
          {images.row2.map((src, i) => (
            <img
<<<<<<< HEAD
              key={index}
              src={imageSrc}
              alt={`Image2-${index}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
=======
              key={`row2-${i}`}
              src={src}
              alt={`Gallery2-${i}`}
              className="w-96 md:h-56 h-36 rounded-lg object-cover"
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
              loading="lazy"
            />
          ))}
        </HorizontalScroll>

        <HorizontalScroll>
          {images.row3.map((src, i) => (
            <img
<<<<<<< HEAD
              key={index}
              src={imageSrc}
              alt={`Image3-${index}`}
              className="object-cover rounded-lg w-96 md:h-56 h-36"
=======
              key={`row3-${i}`}
              src={src}
              alt={`Gallery3-${i}`}
              className="w-96 md:h-56 h-36 rounded-lg object-cover"
>>>>>>> 691a91fa4411725c7ead3bd4ff32ed2099f953f6
              loading="lazy"
            />
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}
