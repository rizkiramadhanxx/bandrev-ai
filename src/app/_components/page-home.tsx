"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { enable } from "../constant";
import Contact from "./contact";
import Footer from "./footer";
import HeroHome from "./hero-home";
import Navbar from "./navbar";
import Offer from "./offer";

export default function PageHome() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".fade-up").forEach((el) => {
      // @ts-ignore
      return gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <>
      <HeroHome />
      {/* Marque  */}

      <Marquee className="mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4].map((i, index) => (
          <div className="px-4" key={index}>
            <Image
              src={`/brand/blue-${i}.png`}
              alt="sample"
              width={100}
              height={100}
              className="mr-4"
            />
          </div>
        ))}
      </Marquee>

      <Offer />

      <div className="flex py-[100px] justify-center bg-slate">
        <div className="main-container w-[100%]">
          <div className="text-xl lg:text-3xl text-center">
            Enabling Businesses with AI
          </div>
          <div className="flex flex-col lg:flex-row items-center  gap-5 mt-[50px]">
            {enable.map((item, index) => (
              <div
                key={index}
                className="flex fade-up cursor-pointer shadow-md hover:bg-[#18368f] hover:text-white justify-between flex-col rounded-[40px] gap-[44px] max-w-[1000px] bg-[#f5f0f0] py-[60px] px-[20px] transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="sample"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <div className="text-base font-medium text-center">
                    {item.title}
                  </div>
                  <div className="text-sm mt-[20px] text-center">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
