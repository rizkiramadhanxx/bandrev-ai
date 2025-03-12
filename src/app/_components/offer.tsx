"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { offer } from "../constant";

gsap.registerPlugin(ScrollTrigger);

export default function Offer() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;

    gsap.fromTo(
      items,
      { y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.3, // Muncul berurutan
        duration: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1, // Animasi mengikuti scroll
        },
      }
    );
  }, []);

  return (
    <div className="relative bg-slate py-[100px] flex justify-center">
      <div className="w-full main-container">
        {/* Sticky Title */}
        <div className="sticky top-0  z-10 bg-white py-5 text-center">
          <div className="text-xl lg:text-3xl">What We Offer</div>
          <div className="text-[#3958e9] mt-2">Our Services</div>
        </div>

        {/* Card Section */}
        <div
          ref={containerRef}
          className="relative flex flex-col items-center gap-10"
        >
          {offer.map((item, index) => (
            <div
              key={index}
              // @ts-ignore
              ref={(el) => (itemsRef.current[index] = el)}
              className="w-full max-w-[1000px] bg-[#f6f6f6] p-[90px] rounded-[40px] shadow-lg transform transition-all duration-700 opacity-0 scale-90"
            >
              <div className="flex flex-col md:flex-row items-center gap-[44px]">
                <Image
                  src={item.image}
                  alt="sample"
                  width={400}
                  height={400}
                  className="mr-4"
                />
                <div>
                  <div className="text-xl font-medium">{item.title}</div>
                  <div className="text-sm mt-[20px]">{item.description}</div>
                  <button className="mt-[30px] rounded-md flex items-center text-white bg-[#3958e9] px-[30px] py-[10px]">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
