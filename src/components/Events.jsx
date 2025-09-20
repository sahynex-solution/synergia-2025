import { Fragment } from "react";
import EventSection from "./EventSection";

import SSTHLogo from "./Logos/SSTHLogo";
import DevhostLogo from "./Logos/DevhostLogo";
import SRCLogo from "./Logos/SRCLogo";
import AerophiliaLogo from "./Logos/AerophiliaLogo";
import SSTHBlob from "./Blobs/SSTHBlob";
import DevhostBlob from "./Blobs/DevhostBlob";
import SRCBlob from "./Blobs/SRCBlob";
import AerophiliaBlob from "./Blobs/AerophiliaBlob";

export default function Events({ refTag }) {
  const events = [
    {
      title: "SSTH",
      gradientColors: ["#ef32d9", "", "#89fffd"],
      Logo: SSTHLogo,
      Blob: SSTHBlob,
      heading: "Innovate Today. Lead the future.",
      description:
        "A tech-innovation nexus where young visionaries explore and devise solutions.",
      link: "https://ssth.in",
      reverse: false,
    },
    {
      title: "DEVHOST",
      gradientColors: ["#FDFC47", "", "#24fe41"],
      Logo: DevhostLogo,
      Blob: DevhostBlob,
      heading: "Expertise Redefined, Experience Reimagined.",
      description:
        "A flagship tech fest with a 36-hour hackathon, expert-led workshops, dev talks, and exciting tech & non-tech battles.",
      link: "https://devhost.sosc.org.in",
      reverse: true,
    },
    {
      title: "SRC",
      gradientColors: ["#833ab4", "#fd1d1d", "#fcb045"],
      Logo: SRCLogo,
      Blob: SRCBlob,
      heading: "Build. Innovate. Compete.",
      description: "Where innovation meets automation",
      link: "https://src.sahyadri.edu.in/",
      reverse: false,
    },
    {
      title: "Aerophilia",
      gradientColors: ["#00c6ff", "#0072ff", "#f8310e"],
      Logo: AerophiliaLogo,
      Blob: AerophiliaBlob,
      heading: "The sky is not the limit.",
      description: "Celebrating aviation innovation and drone technology.",
      link: "https://aerophilia.in",
      reverse: true,
    },
  ];

  return (
    <Fragment>
      {events.map((event, i) => (
        <EventSection key={i} {...event} refTag={i === 0 ? refTag : null} />
      ))}
    </Fragment>
  );
}
