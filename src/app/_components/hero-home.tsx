"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

export default function HeroHome() {
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
    <div className="flex justify-center pt-[50px] md:pt-[60px] min-h-[100vh] ">
      <div className="main-container w-[100%]">
        <video
          className="absolute top-0 z-[-10] left-0 w-full h-full object-cover"
          src="/video/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="flex items-center h-[100%] z-">
          <div ref={boxRef}>
            <h1 className="text-[21px] lg:text-[30px]  text-white">
              Discover what AI can do for you
            </h1>
            <div className="text-[13px] mt-[20px] text-white">
              We help organizations, educators, and consultants adopt AI, build
              revenue, and drive demand.
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
