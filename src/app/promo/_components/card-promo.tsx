"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function CardPromo({ src }: { src: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={twMerge(
        "relative w-full h-full  flex items-center justify-center",
        !loading && "border border-[#2e6643]"
      )}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center h-full justify-center bg-[#2e6643]" />
      )}
      <Image
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className={`w-full h-auto ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        alt="card"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
