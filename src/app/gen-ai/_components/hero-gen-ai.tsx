"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

export default function HeroGenAI() {
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
    <div className="relative flex justify-center items-center min-h-screen pt-[50px] md:pt-[60px] bg-no-repeat bg-cover">
      <Image
        src="/banner/gen-ai.png"
        alt="GenAI Banner"
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
        quality={100}
        priority
      />
      <div className="main-container w-full relative">
        <div className="flex items-center">
          <div ref={boxRef} className="text-left">
            <h1 className="text-[21px] lg:text-[30px] text-white">
              GenAI Media
            </h1>
            <div className="text-[14px] xl:text-base max-w-[400px] mt-[20px] text-white">
              We help organizations, educators, and consultants adopt AI, build
              revenue, and drive demand.
            </div>
            <button className="mt-[30px] rounded-md flex gap-2 items-center text-black bg-white px-[30px] py-[10px]">
              <div>Talk To Us </div>
              <FaChevronCircleRight color="#18368F" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
