"use client";

import Image from "next/image";

export default function ConceptAIdevelopment() {
  return (
    <div className="flex justify-center py-[50px] bg-white bg-[url('/texture/texture-8-dot.png')]">
      <div className="xl:px-[100px] main-container w-[100%]">
        <div className="flex flex-col items-center justify-center text-black">
          <div className="text-center text-[30px]">
            AI Concept to Implementation
          </div>
          <div className="flex justify-center mt-[30px]">
            <Image
              alt="ai-concept"
              src="/banner/ai-concept.png"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
