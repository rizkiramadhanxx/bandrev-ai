"use client";

/* eslint-disable @next/next/no-img-element */
import { Dialog } from "@headlessui/react";

import { useCallback, useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import CardPromo from "@/app/promo/_components/card-promo";
import useEmblaCarousel from "embla-carousel-react";
import Navbar from "./navbar-promo";
import HeroHome from "./hero-home";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Footer from "./footer";

const images = ["/sample/card.jpg", "/sample/5.jpg", "/sample/6.jpg"];
export default function PageHome() {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="px-4" key={index}>
            <Image
              src="/redis.svg"
              alt="sample"
              width={200}
              height={200}
              className="mr-4"
            />
          </div>
        ))}
      </Marquee>

      <div className="flex py-[100px] justify-center bg-slate">
        <div className="main-container w-[100%]">
          <div className="text-xl lg:text-3xl text-center">What We Offer</div>
          <div className="text-[#3958e9] text-center mt-5">Our Services</div>
          <div className="flex flex-col items-center gap-5 mt-[50px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between flex-col md:flex-row rounded-[40px] gap-[44px] max-w-[1000px] bg-[#f6f6f6] p-[90px]"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src="/redis.svg"
                    alt="sample"
                    width={400}
                    height={400}
                    className="mr-4"
                  />
                </div>
                <div>
                  <div className="text-xl font-medium">Demand Generation</div>
                  <div className="text-sm mt-[20px]">
                    Utilize our AI Tuning engine to create predictable sales &
                    marketing workflows that create new opportunities, boost
                    demand & secure B2B meetings
                  </div>
                  <button className="mt-[30px] rounded-md flex items-center text-white bg-[#3958e9] px-[30px] py-[10px]">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex py-[100px] justify-center bg-slate">
        <div className="main-container w-[100%]">
          <div className="text-xl lg:text-3xl text-center">
            Enabling Businesses with AI
          </div>
          <div className="flex flex-col lg:flex-row items-center  gap-5 mt-[50px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between flex-col rounded-[40px] gap-[44px] max-w-[1000px] bg-[#f6f6f6] py-[60px] px-[20px]"
              >
                <div className="flex items-center  justify-center">
                  <Image
                    src="/redis.svg"
                    alt="sample"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <div className="text-base font-medium text-center">
                    Demand Generation
                  </div>
                  <div className="text-sm mt-[20px] text-center">
                    Utilize our AI Tuning engine to create predictable sales &
                    marketing workflows that create new opportunities, boost
                    demand & secure B2B meetings
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
