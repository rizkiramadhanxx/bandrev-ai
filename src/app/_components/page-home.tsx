"use client";

/* eslint-disable @next/next/no-img-element */
import { Dialog } from "@headlessui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useEmblaCarousel from "embla-carousel-react";
import gsap from "gsap";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import { enable, images, offer } from "../constant";
import Contact from "./contact";
import Footer from "./footer";
import HeroHome from "./hero-home";
import Navbar from "./navbar";
import Offer from "./offer";

export default function PageHome() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".fade-up").forEach((el) => {
      // @ts-ignore
      return gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  // Start : embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoplayInterval = useRef(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay(); // Clear any existing interval
    // @ts-ignore
    autoplayInterval.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 7000); // Change slides every 7 seconds
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
  }, []);

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();
      emblaApi.on("pointerDown", stopAutoplay); // Pause on user interaction
    }
    return () => stopAutoplay(); // Cleanup on unmount
  }, [emblaApi, startAutoplay, stopAutoplay]);

  // end : embla

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      openImage(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      openImage(currentIndex - 1);
    }
  };

  return (
    <>
      <Dialog
        transition
        open={!!selectedImage}
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
        onClose={() => setSelectedImage(null)}
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="relative bg-white p-2 md:p-4 rounded-lg max-w-lg w-full">
            <button
              className="absolute z-10 top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedImage(null)}
            >
              <BsX color="black" size={24} />
            </button>
            <div className="relative flex items-center">
              <button
                className="absolute left-0 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                onClick={prevImage}
                disabled={currentIndex === 0}
              >
                <BiChevronLeft size={24} />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Detail"
                  className="w-full rounded-lg"
                />
              )}
              <button
                className="absolute right-0 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                onClick={nextImage}
                disabled={currentIndex === images.length - 1}
              >
                <BiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      <Navbar />
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
                className="flex fade-up cursor-pointer hover:bg-[#18368f] hover:text-white justify-between flex-col rounded-[40px] gap-[44px] max-w-[1000px] bg-[#f6f6f6] py-[60px] px-[20px] transition-all duration-300 ease-in-out"
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

      <Footer />
    </>
  );
}
