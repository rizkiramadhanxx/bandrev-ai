"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex pt-[100px] justify-center bg-slate">
      <div className="main-container w-[100%]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr] py-[50px] gap-10">
          <div>
            <div>
              Leverage AI-powered solutions for sustainable revenue, efficient
              operations, and maximized client retention. Take the first step
              towards an AI-enabled future for your business with Brandrev.
            </div>
            <div className="flex mt-[20px] items-center  justify-start">
              <Image src="/redis.svg" alt="sample" width={200} height={40} />
            </div>
            <div className="flex mt-[20px] items-center  gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/redis.svg"
                  alt="sample"
                  width={50}
                  height={50}
                />
              ))}
            </div>
            <div className="mt-[25px]">
              © Copyright 2025 brandrev.ai · All rights reserved.
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[8px">
              <div>
                <div className="text-lg font-bold">Demand Generation</div>
                <div className="flex flex-col mt-[20px]">
                  <div>AI Development</div>
                  <div>GenAI Assets </div>
                  <div>TuneAI Platform</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">Capability Development </div>
                <div className="flex flex-col mt-[20px]">
                  <div>Corporate Training</div>
                  <div>Personal Development </div>
                  <div>PostGrad Scholarship</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">AI Resources</div>
                <div className="flex flex-col mt-[20px]">
                  <div>AI Impact on Jobs</div>
                  <div>AI Newsletter </div>
                  <div>Publications</div>
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">Our Project</div>
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
