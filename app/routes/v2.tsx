import { ForSRM } from "../components/landing-v2/ForSRM";
import { Hero } from "../components/landing-v2/Hero";
import { HowWeWork } from "../components/landing-v2/HowWeWork";
import { JoinUs } from "../components/landing-v2/JoinUs";
import { Mission } from "../components/landing-v2/Mission";
import { Navbar } from "../components/landing-v2/Navbar";
import { Problem } from "../components/landing-v2/Problem";
import { Tracks } from "../components/landing-v2/Tracks";
import { WhatWeDo } from "../components/landing-v2/WhatWeDo";
import { WhoWeSeek } from "../components/landing-v2/WhoWeSeek";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Tech Visionary Knights SRM (V2) — Preparing for the AI Era | SRM IST",
    },
    {
      name: "description",
      content:
        "TEVIK SRM researches how AI is reshaping careers, identifies the skills that will matter most, and builds curricula to prepare students — before they graduate.",
    },
  ];
}

export default function V2() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Mission />
        <WhatWeDo />
        <ForSRM />
        <Tracks />
        <HowWeWork />
        <WhoWeSeek />
        <JoinUs />
      </main>
    </>
  );
}
