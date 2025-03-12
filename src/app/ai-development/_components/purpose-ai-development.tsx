"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { BsOpencollective } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoChevronDownCircleOutline } from "react-icons/io5";

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
        className="w-[50%] flex justify-between items-center py-4 transition"
      >
        <div className="flex items-center gap-5 text-[30px] font-bold">
          <span>{id}</span>
          <span>{title}</span>
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
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  );
};
export default function PurposeAIDevelopment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      id: "01",
      title: "Risk Management",
      content: "GSAP adalah library animasi JavaScript yang powerful.",
    },
    {
      id: "02",
      title: "Proposal Risk Management",
      content: "Tailwind adalah utility-first CSS framework.",
    },
    {
      id: "03",
      title: "Training and Development",
      content: "React sangat cocok untuk animasi dengan GSAP.",
    },
    {
      id: "04",
      title: "Supply Chain",
      content: "React sangat cocok untuk animasi dengan GSAP.",
    },
  ];

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
          <div className="border-l-[1px] border-r-[1px] py-[80px] px-[20px]">
            {accordionItems.map((item, index) => (
              <Accordion
                id={item.id}
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
