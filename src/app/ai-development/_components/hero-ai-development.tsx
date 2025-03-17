"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

export default function HeroAIdevelopment() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="flex justify-center bg-no-repeat pt-[50px] md:pt-[60px] items-center bg-cover min-h-[100vh]">
      <Image
        src="/banner/banner-ai-development.png"
        alt="AI Banner"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
        quality={100}
        priority
      />
      <div className="main-container w-[100%]">
        <div className="flex items-center">
          <div ref={boxRef}>
            <h1 className="text-[21px] lg:text-[30px] text-white">
              AI Development
            </h1>
            <div className="text-[14px] xl:text-base max-w-[400px] mt-[20px] text-white">
              Build a cost effective GenAI solution now to boost efficiency,
              reduce costs, and secure your competitive edge before it s too
              late.
            </div>
            <button className="mt-[30px] rounded-md flex gap-2  items-center text-black bg-white px-[30px] py-[10px]">
              <div>Talk To Us </div>
              <FaChevronCircleRight color="#18368F" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
