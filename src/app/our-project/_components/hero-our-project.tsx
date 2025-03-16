"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaChevronCircleRight } from "react-icons/fa";

export default function HeroOurProject() {
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
    <div className="flex justify-center bg-no-repeat pt-[50px] md:pt-[60px] items-center bg-cover min-h-[100vh] bg-[url(/banner/our-project.png)]">
      <div className="main-container w-[100%]">
        <div className="flex items-center">
          <div ref={boxRef}>
            <h1 className="text-[21px] lg:text-[30px]  text-white">Project</h1>
            <div className="text-[13px] max-w-[400px] mt-[20px] text-white">
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
