"use client";

/* eslint-disable @next/next/no-img-element */
import { Dialog } from "@headlessui/react";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import CardPromo from "./card-promo";
import Navbar from "@/app/_components/navbar-promo";
import HeroHome from "@/app/_components/hero-home";

const images = ["/sample/card.jpg", "/sample/5.jpg", "/sample/6.jpg"];
export default function PagePromo() {
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
      <div className="mt-[50px] md:mt-[80px]" />
      <div className="flex justify-center bg-slate">
        <div className="main-container w-[100%]">
          <div className="mt-4">
            <div className="text-2xl font-bold text-[#2e6643]">
              Promo saat ini :
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-4 mb-4">
              {images.map((_, index) => (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedImage(images[index]);
                    setCurrentIndex(index);
                  }}
                  key={index}
                >
                  <CardPromo src={images[index]} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <div className="text-2xl font-bold text-[#2e6643]">
              Promo yang akan datang :
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-4 mb-4">
              {images.map((_, index) => (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedImage(images[index]);
                    setCurrentIndex(index);
                  }}
                  key={index}
                >
                  <CardPromo src={images[index]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
