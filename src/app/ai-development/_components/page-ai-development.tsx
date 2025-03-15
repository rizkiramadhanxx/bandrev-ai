"use client";

import BuildWith from "./build-with";
import CompetitorAIdevelopment from "./competitor-ai-development";
import ConceptAIdevelopment from "./concept-ai-development";
import HeroAIdevelopment from "./hero-ai-development";
import PurposeAIDevelopment from "./purpose-ai-development";

export default function PageAIDevelopment() {
  return (
    <>
      <HeroAIdevelopment />
      <BuildWith />
      <PurposeAIDevelopment />
      <ConceptAIdevelopment />
      <CompetitorAIdevelopment />
    </>
  );
}
