"use client";

import useWindow from "@/hooks/useWindow";
import { cn } from "@/utils/cn";
import { Tab, TabPanels, TabGroup, TabList } from "@headlessui/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { accordionItems } from "../constants";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  id: string;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  id,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
        });
      } else {
        gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3 });
      }
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={onClick}
        className="w-full xl:w-[50%] flex justify-between items-center py-4 transition"
      >
        <div className="flex items-center justify-start gap-2  xl:gap-5 xl:text-[30px] text-[18px] font-bold">
          <div>{id}</div>
          <div>{title}</div>
        </div>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <CiCircleMinus size={25} /> : <CiCirclePlus size={25} />}
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden opacity-0">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export default function PurposeAIDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const { width } = useWindow();

  return (
    <>
      <div className="flex justify-center py-[50px] bg-[#0121A2] ">
        <div className="xl:px-[100px] main-container w-[100%] text-white">
          <div>
            <div className="text-[30px] font-bold">Deploy AI with Purpose</div>
            <div className="text-[15px] mt-[25px] max-w-[600px]">
              Maximize your impact with a Custom GenAI solution designed for
              real results. Explore our use cases to see how AI can
              revolutionize your business and keep you at the forefront of
              innovation
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[50px] bg-[#0121A2] ">
        <div className="xl:px-[100px] border-t-[1px] border-b-[1px] main-container w-[100%] text-white">
          <div className="border-l-[1px] border-r-[1px] py-[80px] px-[10px] xl:px-[20px]">
            {accordionItems.map((item, index) => (
              <Accordion
                id={item.id}
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <Image
                    alt={item.title}
                    src={item.banner}
                    width={700}
                    height={700}
                  />
                  <div className="w-full max-w-2xl mx-auto">
                    <TabGroup
                      selectedIndex={selectedIndex}
                      onChange={setSelectedIndex}
                    >
                      {/* Tabs List */}
                      <TabList className="flex xl:space-x-2 xl:w-[80%] bg-gray-100  rounded-t-lg">
                        {item.tabs.map((tab, index) => (
                          <Tab
                            key={tab.name}
                            className={({ selected }) =>
                              cn(
                                "w-full text-[12px] xl:text-base font-medium rounded-t-lg p-1 xl:p-2 transition",
                                selected
                                  ? "bg-white shadow text-black"
                                  : "text-gray-500 hover:bg-gray-200"
                              )
                            }
                          >
                            {tab.name}
                          </Tab>
                        ))}
                      </TabList>

                      <div
                        className={cn(
                          "relative min-h-[450px] xl:min-h-[350px]",
                          width >= 1024 && {
                            "ml-0": selectedIndex === 0,
                            "ml-4": selectedIndex === 1,
                            "ml-8": selectedIndex === 2,
                          }
                        )}
                      >
                        {item.tabs.map((tab, index) => {
                          const isActive = index === selectedIndex;
                          const isLeft = index < selectedIndex;
                          const isRight = index > selectedIndex;
                          const layer = Math.abs(selectedIndex - index); // Urutan layer

                          return (
                            <div
                              key={tab.name}
                              className={cn(
                                "absolute xl:w-[95%] flex flex-col gap-1 xl:gap-5 h-full transition-all duration-500 rounded-b-lg xl:rounded-tr-lg  shadow-lg p-6 border border-gray-200",
                                tab.color, // Gunakan warna dari data
                                width >= 1024 && {
                                  // Kartu aktif (di tengah)
                                  "z-[41]  translate-x-0": isActive,

                                  // Kartu di kiri (tertumpuk, tetap geser dikit)
                                  "z-40  -translate-x-4 ml-value":
                                    isLeft && layer === 1,
                                  "z-30  -translate-x-8 ml-value":
                                    isLeft && layer === 2,
                                  "z-20  -translate-x-16": isLeft && layer >= 3,

                                  // Kartu di kanan (tertumpuk, geser ke kanan)
                                  "z-40  translate-x-4": isRight && layer === 1,
                                  "z-30  translate-x-8": isRight && layer === 2,
                                  "z-20  translate-x-16": isRight && layer >= 3,
                                },
                                width < 1024 && {
                                  // Kartu aktif (di tengah)
                                  "z-[41] ": isActive,

                                  // Kartu di kiri (tertumpuk, tetap geser dikit)
                                  "z-40 ": isLeft && layer === 1,
                                  "z-30 ": isLeft && layer === 2,
                                  "z-20  ": isLeft && layer >= 3,

                                  // Kartu di kanan (tertumpuk, geser ke kanan)
                                  "z-40": isRight && layer === 1,
                                  "z-30": isRight && layer === 2,
                                  "z-20 ": isRight && layer >= 3,
                                }
                              )}
                            >
                              {tab.content.map((content, contentIndex) => (
                                <div
                                  key={contentIndex}
                                  className="text-black text-sm xl:text-base"
                                >
                                  <div className="font-bold ">
                                    {content.title}
                                  </div>
                                  <div>{content.text}</div>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    </TabGroup>
                  </div>
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
