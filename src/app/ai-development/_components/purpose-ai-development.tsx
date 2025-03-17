"use client";

import useWindow from "@/hooks/useWindow";
import { cn } from "@/utils/cn";
import { Tab, TabPanels, TabGroup, TabList } from "@headlessui/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

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

  const accordionItems = [
    {
      id: "01",
      title: "Risk Management",
      content:
        "Identifying potential risks in real-time can be challenging, especially in dynamic environments with multiple variables.",
      banner: "/accordion/risk-management.png",
      tabs: [
        {
          name: "Challenge",
          content: [
            {
              title: "Risk Identification",
              text: "Identifying potential risks in real time can be challenging, especially in dynamic environments with multiple variables.",
            },
            {
              title: "Communication Gaps",
              text: "Delays in communicating risks to relevant stakeholders can lead to increased and escalated incidents.",
            },
            {
              title: "Resource Strain",
              text: "Increasing workloads reduce the ability to work on high- importance tasks.",
            },
          ],
          color: "bg-[#99B9FF]",
        },
        {
          name: "Size Of Problem",
          content: [
            {
              title: "Cost of Headcount",
              text: "Takes about 20% bandwidth of operational headcount, leading to inefficiencies.",
            },
            {
              title: "Improved Response Times",
              text: "Automated tracking can reduce potential damages significantly.",
            },
            {
              title: "Potential Damages",
              text: "Failing to quickly address potential incidents can lead to up to 100m in damages.",
            },
          ],
          color: "bg-white",
        },
        {
          name: "Define Value",
          content: [
            {
              title: "Cost Savings",
              text: "Saves the company approximately 6 million per annum.",
            },
            {
              title: "Improved Response Times",
              text: "An automated tracker can reduce potential damages by 2% within the first 12 months.",
            },
            {
              title: "Response & Recovery",
              text: "Faster risk identification can lead to quicker response times, minimizing potential impact and facilitating recovery efforts.",
            },
          ],
          color: "bg-[#D6E8F7]",
        },
      ],
    },
    {
      id: "02",
      title: "Proposal Risk Management",
      content: "Risk assessments can be highly complex and error-prone.",
      banner: "/accordion/proposal.png",
      tabs: [
        {
          name: "Challenge",
          content: [
            {
              title: "Highly Complex",
              text: "Risk assessments can be highly complex and can be error-prone.",
            },
            {
              title: "Poorly Assessed Risks",
              text: "Failing to properly assess risks can lead to significant operational risks and financial losses.",
            },
            {
              title: "Resource Strain",
              text: "Increasing workloads reduce the ability to work on high-importance tasks.",
            },
          ],
          color: "bg-[#99B9FF]",
        },
        {
          name: "Size Of Problem",
          content: [
            {
              title: "Cost of Headcount",
              text: "Takes about 20% bandwidth of six operational headcount (approximately 60k per employee x 6 x 20% per annum = 72k).",
            },
            {
              title: "Cost of Management",
              text: "Takes about 20% bandwidth of 1 management headcount (approximately 150k per employee x 1 x 20% per annum = 60k) bandwidth of six operational headcount (approximately 60k per employee x 6 x 20% per annum = 72k).",
            },
            {
              title: "Operational Risks",
              text: "Incorrectly approving flawed proposals can lead to substantial financial risks.",
            },
          ],
          color: "bg-white",
        },
        {
          name: "Define Value",
          content: [
            {
              title: "Cost Savings",
              text: "Saves the company approximately 132k per annum.",
            },
            {
              title: "Increased Productivity",
              text: "Automating the process helps technical and engagement headcount focus on high-value work.",
            },
            {
              title: "Risk Mitigation",
              text: "Potentially avoid millions in damages and ensuring operational safety.",
            },
          ],
          color: "bg-[#D6E8F7]",
        },
      ],
    },
    {
      id: "03",
      title: "Training and Development",
      content:
        "Employees receive training that is not aligned with career goals or organizational needs.",
      banner: "/accordion/training.png",
      tabs: [
        {
          name: "Challenge",
          content: [
            {
              title: "Training Misalignment",
              text: "Employees receive training that is not aligned with career goals or organizational needs.",
            },
            {
              title: "Inefficient Learning Paths",
              text: "Without personalized learning paths and tools, employees may take longer to operationalize skills.",
            },
            {
              title: "Resource Allocation",
              text: "Managing and delivering training programs is resource-intensive and prone to inefficiencies.",
            },
          ],
          color: "bg-[#99B9FF]",
        },
        {
          name: "Size Of Problem",
          content: [
            {
              title: "Cost of Training",
              text: "Inefficient training programs (1k per employee x 5k employees x 30% inefficient training = 1.5m) wasted resources spent on training.",
            },
            {
              title: "Cost of Resource",
              text: "Time spent on ineffective training programs takes time away from work (60k per employee x 5k employees / 52 (1 week) = 5.7m).",
            },
            {
              title: "Loss of Productivity Gains",
              text: "Potential productivity efficiency gains from training of 3%. (60k per employee x 5k employees x 3% = 9m).",
            },
          ],
          color: "bg-white",
        },
        {
          name: "Define Value",
          content: [
            {
              title: "Reduces Cost of Training",
              text: "Saves the company by approximately 1.5 million per annum.",
            },
            {
              title: "Reduces Cost of Resource",
              text: "Effective training programs can potentially substantially reduce the cost of resources taken away by training.",
            },
            {
              title: "Increase Productivity",
              text: "More productive employees due to effective training can increase productivity by up to 3%.",
            },
          ],
          color: "bg-[#D6E8F7]",
        },
      ],
    },
    {
      id: "04",
      title: "Supply Chain",
      content:
        "Fluctuating demand makes it difficult to accurately forecast and plan inventory, leading to overstock or shortages.",
      banner: "/accordion/supply-chain.png",
      tabs: [
        {
          name: "Challenge",
          content: [
            {
              title: "Demand Forecasting",
              text: "Fluctuating demand makes it difficult to accurately forecast and plan inventory, leading to overstock or stockouts.",
            },
            {
              title: "Inventory Management",
              text: "Inefficient inventory management increases holding costs and reduces cash flow.",
            },
            {
              title: "Decision Complexity",
              text: "Supply chain decisions require a robust analysis of various metrics, which can be time-consuming and prone to errors.",
            },
          ],
          color: "bg-[#99B9FF]",
        },
        {
          name: "Size Of Problem",
          content: [
            {
              title: "Cost of Purchases",
              text: "The company spends approximately $100m on vendor purchases, with inefficiencies leading to unnecessary costs.",
            },
            {
              title: "Operational Inefficiencies",
              text: "Poor supply chain management results in lost sales opportunities and increased operational costs.",
            },
          ],
          color: "bg-white",
        },
        {
          name: "Define Value",
          content: [
            {
              title: "Cost Savings",
              text: "Optimizing purchasing decisions results in a 3% savings on vendor purchases, amounting to $300,000 on a $10 million spend.",
            },
            {
              title: "Improved Inventory Management",
              text: "Enhance inventory management, reducing holding costs and freeing up capital for other investments.",
            },
            {
              title: "Increase Productivity",
              text: "Provide data-driven insights to support more accurate and timely supply chain decisions, improving efficiency and responsiveness.",
            },
          ],
          color: "bg-[#D6E8F7]",
        },
      ],
    },
  ];

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
