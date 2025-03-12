"use client";

import Image from "next/image";

const sosialMedia = [
  {
    url: "",
    logo: "/sosmed/linkedin.png",
  },
  {
    url: "",
    logo: "/sosmed/tiktok.png",
  },
  {
    url: "",
    logo: "/sosmed/x.png",
  },
  {
    url: "",
    logo: "/sosmed/ig.png",
  },

  {
    url: "",
    logo: "/sosmed/yt.png",
  },
  {
    url: "",
    logo: "/sosmed/wa.png",
  },
];
export default function Footer() {
  return (
    <div className="flex pt-[25px] justify-center bg-slate">
      <div className="main-container w-[100%]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] py-[25px] gap-[10px]">
          <div className="fade-up">
            <div className="flex items-center  justify-start">
              <Image
                src="/logo/brandev-black.png"
                alt="sample"
                width={200}
                height={40}
              />
            </div>
            <div className="mt-[20px] text-[10px] xl:w-[70%]">
              Leverage AI-powered solutions for sustainable revenue, efficient
              operations, and maximized client retention. Take the first step
              towards an AI-enabled future for your business with Brandrev.
            </div>

            <div className="flex mt-[20px] items-center  gap-2">
              {sosialMedia.map((item, index) => (
                <Image
                  key={index}
                  src={item.logo}
                  className="cursor-pointer"
                  alt="sample"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <div className="mt-[20px] text-[10px]">
              © Copyright 2025 brandrev.ai · All rights reserved.
            </div>
          </div>
          <div>
            <div className="grid fade-up text-[10px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[8px">
              <div>
                <div className="font-bold">Demand Generation</div>
                <div className="flex flex-col mt-[20px]">
                  <div>AI Development</div>
                  <div>GenAI Assets </div>
                  <div>TuneAI Platform</div>
                </div>
              </div>
              <div>
                <div className="font-bold">Capability Development </div>
                <div className="flex flex-col mt-[20px]">
                  <div>Corporate Training</div>
                  <div>Personal Development </div>
                  <div>PostGrad Scholarship</div>
                </div>
              </div>
              <div>
                <div className="font-bold">AI Resources</div>
                <div className="flex flex-col mt-[20px]">
                  <div>AI Impact on Jobs</div>
                  <div>AI Newsletter </div>
                  <div>Publications</div>
                </div>
              </div>
              <div>
                <div className="font-bold">Our Project</div>
                <div className="flex flex-col mt-[20px]">
                  <div> Our Story</div>
                  <div>Our Project </div>
                  <div>Events & Keynotes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
