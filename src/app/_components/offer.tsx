"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { offer } from "../constant";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollTrigger);

export default function Offer() {
  const containerRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null | undefined)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const items = itemsRef.current;

    // GSAP Animation
    items.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { opacity: 100, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              if (self.progress > 0.5) {
                setActiveIndex(index);
              }
            },
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="relative bg-slate my-[50px] flex justify-center border-t-[2px] border-b-[2px] border-[#ABABABA]">
      <div className="w-full main-container">
        <div className="border-l-[2px] border-r-[2px] pb-10 border-[#ABABABA]">
          {/* Sticky Title */}
          <div className="sticky top-0 z-10 bg-white pt-10 pb-5 text-center">
            <div className="text-xl lg:text-3xl">What We Offer</div>
            <div className="text-[#3958e9] mt-2">Our Services</div>
          </div>

          {/* Card Section */}
          <div
            ref={containerRef}
            className="relative flex flex-col items-center gap-10"
          >
            <div className="sticky flex justify-between top-[50%] h-2 left-0 w-full">
              <div>
                {offer.map((item, index) => (
                  <div
                    key={index}
                    className={twMerge(
                      index > 0 && "mt-1",
                      "h-1 w-5 bg-[#3958E9] rounded-r-full",
                      // with animation
                      index === activeIndex &&
                        "w-10 duration-100 transition-all"
                    )}
                  />
                ))}
              </div>
              <div>
                <div className="flex flex-col items-end">
                  {offer.map((item, index) => (
                    <div
                      key={index}
                      className={twMerge(
                        index > 0 && "mt-1",
                        "h-1 w-5 bg-[#3958E9] rounded-l-full",
                        // with animation
                        index === activeIndex &&
                          "w-10 duration-100 transition-all"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            {offer.map((item, index) => (
              <div
                key={index}
                // @ts-ignore
                ref={(el) => (itemsRef.current[index] = el)}
                data-index={index}
                className={`max-w-[1000px] bg-[#F6F6F6] p-[10px] md:p-[50px] w-[70%] rounded-sm md:rounded-[40px] border-[#E9E9E9] border-[1px] shadow-lg transform transition-all `}
              >
                <div className="flex flex-col md:flex-row items-center gap-[44px]">
                  <div className="max-w-[100px] md:max-w-[400px]">
                    <Image
                      src={item.image}
                      alt="sample"
                      width={400}
                      height={400}
                      className="mr-4"
                    />
                  </div>
                  <div>
                    <div className="text-[18px] font-medium">{item.title}</div>
                    <div className="text-sm mt-[20px]">{item.description}</div>
                    <div className="flex justify-end">
                      <button className="mt-[10px] md:mt-[30px] rounded-md text-sm flex items-center text-white bg-[#3958e9] px-[20px]  md:px-[30px] py-[10px]">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Menampilkan card yang paling sering terlihat */}
        </div>
      </div>
    </div>
  );
}
