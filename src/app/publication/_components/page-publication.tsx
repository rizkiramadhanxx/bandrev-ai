"use client";

import BookPublication from "./book-publication";
import HeroPublication from "./hero-publication";
import UnlockPublication from "./unlock-publication";

export default function PagePublication() {
  return (
    <>
      <HeroPublication />
      <UnlockPublication />
      <BookPublication />
    </>
  );
}
