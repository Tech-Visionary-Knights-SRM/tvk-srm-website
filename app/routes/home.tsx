import type { Route } from "./+types/home";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Identity } from "../components/landing/Identity";
import { EntryFunnel } from "../components/landing/EntryFunnel";
import { Tracks } from "../components/landing/Tracks";
import { TierSystem } from "../components/landing/TierSystem";
import { ScoringSystem } from "../components/landing/ScoringSystem";
import { WorkSystem } from "../components/landing/WorkSystem";
import { Culture } from "../components/landing/Culture";
import { Financials } from "../components/landing/Financials";
import { Incentives } from "../components/landing/Incentives";
import { Outcomes } from "../components/landing/Outcomes";
import { CTA } from "../components/landing/CTA";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "XXX — Build. Ship. Lead. | SRM IST" },
    {
      name: "description",
      content:
        "An execution-driven talent forge at SRM Institute of Science and Technology. Not a club — a system that identifies, stress-tests, and upgrades the top 1% of student builders.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <EntryFunnel />
        <Tracks />
        <TierSystem />
        <ScoringSystem />
        <WorkSystem />
        <Culture />
        <Financials />
        <Incentives />
        <Outcomes />
        <CTA />
      </main>
    </>
  );
}
